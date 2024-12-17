import React, { useContext } from 'react';
import { ApiContext } from '../contexts/ApiContext';
import Recept from './Recept';

function ReceptTer() {
    const { termekLista } = useContext(ApiContext);

    return (
        <div className='table-responsive'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Kép</th>
                        <th>Név</th>
                        <th>Leiras</th>
                        <th>kattintas</th>
                    </tr>
                </thead>
                <tbody>
                    {termekLista.map((elem, index) => {
                        return <Recept obj={elem} key={index} />;
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default ReceptTer;
