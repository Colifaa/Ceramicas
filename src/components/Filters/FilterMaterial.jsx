import React, { useEffect, useState } from 'react';
import { Box, Container, Checkbox, CheckboxGroup,SimpleGrid } from '@chakra-ui/react';
import supabase from "../../../lib/supabaseClient";

function FilterMaterial( {selectedMaterial , onChangeMaterial }) {
    const [medidaOptions, setMedidaOptions] = useState([]); // Inicializar con un array vacío

    useEffect(() => {

        const fetchMedidaOptions = async () => {
          try {
            const { data: medidaData, error: medidaError } = await supabase.from('products').select('material');
    
            if (medidaError) {
              console.error('Error fetching material:', medidaError);
              return;
            }
    
            // Obtener todas las material disponibles y eliminar duplicados
            const uniquematerial = Array.from(new Set(medidaData.map(product => product.material).filter(Boolean)));
            setMedidaOptions(uniquematerial); // Actualizar el estado con las opciones de material
          } catch (error) {
            console.error('Error fetching material:', error.message);
          }
        };
    
        fetchMedidaOptions();
      }, []);

      
      const handleCheckboxChange = (option) => {
        // Llamar a la función onChangematerial pasando la opción seleccionada
        onChangeMaterial(option);
      };

      

 
  return (
    <Box position="relative">
    <SimpleGrid gap={{ base: 2, md: 5 }} p={{ base: 2, md:5 }} columns={3}>
      <CheckboxGroup value={selectedMaterial} onChange={handleCheckboxChange}>
        {medidaOptions.map((option) => (
          <Checkbox colorScheme="red" key={option} value={option}>
            {option}
          </Checkbox>
        ))}
      </CheckboxGroup>
    </SimpleGrid>
  </Box>


  )
}

export default FilterMaterial




