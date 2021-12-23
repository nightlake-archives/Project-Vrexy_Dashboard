export default async function authorized(req, res) {
    const userToken = await fetch('https://discord.com/api/oauth2/token', {
        method: 'POST',
        body: {
            'client_id': process.env.CID,
            'client_secret': process.env.CSECRET,
            'grant_type': 'authorization_code',
            'code': req.query.code,
            'redirect_uri': process.env.REDIRECT
        },
        headers: {  
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })

    res.status(200).json(userToken)
}   