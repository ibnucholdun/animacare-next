import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

type Props = {
  children: React.ReactNode;
  title: string;
  tagline: string;
  description: string;
  image: string;
};

const AuthLayout = (props: Props) => {
  const { children, title, tagline, description, image } = props;
  const { pathname } = useRouter();

  return (
    <div className="w-full h-screen flex items-center justify-center flex-col">
      <div
        className={`lg:w-2/3 flex  border sm:flex-col-reverse ${
          pathname === "/auth/login"
            ? "lg:flex-row-reverse sm:flex-col-reverse"
            : "lg:flex-row sm:flex-col"
        }`}>
        <div className="lg:w-2/4 sm:w-full bg-blueLight px-8 py-5 flex flex-col justify-center">
          <h1 className="text-white text-3xl font-semibold text-center">
            {title}
          </h1>
          {children}
        </div>
        <div className="w-2/4 bg-white p-6 pt-8">
          <h1 className="text-3xl font-semibold text-center text-blueLight">
            {tagline}
          </h1>
          <p className="text-center mt-4 text-sm">
            {description}
            <Image
              src={image}
              width={300}
              height={300}
              alt={`logo ${title}`}
              className="mx-auto mt-4  w-[350px]"
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
