import Head from "next/head";
import Navbar from "../src/auth/Navbar";

function Login(){
    return (
        <div>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Task manager💖 | Login</title>
                <link rel="shortcut icon" href="/icon/descarga.ico"/>
            </Head>
            <Navbar></Navbar>
        </div>
    )
}
  
export default Login;