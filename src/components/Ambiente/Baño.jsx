import React, { useState, useEffect } from 'react';
import supabase from '../../../lib/supabaseClient';
import CardsDetail from '../CardsDetail/CardsDetail';

const Baño = () => {
  const [ambientesBaño, setAmbientesBaño] = useState([]);

  useEffect(() => {
    async function fetchAmbientesBaño() {
      try {
        const { data, error } = await supabase
          .from('products')
          .select('*')
          .eq('ambientacion', 'Baño');

        if (error) {
          throw error;
        }

        setAmbientesBaño(data || []);
      } catch (error) {
        console.error('Error al obtener los ambientes de baño:', error.message);
      }
    }

    fetchAmbientesBaño();
  }, []);

  return (
    <div>
      {ambientesBaño.map(ambiente => (
        <div key={ambiente.id} className={`mb-8 md:flex md:items-center bg-${ambiente.bgColor} p-4 rounded-lg shadow-md`} style={{ marginLeft: '10px', backgroundImage: `url(${ambiente.img2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <img src={ambiente.img} alt="Product" className="w-20 h-20 md:w-40 md:h-40 mr-4 md:mr-8" />
          <div className="md:flex md:flex-col md:justify-between md:items-center md:flex-grow">
            <h2 className="text-orange-1 text-xl md:text-2xl font-bold mb-4">{ambiente.title}</h2>
            <p className="text-black border border-gray-900 text-lg md:text-xl font-bold mb-4">{ambiente.description}</p>
            <CardsDetail product={ambiente} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Baño;
