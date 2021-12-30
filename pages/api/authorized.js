require('dotenv').config();
import 'cookies-next';
import { setCookies } from 'cookies-next';

export default async function authorized(req, res) {
    // https://discord.com/api/oauth2/token
    
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

    const discordResponse = await userToken.json()

    if (discordResponse.error) return res.status(400).send('There was an issue authenticating. Please try again.')
    // res.setHeader('Set-Cookie', serialize(['token', 'refresh'], [dRes.access_token, dRes.refresh_token], {path: '/', maxAge: dRes.expires_in * 1000, sameSite: true}));

    setCookies('token', discordResponse.access_token, {req, res, maxAge: discordResponse.expires_in * 1000})
    setCookies('refresh', discordResponse.refresh_token, {req, res, maxAge: discordResponse.expires_in * 1000})
    
    res.redirect('/dashboard')
}   