import React from 'react';
import { Heading } from "@chakra-ui/react";

function Landing() {
  return (
    <Heading className='league-spartan-font'>
      <div className="bg-white py-20">
        <div className="max-w-screen-lg mx-auto flex justify-between items-center flex-col lg:flex-row">
          <div className="max-w-xl text-center lg:text-left mb-8 lg:mb-0">
            <h2 className="text-orange-1 text-sky-950 text-2xl lg:text-3xl mb-4">CON MAS DE 12 AÑOS AL SERVICIO DEL CLIENTE</h2>
            <p className="text-2xl lg:text-4xl text-sky-950 font-light text-transparent bg-clip-text bg-gradient-to-r from-black to-blue-1 lg:inline">Siempre nos destacamos por nuestra excelente atención y productos</p>
          </div>
          
          <button onClick={() => {window.location.href = '/nosotros'}} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-500 to-gray-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
            <span className="league-spartan-font relative px-5 py-2.5 transition-all ease-in duration-75bg-gradient-to-br from-red-200 via-red-300 to-gray-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-gray-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              + Mas sobre nosotros
            </span>
          </button>
        </div>
      </div>

      <div className="py-12 relative overflow-hidden bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-screen-lg mx-auto">
          <div className="w-full flex flex-col items-center md:items-end pr-0 md:pr-16 order-2 md:order-1">
            <h2 className="text-gray-1 font-bold text-2xl max-w-xs text-center md:text-right mb-12 mt-10">Últimos ingresos!</h2>
            <div className="h-full mt-auto overflow-hidden relative">
              <img src="https://ceramicasanlorenzo.com.ar/wp-content/uploads/2023/11/Ceramica-San-Lorenzo-Caleb-Gris-453x453-1.jpg" className="h-full w-full object-cover" alt="" />
            </div>
          </div>

          <div className="py-20 bg-slate-100 relative before:absolute before:h-full before:w-screen before:bg-blue-1 before:top-0 before:left-0 md:pl-12 order-1 md:order-2">
            <div className="relative z-20">
              <h2 className="text-orange-1 font-black text-3xl md:text-5xl leading-snug mb-6 md:mb-10 text-center md:text-left">CALEB<br />GRIS</h2>
              <p className="text-white text-base md:text-sm mb-6 md:mb-12 text-center md:text-left">
              Nuestra cerámica Caleb Gris evoca la belleza real de la madera. Por sus tramas y acabado satinado, se adapta tanto a estilos clásicos como modernos. Disponible en 45,3×45,3, es ideal para darle un look cálido y confortable a tus espacios. A partir de su terminación, realismo y su color gris, Caleb Gris es solicitado para ser instalado en todo tipo de ambientes.
              </p>
              <a href="https://wa.me/542604531120" target="_blank" rel="noopener noreferrer" className="mt-4 md:mt-8 text-white uppercase py-3 px-6 md:px-10 border border-white hover:bg-white hover:bg-opacity-10 block mx-auto md:inline-block">Consulta con un experto</a>
            </div>
          </div>
        </div>
      </div>

      <div className="py-4 relative overflow-hidden bg-white-1">
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-screen-lg mx-auto">
          <div className="py-20 bg-slate-100 relative before:absolute before:h-full before:w-screen before:bg-orange-1 before:top-0 before:right-0 md:pl-12">
            <div className="relative z-20">
              <h2 className="text-blue-1 font-black text-3xl md:text-5xl leading-snug mb-6 md:mb-10 text-center md:text-left">MEDITERRANEO<br /></h2>
              <p className="text-sky-950 text-base md:text-sm mb-6 md:mb-12 text-white-1 text-center md:text-left">
              Añádele a tus ambientes un toque único y particular con nuestros calcareos Mediterrani Deco, perteneciente a la Serie Mediterrani. Su diseño original y acabado brillante lo hacen ideal para brindar autenticidad a tus ambientes. Disponible en 45,3×45,3, Mediterrani Deco ofrece muchas opciones creativas para tu hogar. Aplicado en espacios interiores, y combinado con superficies neutras, te posibilitará un sinfín de opciones para darle diseño y creatividad a tu entorno.
              </p>
              <a href="https://wa.me/542604531120" target="_blank" rel="noopener noreferrer" className="mt-4 md:mt-8 text-black uppercase py-3 px-6 md:px-10 border border-black hover:bg-black hover:bg-opacity-10 block mx-auto md:inline-block">Consulta con un experto</a>
            </div>
          </div>
          <div className="w-full flex flex-col items-center md:items-start pl-0 md:pl-16 order-1 md:order-2">
            <h2 className="text-gray-1 font-bold text-2xl max-w-xs text-center md:text-left mb-12 mt-10">Últimos ingresos!</h2>
            <div className="h-full mt-auto overflow-hidden relative">
              <img src="https://ceramicasanlorenzo.com.ar/wp-content/uploads/2021/05/CSL-MEDITERRANI-DECO-IMAGEN.jpg" className="h-full w-full object-cover" alt="" />
            </div>
          </div>
        </div>
      </div>
    </Heading>
  );
}

export default Landing;