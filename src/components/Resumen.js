import React from 'react';
import styled from '@emotion/styled';
import {primeraMayuscula} from '../helper';

const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #FFF;
    margin-top: 1rem;
`;


const Resumen = ({datos}) => {
    //extraer de datos
    const{marca, plan, year} = datos;
    
    if (marca === '' || plan === '' || year === '' ) return null; 
        
    

    return (
     <ContenedorResumen>
         <h1>Resumen de Cotización</h1>
         <ul>
             <li>Marca: {primeraMayuscula(marca)}</li>
             <li>Plan: {primeraMayuscula(plan)}</li>
             <li>Año del Auto: {year}</li>
         </ul>
     </ContenedorResumen>   
    
    );
}
 
export default Resumen;