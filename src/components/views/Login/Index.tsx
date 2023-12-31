import AuthLayout from "@/components/layouts/AuthLayout";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
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
    // <div className="w-full h-screen flex items-center justify-center flex-col">
    //   <div className="lg:w-2/3 flex lg:flex-row-reverse border sm:flex-col-reverse">
    //     <div className="lg:w-2/4 sm:w-full bg-blueLight px-8 py-5 flex flex-col justify-center">
    //       <h1 className="text-white text-3xl font-semibold text-center">
    //         Login
    //       </h1>
    //       <div className="p-[20px]">
    //         {error && <p className="text-red-500 text-center">{error}</p>}
    //         <form onSubmit={handleSubmit}>
    //           <Input
    //             label="Email"
    //             name="email"
    //             type="email"
    //             placehoder="Masukkan Email..."
    //           />
    //           <Input
    //             label="Password"
    //             name="password"
    //             type="password"
    //             placehoder="Masukkan Password..."
    //           />
    //           <p className="text-white text-right mb-4 text-sm">
    //             Belum punya akun? Register{" "}
    //             <Link
    //               href="/auth/register"
    //               className="text-slate-800 underline">
    //               disini
    //             </Link>
    //           </p>
    //           <Button
    //             type="submit"
    //             className="bg-slate-800 text-white w-full hover:bg-white hover:text-blueLight">
    //             {isLoading ? "Loading..." : "Login"}
    //           </Button>
    //           <p className="text-white text-center my-2 text-sm">Atau</p>
    //           <Button
    //             type="button"
    //             className="bg-slate-800 text-white w-full hover:bg-white hover:text-blueLight items-center justify-center flex"
    //             onClick={() =>
    //               signIn("google", { callbackUrl, redirect: false })
    //             }>
    //             <i className="bx bxl-google pr-1" />
    //             Login dengan Google
    //           </Button>
    //         </form>
    //       </div>
    //     </div>
    //     <div className="w-2/4 bg-white p-6 pt-8">
    //       <h1 className="text-3xl font-semibold text-center text-blueLight">
    //         Selamat Datang !
    //       </h1>
    //       <p className="text-center mt-4 text-sm">
    //         Untuk tetap terhubung dengan kami, Masuk menggunakan akun yang sudah
    //         terdaftar
    //         <Image
    //           src="/authIcon2.png"
    //           width={300}
    //           height={300}
    //           alt="logo register"
    //           className="mx-auto mt-4  w-[350px]"
    //         />
    //       </p>
    //     </div>
    //   </div>
    // </div>
    <AuthLayout
      title="Login"
      tagline="Selamat Datang !"
      description="Untuk tetap terhubung dengan kami, Masuk menggunakan akun yang sudah terdaftar"
      image="/authIcon2.png">
      <div className="p-[20px]">
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleSubmit}>
          <Input
            label="Email"
            name="email"
            type="email"
            placehoder="Masukkan Email..."
          />
          <Input
            label="Password"
            name="password"
            type="password"
            placehoder="Masukkan Password..."
          />
          <p className="text-white text-right mb-4 text-sm">
            Belum punya akun? Register{" "}
            <Link href="/auth/register" className="text-slate-800 underline">
              disini
            </Link>
          </p>
          <Button
            type="submit"
            className="bg-slate-800 text-white w-full hover:bg-white hover:text-blueLight">
            {isLoading ? "Loading..." : "Login"}
          </Button>
          <p className="text-white text-center my-2 text-sm">Atau</p>
          <Button
            type="button"
            className="bg-slate-800 text-white w-full hover:bg-white hover:text-blueLight items-center justify-center flex"
            onClick={() => signIn("google", { callbackUrl, redirect: false })}>
            <i className="bx bxl-google pr-1" />
            Login dengan Google
          </Button>
        </form>
      </div>
    </AuthLayout>
  );
};

export default LoginView;
