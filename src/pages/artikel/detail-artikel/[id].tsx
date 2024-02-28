import DetailArtikelView from "@/components/views/artikel/DetailArtikelView";
import articleServices from "@/services/articles";
import userServices from "@/services/users";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

type Props = {};

const DetailartikelPage = (props: Props) => {
  const [detailArticle, setDetailArticle] = useState<any>([]);
  const [profile, setProfile] = useState<any>({});
  const session: any = useSession();
  const { query }: any = useRouter();

  useEffect(() => {
    if (session.data?.accessToken && Object.keys(profile).length === 0) {
      const getProfile = async () => {
        const { data } = await userServices.getProfile(
          session.data?.accessToken
        );
        setProfile(data.data);
      };
      getProfile();
    }
  }, [profile, session]);

  useEffect(() => {
    const getArticleById = async () => {
      const { data } = await articleServices.getArticleById(query.id);
      setDetailArticle(data?.data);
    };
    getArticleById();
  }, [query.id]);

  return (
    <>
      <DetailArtikelView
        detailArticle={detailArticle}
        profile={profile}
        session={session}
      />
    </>
  );
};

export default DetailartikelPage;
