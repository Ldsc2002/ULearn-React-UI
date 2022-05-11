import React, { Fragment, useState } from 'react';

import CalendarioFuncionalidad from './CalendarioFuncionalidad';

import { getDatabase, ref, set} from "firebase/database";
import { db } from './firebase';

import PopUp from "./PopUp";

const CalendarioComp = () => {
  const { calendarRows, selectedDate, todayFormatted, daysShort, monthNames, getNextMonth, getPrevMonth } = CalendarioFuncionalidad();

  const [event, setEvent] = useState({contenido: "", fecha: "", titulo: ""});  

  const [pregunta, setPregunta] = useState(false);

  const [tituloS, setTitulo] = useState("");
  const [diaS, setDia] = useState("");
  const [mesS, setMes] = useState("");
  const [anoS, setAno] = useState("");
  const [contenidoS, setContenido] = useState("");

  const newDateInador = () =>{

    const fecha = diaS + "-" + mesS + "-" + anoS;

    console.log(tituloS, " ", fecha, " ", contenidoS)

    db.collection('eventos').add({
      contenido: contenidoS,
      fecha: fecha,
      titulo: tituloS
    })

  }

  const readInador = (e) => {

    if(e.target.name === 'titulo'){
        setTitulo(e.target.value)
    } else if(e.target.name === 'dia'){
        setDia(e.target.value)
    } else if(e.target.name === 'mes'){
        setMes(e.target.value)
    } else if(e.target.name === 'ano'){
        setAno(e.target.value)
    } else if(e.target.name === 'contenido'){
        setContenido(e.target.value)
    }

    let fecha = diaS + "-" + mesS + "-" + anoS;

    console.log(tituloS, " ", fecha, " ", contenidoS)

  }

  const dateClickHandler = date => {
    console.log(date)
  
    let contenido = []
    let fecha = []
    let titulo = []
  
    db.collection('eventos')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
            contenido.push(doc.get("contenido"))
            fecha.push(doc.get("fecha"))
            titulo.push(doc.get("titulo"))
        });
  
        for(let i=0; i< titulo.length; i++){
            console.log("ENTRO AL FETCH", contenido[i], fecha[i], titulo[i])
            let temp = {contenido: contenido[i], fecha: fecha[i], titulo: titulo[i]}

            if(fecha[i] == date){
                console.log("ENTRO A LA FECHA")
                setEvent(temp)
            }
        }
      });
  }

  const style_elFab = {
    display: 'block',
    textTransform: 'none',
    color: '(null)',
    textAlign: 'center',
   };

  return(
    <Fragment>
        <p className='mountTitle'>Selected Month: {`${monthNames[selectedDate.getMonth()]} - ${selectedDate.getFullYear()}`}</p>
        <table className="table">
            <thead>
                <tr>
                    {
                        daysShort.map(day => (
                            <th key={day}>{day}</th>
                        ))
                    }
                </tr>
            </thead>
            <tbody>
                {
                    Object.values(calendarRows).map(cols => {
                    return <tr key={cols[0].date}>
                                {
                                    cols.map(col => (
                                        col.date === todayFormatted
                                            ? <td key={col.date} className={`${col.classes} today`} onClick={() => dateClickHandler(col.date)}>
                                                {col.value}
                                            </td>
                                            : <td key={col.date} className={col.classes} onClick={() => dateClickHandler(col.date)}>{col.value}</td>
                                    ))
                                }
                            </tr>
                    })
                }
            </tbody>
        </table>

        <div className='megacontenedordebotones8000'>
            <button className="buttonControl" onClick={getPrevMonth}>Prev</button>
            <button className="buttonControl" onClick={getNextMonth}>Next</button>
        </div>

        <button onClick={() => setPregunta(true)}>Add event</button>

        <PopUp trigger={pregunta} setTrigger={setPregunta}>

            <div className='preguntaInador'>
                <h3>TITULO</h3>
                <input type="text" name='titulo' onChange={readInador}/>

                <div className='fechaInador'>
                    <h3>DIA</h3>
                    <input name='dia' type="text" onChange={readInador}/>
                    <h3>MES</h3>
                    <input name='mes' type="text" onChange={readInador}/>
                    <h3>AÑO</h3>
                    <input name='ano' type="text" onChange={readInador}/>
                </div>

                <h3>CONTENIDO</h3>
                <input name='contenido' type="text" onChange={readInador}/>

                <button onClick={newDateInador}>Continuar</button>
            </div>

        </PopUp>

        <div>
            <h1>TODAY EVENT'S</h1>
            <div>
                {
                    event.titulo
                }
            </div>
        </div>

        
    </Fragment>
  );
}

export default CalendarioComp;