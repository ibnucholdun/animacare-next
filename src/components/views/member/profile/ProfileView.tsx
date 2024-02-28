import React, {
  Dispatch,
  FormEvent,
  SetStateAction,
  useRef,
  useState,
} from "react";
import ProfileLayout from "@/components/layouts/ProfileLayout";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import userServices from "@/services/users";
import { uploadFile } from "@/lib/firebase/services";

type Props = {
  profile: any;
  setProfile: Dispatch<SetStateAction<{}>>;
  session: any;
};

const ProfileView: React.FC<Props> = ({ profile, setProfile, session }) => {
  const inputRef = useRef<any>(null);
  const [image, setImage] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState("");
  const [disabled, setDisabled] = useState(true);

  const handleChangeProfile = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading("profile");
    const form = e.target as HTMLFormElement;
    const data = {
      fullname: form.fullname.value,
      phone: form.phone.value,
    };
    const result = await userServices.updateProfile(
      data,
      session.data?.accessToken
    );

    if (result.status === 200) {
      setIsLoading("");
      setProfile({
        ...profile,
        fullname: data.fullname,
        phone: data.phone,
      });
      form.reset();
    } else {
      setIsLoading("");
    }
  };
  const handleChangeProfilePicture = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading("picture");
    const form = e.target as HTMLFormElement;
    const file = form.image.files[0];
    const newName = "profile." + file.name.split(".")[1];
    if (file) {
      uploadFile(
        profile.id,
        file,
        newName,
        "users",
        async (status: boolean, newImageURL: string) => {
          if (status) {
            const data = {
              image: newImageURL,
            };
            const result = await userServices.updateProfile(
              data,
              session.data?.accessToken
            );

            if (result.status === 200) {
              setIsLoading("");
              setProfile({
                ...profile,
                image: newImageURL,
              });
              setImage(null);
              form.reset();
              setDisabled(true);
              URL.revokeObjectURL(URL.createObjectURL(image!));
            } else {
              setIsLoading("");
            }
          } else {
            setIsLoading("");
            setImage(null);
            setDisabled(true);
          }
        }
      );
    }
  };

  return (
    <ProfileLayout>
      <div className="p-10 text-slate-700">
        <h1 className="text-2xl font-medium">Detail Profile</h1>
        <div className="my-5 flex justify-center flex-col w-full">
          <div className="flex flex-row gap-4 items-center">
            <div className="flex items-center gap-10">
              <div className="" onClick={() => inputRef.current.click()}>
                <h1 className="mb-3 text-blueLight">Foto Profil</h1>
                <div className="relative hover:cursor-pointer">
                  <Image
                    src={image ? URL.createObjectURL(image) : profile?.image}
                    width={100}
                    height={100}
                    alt="profile"
                    className="rounded-full border  opacity-100 hover:opacity-50 cursor-pointer w-[100px] h-[100px] object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100">
                    <i className="bx bx-edit-alt text-2xl text-gray500"></i>
                  </div>
                </div>
                <p className="text-xs font-extralight text-center pt-2">
                  Max: 1mb
                </p>
              </div>
              <form action="" onSubmit={handleChangeProfilePicture}>
                <input
                  type="file"
                  ref={inputRef}
                  className="hidden"
                  id="image"
                  name="image"
                  onChange={(event: any) => {
                    event.preventDefault();
                    setImage(event.target.files[0]);
                    setDisabled(false);
                  }}
                />
                <Button
                  type="submit"
                  disabled={disabled}
                  className={`bg-blueLight text-white ${
                    image === null && "cursor-not-allowed opacity-50"
                  }`}>
                  {isLoading === "picture" ? "Loading..." : "Ubah Foto"}
                </Button>
              </form>
            </div>
          </div>
          <form className="flex flex-col" onSubmit={handleChangeProfile}>
            <Input
              label="Fullname"
              name="fullname"
              type="text"
              classname="border w-1/2"
              defaultValue={profile.fullname}
              variant="text-blueLight"
            />
            <Input
              label="Phone"
              name="phone"
              type="phone"
              classname="border w-1/2"
              defaultValue={profile.phone}
              variant="text-blueLight"
            />
            <Input
              label="Email"
              name="email"
              type="email"
              classname="border w-1/2"
              defaultValue={profile.email}
              variant="text-blueLight"
              disabled
            />
            <Input
              label="Role"
              name="role"
              type="text"
              classname="border w-1/2"
              disabled
              defaultValue={profile.role}
              variant="text-blueLight"
            />
            <button
              type="submit"
              className="bg-blueLight mt-5 px-8 py-3 text-white w-1/2 rounded-lg outline-none border hover:bg-[#A0C4FF]">
              {isLoading === "profile" ? "Loading..." : "Ubah Profil"}
            </button>
          </form>
        </div>
      </div>
    </ProfileLayout>
  );
};

export default ProfileView;
