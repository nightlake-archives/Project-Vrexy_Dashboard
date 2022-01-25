import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';

const Home: NextPage = () => {
	const [id, setID] = useState('oops');
	const [uri, setURI] = useState('oops');

	useEffect(() => {
		async function run() {
			const env = await import('../env.json');
			setID(env.id);
			setURI(env.uri);
		}
		run();
	})

	return (
		<Layout title="Vrexy, The discord bot">
			<h1>Vrexy Dashboard</h1>
			<a href={`https://discord.com/api/oauth2/authorize?client_id=${id}&redirect_uri=${uri}&response_type=code&scope=guilds%20identify`}
			>Login</a>
		</Layout>
	)
}

export default Home
