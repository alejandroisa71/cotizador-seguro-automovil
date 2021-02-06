import React,{useState} from 'react';
import Header from './components/Header';
import styled from '@emotion/styled';
import Formulario from './components/Formulario';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';

const Contenedor = styled.div`
    max-width: 600px;
    margin: 0 auto;
`;

const CotenedorFormulario=styled.div`
  background-color:#FFF;
  padding: 3rem;
`;


function App() {
  
  const[resumen, guardarResumen]=useState({
    cotizacion:0,
    datos:{
      marca:'',
      year:'',
      plan:''
    }
  });

  //extraer datos
  const {cotizacion, datos} = resumen;


  return (
    <Contenedor>
        <Header
          titulo='Cotizador de Seguros'
        />
        <CotenedorFormulario>
            <Formulario
              guardarResumen={guardarResumen}
            />
          
            <Resumen
              datos={datos}
            /> 

            <Resultado
              cotizacion={cotizacion}
            />          
        </CotenedorFormulario>
    </Contenedor>
  );
}

export default App;
