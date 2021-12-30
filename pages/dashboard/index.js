import Header from "../../components/header";
import Head from "next/head";

export default function dashboard() {
    return (
        <div>
            <Header />
            <Head>
                <title>Vrexy | Dashboard</title>
            </Head>
            <div className="flex flex-col items-center justify-center min-h-screen py-2">
            </div>
        </div>
    )
}