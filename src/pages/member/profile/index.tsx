import ProfileView from "@/components/views/member/profile/ProfileView";
import userServices from "@/services/users";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

type Props = {};

const ProfilePage = (props: Props) => {
  const session: any = useSession();
  const [profile, setProfile] = useState<any>({});

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
  return (
    <>
      <ProfileView
        profile={profile}
        setProfile={setProfile}
        session={session}
      />
    </>
  );
};

export default ProfilePage;
