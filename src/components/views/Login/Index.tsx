import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

type Props = {};

const LoginView = (props: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const { push, query } = useRouter();

  const callbackUrl: any = query.callbackUrl || "/";

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    setError("");
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: form.email.value,
        password: form.password.value,
        callbackUrl,
      });

      if (!res?.error) {
        setIsLoading(false);
        form.reset();
        push(callbackUrl);
      } else {
        setIsLoading(false);
        setError("Email or Password is incorrect");
      }
    } catch (error) {
      setIsLoading(false);
      setError("Something went wrong");
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center flex-col">
      <div className="lg:w-2/3 flex lg:flex-row-reverse border sm:flex-col-reverse">
        <div className="lg:w-2/4 sm:w-full bg-blueLight p-8 flex flex-col justify-center">
          <h1 className="text-white text-3xl font-semibold text-center">
            Login
          </h1>
          <div className="p-[20px]">
            {error && <p className="text-red-500 text-center">{error}</p>}
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col my-[20px]">
                <label
                  htmlFor="email"
                  className="text-white font-semibold text-xl">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="p-[10px]  mt-[5px] border-none outline-none rounded"
                />
              </div>
              <div className="flex flex-col mt-[20px] mb-[10px]">
                <label
                  htmlFor="password"
                  className="text-white font-semibold text-xl">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="p-[10px]  mt-[5px] border-none outline-none rounded"
                />
              </div>
              <p className="text-white text-right mb-4">
                Belum punya akun? Register{" "}
                <Link
                  href="/auth/register"
                  className="text-slate-800 underline">
                  disini
                </Link>
              </p>
              <button
                type="submit"
                className="bg-slate-800 text-white w-full border-none p-[10px] rounded text-lg hover:bg-white hover:text-blueLight">
                {isLoading ? "Loading..." : "Login"}
              </button>
            </form>
          </div>
        </div>
        <div className="w-2/4 bg-white p-6 pt-8">
          <h1 className="text-3xl font-semibold text-center text-blueLight">
            Selamat Datang !
          </h1>
          <p className="text-center mt-4 text-sm">
            Untuk tetap terhubung dengan kami, Masuk menggunakan akun yang sudah
            terdaftar
            <Image
              src="/authIcon2.png"
              width={300}
              height={300}
              alt="logo register"
              className="mx-auto mt-4  w-[500px]"
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginView;
