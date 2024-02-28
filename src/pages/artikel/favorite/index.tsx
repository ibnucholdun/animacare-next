import ArtikelFavoriteView from "@/components/views/artikel/ArtikelFavoriteView";
import favoriteArtikel from "@/services/favoritesArticle";
import userServices from "@/services/users";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

type Props = {};

const ArtikelFavoritePage = (props: Props) => {
  const [profile, setProfile] = useState<any>({});
  const [favorite, setFavorite] = useState<any>();
  const session: any = useSession();

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
    const getFavoriteArticle = async () => {
      const { data } = await favoriteArtikel.getAllFavoriteArtikel(
        session.data?.accessToken
      );
      setFavorite(data.data);
    };
    getFavoriteArticle();
  }, [session]);

  return (
    <>
      <ArtikelFavoriteView profile={profile} favorite={favorite} />
    </>
  );
};

export default ArtikelFavoritePage;
