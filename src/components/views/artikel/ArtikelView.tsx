import React from "react";
import Image from "next/image";
import Link from "next/link";
import ArtikelLayout from "../../layouts/ArtikelLayout";
import CardArtikel from "@/components/fragments/CardArtikel";

type Props = {};

const ArtikelView: React.FC<Props> = () => {
  return (
    <ArtikelLayout>
      <h1 className="text-2xl font-semibold ">Artikel Terbaru</h1>
      <div className="flex mt-8 mb-12 flex-wrap gap-16 justify-center">
        <CardArtikel
          image={"/artikel1.png"}
          title={"Beri vaksin pada kucing umur 3 bulan"}
          description={` Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
            voluptates quaerat tempore quasi voluptas, error, laboriosam cumque
            enim dolor hic dolorum distinctio, veniam praesentium? Quibusdam
            ullam voluptatibus nobis officiis minima.`}
          link={"#"}
        />
        <CardArtikel
          image={"/artikel1.png"}
          title={"Beri vaksin pada kucing umur 3 bulan"}
          description={` Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
            voluptates quaerat tempore quasi voluptas, error, laboriosam cumque
            enim dolor hic dolorum distinctio, veniam praesentium? Quibusdam
            ullam voluptatibus nobis officiis minima.`}
          link={"#"}
        />
        <CardArtikel
          image={"/artikel1.png"}
          title={"Beri vaksin pada kucing umur 3 bulan"}
          description={` Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
            voluptates quaerat tempore quasi voluptas, error, laboriosam cumque
            enim dolor hic dolorum distinctio, veniam praesentium? Quibusdam
            ullam voluptatibus nobis officiis minima.`}
          link={"#"}
        />
        <CardArtikel
          image={"/artikel1.png"}
          title={"Beri vaksin pada kucing umur 3 bulan"}
          description={` Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
            voluptates quaerat tempore quasi voluptas, error, laboriosam cumque
            enim dolor hic dolorum distinctio, veniam praesentium? Quibusdam
            ullam voluptatibus nobis officiis minima.`}
          link={"#"}
        />
      </div>
    </ArtikelLayout>
  );
};

export default ArtikelView;
