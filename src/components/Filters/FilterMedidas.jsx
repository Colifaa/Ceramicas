import React, { useEffect, useState } from 'react';
import { Box,Container, Checkbox, CheckboxGroup,SimpleGrid } from '@chakra-ui/react';
import supabase from "../../../lib/supabaseClient";

function FilterMedidas({ selectedMedidas, onChangeMedidas }) {
  const [medidaOptions, setMedidaOptions] = useState([]); // Inicializar con un array vacío

  useEffect(() => {
    const fetchMedidaOptions = async () => {
      try {
        const { data: medidaData, error: medidaError } = await supabase.from('products').select('medidas');

        if (medidaError) {
          console.error('Error fetching medidas:', medidaError);
          return;
        }

        // Obtener todas las medidas disponibles y eliminar duplicados
        const uniqueMedidas = Array.from(new Set(medidaData.map(product => product.medidas).filter(Boolean)));
        setMedidaOptions(uniqueMedidas); // Actualizar el estado con las opciones de medidas
      } catch (error) {
        console.error('Error fetching medidas:', error.message);
      }
    };

    fetchMedidaOptions();
  }, []);

  const handleCheckboxChange = (option) => {
    // Llamar a la función onChangeMedidas pasando la opción seleccionada
    onChangeMedidas(option);
  };


  return (
    <Box mb={{ base: 4, md: 0 }} position="relative">
      <SimpleGrid gap={{ base: 2, md: 1 }} p={{ base: 2, md: 2 }} columns={1}>
        <CheckboxGroup value={selectedMedidas} onChange={handleCheckboxChange}>
          {medidaOptions.map((option) => (
            <Checkbox key={option} value={option}>
              {option}
            </Checkbox>
          ))}
        </CheckboxGroup>
      </SimpleGrid>
    </Box>
  );
}
export default FilterMedidas;