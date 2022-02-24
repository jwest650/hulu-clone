import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Result from "../components/Result";
import request from "../utils/request";
export default function Home({ result }) {
    console.log(result);
    return (
        <div>
            <Head>
                <title>HuLu 2.0</title>
                <meta property="og:title" content="My page title" key="title" />
            </Head>
            <Header />
            <Nav />
            <Result results={result} />
        </div>
    );
}

export async function getServerSideProps(context) {
    const genre = context.query.genre;
    const requests = await fetch(
        `https://api.themoviedb.org/3/${
            request[genre]?.url || request.fetchTrending.url
        }`
    ).then((res) => res.json());

    return {
        props: {
            result: requests.results,
        },
    };
}
