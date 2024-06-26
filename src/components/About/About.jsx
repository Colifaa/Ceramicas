import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Heading } from "@chakra-ui/react";


const About = () => {
  const [displayText, setDisplayText] = useState('');
  const text = 'Transformando Espacios con Elegancia y Durabilidad';

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      setDisplayText(text.substring(0, currentIndex));
      currentIndex++;
      if (currentIndex > text.length) {
        clearInterval(intervalId);
      }
    }, 100); // Ajusta la velocidad de escritura aquí (en milisegundos)
    return () => clearInterval(intervalId);
  }, []);

  const BoardMember = ({ imageSrc, name, position }) => {
    return (
      <div className="flex flex-col items-center">
        <div className="rounded-full overflow-hidden border-4 border-gray-800">
          <img src={imageSrc} alt={name} className="w-24 h-24" />
        </div>
        <p className="text-lg font-semibold mt-4">{name}</p>
        <p className="text-gray-600">{position}</p>
      </div>
    );
  };

  return (
    <Heading className='league-spartan-font'>
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">

      <div className="flex lg:flex-row flex-col lg:gap-8 sm:gap-10 gap-12">
        <motion.div
          className="w-full lg:w-6/12"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="w-full font-bold lg:text-4xl text-3xl lg:leading-10 leading-9 text-orange-1">
            {displayText}
          </h2>
          <p className="font-normal text-base leading-6 text-gray-600 mt-6">Cerámicas San Rafael es una empresa líder en la industria de revestimientos, especializada en la venta de cerámicas, porcelanatos y complementos como pegamentos. Con una trayectoria de más de 12 años en el mercado, nos destacamos por ofrecer productos de alta calidad, innovadores diseños y un servicio al cliente excepcional.</p>
        </motion.div>
        <motion.div
          className="w-full lg:w-6/12"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img className="lg:block hidden w-full " src="/images/ceram.png" alt="people discussing on board" />
          <img className="lg:hidden sm:block hidden w-full" src="/images/ceram.png" alt="people discussing on board" />
          <img className="sm:hidden block w-full" src="/images/ceram.png" alt="people discussing on board" />
        </motion.div>
      </div>

      <div className="relative mt-24">
        <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
          <div className="z-20 w-12 h-12 bg-gray-800 rounded-full flex justify-center items-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 5V21" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M19 5V14" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M5 4.99984C5.93464 4.08371 7.19124 3.57056 8.5 3.57056C9.80876 3.57056 11.0654 4.08371 12 4.99984C12.9346 5.91598 14.1912 6.42913 15.5 6.42913C16.8088 6.42913 18.0654 5.91598 19 4.99984" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M5 14.0001C5.93464 13.084 7.19124 12.5708 8.5 12.5708C9.80876 12.5708 11.0654 13.084 12 14.0001C12.9346 14.9162 14.1912 15.4294 15.5 15.4294C16.8088 15.4294 18.0654 14.9162 19 14.0001" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="z-20 w-12 h-12 bg-gray-800 rounded-full flex justify-center items-center">
          <svg className="z-20" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="24" r="24" fill="#1F2937" />
            <path d="M26 15V19C26 19.2652 26.1054 19.5196 26.2929 19.7071C26.4804 19.8946 26.7348 20 27 20H31" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M31 30V31C31 31.5304 30.7893 32.0391 30.4142 32.4142C30.0391 32.7893 29.5304 33 29 33H19C18.4696 33 17.9609 32.7893 17.5858 32.4142C17.2107 32.0391 17 31.5304 17 31V30" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M30 26H33M15 26H18H15ZM22.5 26H25.5H22.5Z" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M17 22V17C17 16.4696 17.2107 15.9609 17.5858 15.5858C17.9609 15.2107 18.4696 15 19 15H26L31 20V22" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          </div>

          <svg className="z-20 sm:block hidden" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="24" r="24" fill="#1F2937" />
            <path d="M21 23C23.2091 23 25 21.2091 25 19C25 16.7909 23.2091 15 21 15C18.7909 15 17 16.7909 17 19C17 21.2091 18.7909 23 21 23Z" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15 33V31C15 29.9391 15.4214 28.9217 16.1716 28.1716C16.9217 27.4214 17.9391 27 19 27H23C24.0609 27 25.0783 27.4214 25.8284 28.1716C26.5786 28.9217 27 29.9391 27 31V33" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M28 15.1301C28.8604 15.3504 29.623 15.8508 30.1676 16.5524C30.7122 17.254 31.0078 18.117 31.0078 19.0051C31.0078 19.8933 30.7122 20.7562 30.1676 21.4578C29.623 22.1594 28.8604 22.6598 28 22.8801" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M33 33.0001V31.0001C32.9949 30.1173 32.6979 29.2609 32.1553 28.5645C31.6126 27.8682 30.8548 27.3708 30 27.1501" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <hr className="z-10 absolute top-2/4 w-full bg-gray-200" />
      </div>

     <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
        <div>
        <motion.div
          className="w-full lg:w-6/12"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
            <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 mt-6">Fundada en 2012</p>
            <p className="font-normal text-base leading-6 text-gray-600 mt-6">Desde hace más de una decada, hemos estado proporcionando soluciones de revestimiento de alta calidad para hogares y proyectos comerciales en todo Mendoza.</p>
          </motion.div>
        </div>
        <div>
        <motion.div
          className="w-full lg:w-6/12"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
            <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 mt-6">Más de 2 Millones de Productos Vendidos </p>
            <p className="font-normal text-base leading-6 text-gray-600 mt-6">Nuestra amplia gama de productos ha sido elegida por más de 100,000 de clientes satisfechos, respaldando nuestra reputación como líderes en el mercado.</p>
          </motion.div>
        </div>
        <div className="sm:block hidden">
        <motion.div
          className="w-full lg:w-6/12"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
            <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 mt-6">Más de 100,000 Clientes Satisfechos</p>
            <p className="font-normal text-base leading-6 text-gray-600 mt-6">La satisfacción del cliente es nuestra máxima prioridad. Nos enorgullece haber servido a más de 400,000 clientes, quienes confían en nosotros para sus necesidades de revestimiento.</p>
          </motion.div>
        </div>
      </div>

      <div className="sm:hidden block relative mt-8">
        <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
          <svg className="z-20" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="24" r="24" fill="#1F2937" />
            <path d="M21 23C23.2091 23 25 21.2091 25 19C25 16.7909 23.2091 15 21 15C18.7909 15 17 16.7909 17 19C17 21.2091 18.7909 23 21 23Z" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15 33V31C15 29.9391 15.4214 28.9217 16.1716 28.1716C16.9217 27.4214 17.9391 27 19 27H23C24.0609 27 25.0783 27.4214 25.8284 28.1716C26.5786 28.9217 27 29.9391 27 31V33" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M28 15.1301C28.8604 15.3504 29.623 15.8508 30.1676 16.5524C30.7122 17.254 31.0078 18.117 31.0078 19.0051C31.0078 19.8933 30.7122 20.7562 30.1676 21.4578C29.623 22.1594 28.8604 22.6598 28 22.8801" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M33 33.0001V31.0001C32.9949 30.1173 32.6979 29.2609 32.1553 28.5645C31.6126 27.8682 30.8548 27.3708 30 27.1501" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <hr className="z-10 absolute top-2/4 w-full bg-gray-200" />
      </div>

      <div className="sm:hidden grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
        <div>
          
            <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 mt-6">Más de 400,000 Clientes Satisfechos</p>
            <p className="font-normal text-base leading-6 text-gray-600 mt-6">La satisfacción del cliente es nuestra máxima prioridad. Nos enorgullece haber servido a más de 400,000 clientes, quienes confían en nosotros para sus necesidades de revestimiento.</p>
         
        </div>
      </div>

    
      <div className="flex lg:flex-row flex-col md:gap-14 gap-16 justify-between lg:mt-20 mt-16">
        <div className="w-full lg:w-6/12">
          <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800">Nuestra Misión</h2>
          <p className="font-normal text-base leading-6 text-gray-600 mt-6 w-full lg:w-10/12 xl:w-9/12">En Revestir, nuestra misión es proporcionar productos de revestimiento de alta calidad que superen las expectativas de nuestros clientes. Nos esforzamos por hacer que el proceso de selección y compra de revestimientos sea simple, accesible y placentero para todos.</p>
          <p className="font-normal text-base leading-6 text-gray-600 w-full lg:w-10/12 xl:w-9/12 mt-10">Estamos comprometidos a mantenernos a la vanguardia de la industria, ofreciendo productos innovadores y soluciones de diseño que reflejen las últimas tendencias y tecnologías. Además, nos esforzamos por brindar un servicio excepcional al cliente, brindando asesoramiento experto y atención personalizada a cada cliente.</p>
        </div>
        <div className="w-full lg:w-6/12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 lg:gap-12 gap-10">
            {/* <!-- Card de Equipo --> */}
            
            <div className="flex p-4 shadow-md">
              <div className="mr-6">
                <svg className="mr-6" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 15C20.4853 15 22.5 12.9853 22.5 10.5C22.5 8.01472 20.4853 6 18 6C15.5147 6 13.5 8.01472 13.5 10.5C13.5 12.9853 15.5147 15 18 15Z" stroke="#1F2937" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M25.5 28.5C27.9853 28.5 30 26.4853 30 24C30 21.5147 27.9853 19.5 25.5 19.5C23.0147 19.5 21 21.5147 21 24C21 26.4853 23.0147 28.5 25.5 28.5Z" stroke="#1F2937" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M10.5 28.5C12.9853 28.5 15 26.4853 15 24C15 21.5147 12.9853 19.5 10.5 19.5C8.01472 19.5 6 21.5147 6 24C6 26.4853 8.01472 28.5 10.5 28.5Z" stroke="#1F2937" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="">
                <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800">Equipo</p>
                <p className="mt-2 font-normal text-base leading-6 text-gray-600">Nuestro equipo está formado por expertos en revestimientos, diseñadores de interiores y profesionales de servicio al cliente, todos comprometidos con proporcionar soluciones de calidad y una experiencia excepcional para nuestros clientes.</p>
              </div>
            </div>

            {/* <!-- Card de Junta --> */}
            <div className="flex p-4 shadow-md">
              <BoardMember
                imageSrc="/images/bruno.png"
                name="Bruno Oscar Ambrosini"
                position="Dueño"
              />
              <BoardMember
                imageSrc="/images/marcos.jpeg"
                name="Marcos Mugetti"
                position="Vendedor y Asesor"
              />
              {/* Agrega más miembros si es necesario */}
            </div>
          </div>
        </div>
      </div>
    </div>
    </Heading>
  );
};

export default About;