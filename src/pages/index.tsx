import HomeView from "@/components/views/HomeView";
import { useSession } from "next-auth/react";
import Head from "next/head";

export default function Home() {
  const { data } = useSession();
  return (
    <>
      <Head>
        <title>AnimaCare</title>
        <meta name="description" content="Website for AnimaCare" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="mx-24">
        <HomeView />
      </main>
    </>
  );
}
