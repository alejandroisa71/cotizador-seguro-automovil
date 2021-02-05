import React from 'react';
import Header from './components/Header';
import styled from '@emotion/styled';
import Formulario from './components/Formulario';

const Contenedor = styled.div`
    max-width: 600px;
    margin: 0 auto;
`;

const CotenedorFormulario=styled.div`
  background-color:#FFF;
  padding: 3rem;
`;


function App() {
  return (
    <Contenedor>
        <Header
          titulo='Cotizador de Seguros'
        />
        <CotenedorFormulario>
            <Formulario/>
        </CotenedorFormulario>
    </Contenedor>
  );
}

export default App;
