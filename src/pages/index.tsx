import HomeView from "@/components/views/HomeView";
import articleServices from "@/services/articles";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const [article, setArticle] = useState([]);

  useEffect(() => {
    const getArticle = async () => {
      const { data } = await articleServices.getArticles();
      setArticle(data.data);
    };
    getArticle();
  }, []);

  return (
    <>
      <Head>
        <title>AnimaCare</title>
        <meta name="description" content="Website for AnimaCare" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="">
        <HomeView article={article} />
      </main>
    </>
  );
}
