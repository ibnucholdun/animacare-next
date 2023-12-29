import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

type Props = {};

const RegisterView = (props: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const { push } = useRouter();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    setError("");
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const data = {
      email: form.email.value,
      fullname: form.fullname.value,
      phone: form.phone.value,
      password: form.password.value,
    };

    const result = await fetch("/api/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (result.status === 200) {
      setIsLoading(false);
      form.reset();
      push("/auth/login");
    } else {
      setIsLoading(false);
      setError("Email already exists");
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center flex-col">
      <div className="lg:w-2/3 flex lg:flex-row border sm:flex-col">
        <div className="lg:w-2/4 sm:w-full bg-blueLight p-8">
          <h1 className="text-white text-3xl font-semibold text-center">
            Register
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
              <div className="flex flex-col my-[20px]">
                <label
                  htmlFor="fullname"
                  className="text-white font-semibold text-xl">
                  Fullname
                </label>
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  className="p-[10px]  mt-[5px] border-none outline-none rounded"
                />
              </div>
              <div className="flex flex-col my-[20px]">
                <label
                  htmlFor="phone"
                  className="text-white font-semibold text-xl">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
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
                Sudah punya akun? Login{" "}
                <Link href="/auth/login" className="text-slate-800 underline">
                  disini
                </Link>
              </p>
              <button
                type="submit"
                className="bg-slate-800 text-white w-full border-none p-[10px] rounded text-lg hover:bg-white hover:text-blueLight">
                {isLoading ? "Loading..." : "Register"}
              </button>
            </form>
          </div>
        </div>
        <div className="w-2/4 bg-white p-6 pt-8">
          <h1 className="text-3xl font-semibold text-center text-blueLight">
            Haloo.... Pencinta Hewan
          </h1>
          <p className="text-center mt-4 text-sm">
            Isi data dirimu dengan melengkapi form ini untuk bergabung bersama
            kami
            <Image
              src="/authIcon.png"
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

export default RegisterView;
