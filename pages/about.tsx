import Head from "next/head";

const about = () => {
    return (
        <>
            <Head>
                <title>About</title>
                <meta property="og:about" content="About" key={1} />
            </Head>
            <h1>About</h1>    
        </>
    )
}

export default about
