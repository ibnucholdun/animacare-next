import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// Services
import authServices from "@/services/auth";

// Components
import AuthLayout from "@/components/layouts/AuthLayout";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

//Toastify
import { toast } from "react-toastify";

type Props = {};

const RegisterView = (props: Props) => {
  const [isLoading, setIsLoading] = useState(false);

  const { push } = useRouter();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const data = {
      email: form.email.value,
      fullname: form.fullname.value,
      phone: form.phone.value,
      password: form.password.value,
    };

    try {
      const result = await authServices.registerAccount(data);

      if (result.status === 200) {
        setIsLoading(false);
        form.reset();
        toast.success("Register Success");
        push("/auth/login");
      } else {
        setIsLoading(false);
        toast.error("Email already exists");
      }
    } catch (error) {
      setIsLoading(false);
      toast.error("Email already exists");
    }
  };

  return (
    <AuthLayout
      title="Register"
      tagline="Haloo.... Pencinta Hewan"
      description="Isi data dirimu dengan melengkapi form ini untuk bergabung bersama kami"
      image="/authIcon.png">
      <div className="p-[20px]">
        <form onSubmit={handleSubmit}>
          <Input
            label="Email"
            name="email"
            type="email"
            placehoder="Masukkan Email..."
          />
          <Input
            label="Nama Lengkap"
            name="fullname"
            type="text"
            placehoder="Masukkan nama lengkap..."
          />
          <Input
            label="Telepon"
            name="phone"
            type="text"
            placehoder="Masukkan nomor tel..."
          />
          <Input
            label="Password"
            name="password"
            type="password"
            placehoder="Masukkan Password..."
          />

          <p className="text-white text-right mb-4 text-sm">
            Sudah punya akun? Login{" "}
            <Link href="/auth/login" className="text-slate-800 underline">
              disini
            </Link>
          </p>

          <Button
            type="submit"
            className="bg-slate-800 text-white w-full hover:bg-white hover:text-blueLight">
            {isLoading ? "Loading..." : "Register"}
          </Button>
        </form>
      </div>
    </AuthLayout>
  );
};

export default RegisterView;
