import Head from "next/head";
import Navbar from "./navbar";
import Footer from "./footer";
import { ThemeProvider } from "../../hooks/ThemeContext";

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

      <ThemeProvider>
        <div className="bg-gray-100 dark:bg-black w-screen h-screen dark:text-colorWhite">
          <div
            className="bg-colorWhite dark:bg-colorBlack border dark:border-colorWhite/10 w-full h-full mx-auto overflow-auto
          lg:max-w-screen-lg md:max-w-screen-md flex flex-col px-3 md:px-5 lg:px-10 py-5"
          >
            <header>
              <Navbar />
            </header>
            <main className="flex-grow">{props.children}</main>
            <footer>
              <Footer />
            </footer>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default Layout;
