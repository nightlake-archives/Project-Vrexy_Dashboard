import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const Home: NextPage = () => {
	const [id, setID] = useState('oops');
	const [uri, setURI] = useState('oops');

	useEffect(() => {
		async function ru() {
			const env = await import('../env.json');
			setID(env.id);
			setURI(env.uri);
		}
		ru();
	})

	return (
		<>
			<h1>Vrexy Dashboard</h1>
			<a href={`https://discord.com/api/oauth2/authorize?client_id=${id}&redirect_uri=${uri}&response_type=code&scope=guilds%20identify`}
			>Login</a>
		</>
	)
}

export default Home
