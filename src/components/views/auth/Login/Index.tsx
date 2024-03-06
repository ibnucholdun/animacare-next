import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";

// Components
import AuthLayout from "@/components/layouts/AuthLayout";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

// Assets
import { AuthIcon2 } from "@/assets/icons";

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
    <AuthLayout
      title="Login"
      tagline="Selamat Datang !"
      description="Untuk tetap terhubung dengan kami, Masuk menggunakan akun yang sudah terdaftar"
      image={AuthIcon2}>
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
