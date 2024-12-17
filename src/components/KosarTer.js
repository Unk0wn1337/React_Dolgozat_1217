import React, { useContext } from 'react';
import { KosarContext } from '../contexts/KosarContext';
import Kosar from './Kosar';
import { ApiContext } from '../contexts/ApiContext';

function KosarTer() {
  
    const { kosarLista } = useContext(KosarContext);
    const { termekLista } = useContext(ApiContext);

    if (!kosarLista || kosarLista.length === 0) {
        console.log("Nincs termek kosarba");
      } else {
        console.log(kosarLista);
        
      }

    return (
    <div className='row'>
        {kosarLista.map((elem, index) => {
            return <Kosar obj={elem} key={index} />;
        })}
    </div>
  )
}

export default KosarTer