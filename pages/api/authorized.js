require('dotenv').config();
import { serialize } from 'cookie';

export default async function authorized(req, res) {
    const data = new URLSearchParams({
        client_id: process.env.CID,
        client_secret: process.env.CSECRET,
        grant_type: 'authorization_code',
        code: req.query.code,
        redirect_uri: process.env.REDIRECT,
        scope: "identify,guilds"
    });

    const userToken = await fetch('https://discord.com/api/oauth2/token', {
        method: 'POST',
        body: data,
        headers: {  
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })

    const dRes = await userToken.json()

    if (dRes.error) return res.status(400).send('There was an issue authenticating. Please try again.')

    function setCookie(name, value) {
        res.setHeader('Set-Cookie', serialize(name, value, { path: '/Auth', maxAge: dRes.expires_in * 1000 }));
    }

    setCookie('token', dRes.access_token)
    setCookie('refresh', dRes.refresh_token)

    res.redirect('/dashboard')
}   