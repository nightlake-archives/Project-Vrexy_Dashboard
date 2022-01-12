import express from 'express';
import { fetch } from 'undici';

const app = express();
const port = 3000;

app.get('/', (req: express.Request, res: express.Response) => {
	return res.send('<a href="https://discord.com/api/oauth2/authorize?client_id=822203887083454472&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fauthorized&response_type=code&scope=identify%20guilds>the button</a>');
});

app.get('/api/authorized', async (req: express.Request, res: express.Response) => {
	const userToken = await fetch('https://discord.com/api/oauth2/token', {
		method: 'POST',
		body: new URLSearchParams({
			'client_secret': process.env.CSECRET,
			'grant_type': 'authorization_code',
			'code': req.query.code.toString(),
			'redirect_uri': process.env.REDIRECT,
			'scope': 'identify,guilds',
		}),
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
		},
	});

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const discordRes: any = await userToken.json();
	if (discordRes.error) return res.status(400).send('There was an issue authenticating. Please try again.');

	res.header(
		'Set-Cookie',
		`token=${discordRes.access_token}; SameSite=None; Secure; Max-Age=${discordRes.expires_in}`
	);

	return res.redirect('/dashboard');
});

app.get('/dashboard', async (req: express.Request, res: express.Response) => {
	return res.send(req.cookies);
});


app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});