import Head from "next/head";
import Navbar from "./navbar";
import Footer from "./footer";

function Layout(props: React.HtmlHTMLAttributes<HTMLDivElement>) {
  return (
    <>
      <Head>
        <title>Adekunle Adeleke</title>
        <meta
          name="description"
          content="Portfolio website for Samad Adekunle Adeleke"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Navbar />
      </header>
      <main>{props.children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Layout;
