import Image from "next/image";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="bg-blueLight text-white">
      <div className="flex justify-around gap-8 px-24 py-10">
        <div className="flex flex-col gap-3">
          <h1 className="text-xl text-center font-semibold">Kontak</h1>
          <ul className="flex flex-col gap-3">
            <li className="flex justify-center items-center gap-1">
              <i className="bx bxs-phone text-2xl"></i> +62 867-5340-9873
            </li>
            <li className="flex justify-center items-center gap-1">
              <i className="bx bxs-message text-2xl"></i> +62 867-5340-9873
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-xl text-center font-semibold">Email</h1>
          <p className="flex justify-center items-center gap-1">
            <i className="bx bxs-envelope text-2xl"></i> animacare15@gmail.com
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-xl text-center font-semibold">Alamat</h1>
          <p className="flex gap-1 text-center">
            <i className="bx bxs-map text-2xl"></i>
            Jl. Dipati Ukur, Lebakgede, Kecamatan Coblong, <br />
            Kota Bandung, Jawa Barat 40132
          </p>
        </div>
      </div>
      <hr />
      <p className="text-center p-4">
        <span className="font-semibold">©AnimaCare</span>, 2024. All Rights
        Reserved
      </p>
    </div>
  );
};

export default Footer;
