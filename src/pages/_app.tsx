import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";
import Navbar from "@/components/fragments/Navbar/Index";
import Footer from "@/components/fragments/Footer";
import { useRouter } from "next/router";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const disableNavbarAndFooter = ["auth", "admin"];

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const { pathname } = useRouter();

  return (
    <SessionProvider session={session}>
      <Head>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
      </Head>
      <div className={poppins.className}>
        {!disableNavbarAndFooter.includes(pathname.split("/")[1]) && <Navbar />}
        <Component {...pageProps} />
        {!disableNavbarAndFooter.includes(pathname.split("/")[1]) && <Footer />}
      </div>
    </SessionProvider>
  );
}
