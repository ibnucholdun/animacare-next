import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const iconBelanja = [
  {
    icon: "/iconMakananKucing.png",
    title: "Makanan Kucing",
  },
  {
    icon: "/iconMakananAnjing.png",
    title: "Makanan Anjing",
  },
  {
    icon: "/iconParfum.png",
    title: "Parfum",
  },
  {
    icon: "/iconVitamin.png",
    title: "Vitamin",
  },
  {
    icon: "/iconKandang.png",
    title: "Kandang",
  },
  {
    icon: "/iconSusu.png",
    title: "Susu",
  },
  {
    icon: "/iconObat.png",
    title: "Obat",
  },
  {
    icon: "/iconBoxPasir.png",
    title: "Box Pasir",
  },
  {
    icon: "/iconPasir.png",
    title: "Pasir",
  },
  {
    icon: "/iconAksesoris.png",
    title: "Aksesoris",
  },
  {
    icon: "/iconSampo.png",
    title: "Shampo",
  },
  {
    icon: "/iconTasHewan.png",
    title: "Tas Hewan",
  },
];

const BelanjaView = (props: Props) => {
  return (
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
            Selamat berbelanja!, silahkan pilih kategori produk sesuai kebutuhan
            yang Anda inginkan
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
            Setelah Anda memilih kategori produk dan memilih salah satu produk
            yang Anda inginkan, kami akan mengarahkan Anda ke salah satu
            platform marketplace terbaik dan terpercaya
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
            Selesaikan proses belanja Anda dan temukan banyak diskon yang bisa
            Anda dapatkan pada produk yang diinginkan.
          </p>
        </div>
      </section>
      <h2 className="text-2xl font-semibold">Kategori Pilihan</h2>
      <section className="mb-24">
        <div className="flex flex-wrap items-center justify-center gap-12 mt-10">
          <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
            {iconBelanja.map((item, index) => (
              <div
                className="border-blueLight flex flex-col items-center justify-center px-3 py-11 gap-3 border-2 rounded-md h-[250px] w-[200px]"
                key={index}>
                <Image src={item.icon} width={100} height={100} alt={"icon"} />
                <p className="text-xl font-semibold">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BelanjaView;
