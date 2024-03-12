 import React, { useState, useRef, useEffect } from "react";
import  LayoutGrid  from "../Ui/layout-grid";
const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">MEDITERRANI DECO</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Añádele a tus ambientes un toque único y particular con nuestros calcareos Mediterrani Deco, perteneciente a la Serie Mediterrani. Su diseño original y acabado brillante lo hacen ideal para brindar autenticidad a tus ambientes.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">VERBENA</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Vervena Mix forma parte de nuestra Colección Madreselva.
La naturaleza se brinda con sus colores y aromas, nos abraza con la certeza de ser parte de ella.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">WALL CENIZA</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Con un diseño realista, Wall Ceniza fue pensada para aplicarse en ambientes modernos y despojados. Su terminación simil cemento se caracteriza por su acabado brillante y su color gris claro.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">FLOWER WHITE</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Añádele a tus ambientes un toque único y particular con nuestros calcareos Flower White, perteneciente a la Serie Croma. Su diseño original y acabado satinado lo hacen ideal para brindar autenticidad a tus ambientes.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "/images/deco.jpg",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "/images/verbe.jpg",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "/images/ceniza.jpg",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "/images/flower.jpg",
  },
  
];

 
function Layout() {
  return (
    <div className="h-screen py-20 w-full bg-[url('/images/bgcarou.png')] ">
  <h1 className="font-black text-sky-950 text-center text-4xl mb-4 text-[#23214b] ">TENDENCIAS</h1>
      <LayoutGrid cards={cards} />
    </div>
  );
};
 export default Layout;

 