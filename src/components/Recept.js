import  {React, useContext } from 'react';
import { KosarContext } from '../contexts/KosarContext';


function Recept(props) {

    const {kosarbaKattintas} = useContext(KosarContext);
    function kosarbaHelyezes(){
        kosarbaKattintas(props)
    }



  return (
    <tr>
      <td><img src="holder.js/100px180" alt={props.obj.nev} style={{ width: '100px', height: 'auto' }} /></td>
      <td>{props.obj.nev}</td>
      <td>{props.obj.leiras}</td>
      <td>
        <button className="btn btn-primary" onClick={()=>{kosarbaHelyezes()}}>Recept kivalasztasa</button>
      </td>
    </tr>
  );
}

export default Recept;
