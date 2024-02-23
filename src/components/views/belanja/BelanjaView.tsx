import CardProduct from "@/components/fragments/CardProduct";
import BelanjaKategoriLayout from "@/components/layouts/BelanjaKategoriLayout";
import { capitalizeSentence } from "@/utils/capitalWord";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

type Props = {};

const iconBelanja = [
  {
    icon: "/iconMakananKucing.png",
    title: "Makanan Kucing",
    link: "/belanja/makanan-kucing",
  },
  {
    icon: "/iconMakananAnjing.png",
    title: "Makanan Anjing",
    link: "/belanja/makanan-anjing",
  },
  {
    icon: "/iconParfum.png",
    title: "Parfum",
    link: "/belanja/parfum",
  },
  {
    icon: "/iconVitamin.png",
    title: "Vitamin",
    link: "/belanja/vitamin",
  },
  {
    icon: "/iconKandang.png",
    title: "Kandang",
    link: "/belanja/kandang",
  },
  {
    icon: "/iconSusu.png",
    title: "Susu",
    link: "/belanja/susu",
  },
  {
    icon: "/iconObat.png",
    title: "Obat",
    link: "/belanja/obat",
  },
  {
    icon: "/iconBoxPasir.png",
    title: "Box Pasir",
    link: "/belanja/box-pasir",
  },
  {
    icon: "/iconPasir.png",
    title: "Pasir",
    link: "/belanja/pasir",
  },
  {
    icon: "/iconAksesoris.png",
    title: "Aksesoris",
    link: "/belanja/aksesoris",
  },
  {
    icon: "/iconSampo.png",
    title: "Shampo",
    link: "/belanja/sampo",
  },
  {
    icon: "/iconTasHewan.png",
    title: "Tas Hewan",
    link: "/belanja/tas-hewan",
  },
];

const BelanjaView = (props: Props) => {
  const { query } = useRouter();
  const [checked, setChecked] = useState(false);
  return (
    <>
      {Object.keys(query).length === 0 && (
        <div className="w-full px-24 my-12">
          <h1 className="text-3xl font-semibold ">
            Temukan produk yang dibutuhkan{" "}
            <span className="text-blueLight">Hewan Kesayangan Anda!</span>
          </h1>
          <section className="w-full flex justify-between p-6 mt-12 mb-24 gap-8">
            <div className="flex flex-col gap-3 justify-center items-center w-full h-full">
              <Image
                src="/belanja1.png"
                alt="belanja"
                width={500}
                height={500}
                className="w-64"
              />
              <p className="text-lg font-light text-center mt-4">
                Selamat berbelanja!, silahkan pilih kategori produk sesuai
                kebutuhan yang Anda inginkan
              </p>
            </div>
            <div className="flex flex-col gap-3 justify-center items-center w-full h-full">
              <Image
                src="/belanja2.png"
                alt="belanja"
                width={500}
                height={500}
                className="w-64"
              />
              <p className="text-lg font-light text-center mt-4">
                Setelah Anda memilih kategori produk dan memilih salah satu
                produk yang Anda inginkan, kami akan mengarahkan Anda ke salah
                satu platform marketplace terbaik dan terpercaya
              </p>
            </div>
            <div className="flex flex-col gap-3 justify-center items-center w-full h-full">
              <Image
                src="/belanja3.png"
                alt="belanja"
                width={500}
                height={500}
                className="w-64"
              />
              <p className="text-lg font-light text-center mt-4">
                Selesaikan proses belanja Anda dan temukan banyak diskon yang
                bisa Anda dapatkan pada produk yang diinginkan.
              </p>
            </div>
          </section>
          <h2 className="text-2xl font-semibold">Kategori Pilihan</h2>
          <section className="mb-24">
            <div className="flex flex-wrap items-center justify-center gap-12 mt-10">
              <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
                {iconBelanja.map((item, index) => (
                  <Link
                    href={item.link || ""}
                    className="border-blueLight flex flex-col items-center justify-center px-3 py-11 gap-3 border-2 rounded-md h-[250px] w-[200px]"
                    key={index}>
                    <Image
                      src={item.icon}
                      width={100}
                      height={100}
                      alt={"icon"}
                    />
                    <p className="text-xl font-semibold">{item.title}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}
      {query?.belanja && (
        <BelanjaKategoriLayout
          title={`${capitalizeSentence(
            query?.belanja[0].split("-").join(" ")
          )}`}>
          <CardProduct
            image="/produk.jpg"
            title="Royal Canin Hair and Skin Care Makanan Kucing Dewasa 400g"
            price="Rp254.000"
          />
        </BelanjaKategoriLayout>
      )}
    </>
  );
};

export default BelanjaView;
