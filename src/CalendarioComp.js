import React, { Fragment, useState } from 'react';

import CalendarioFuncionalidad from './CalendarioFuncionalidad';

import { getDatabase, ref, set} from "firebase/database";
import { db } from './firebase';

const CalendarioComp = () => {
  const { calendarRows, selectedDate, todayFormatted, daysShort, monthNames, getNextMonth, getPrevMonth } = CalendarioFuncionalidad();

  const [event, setEvent] = useState({contenido: "", fecha: "", titulo: ""});  

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
            {/* <button className="btnFetch" onClick={fetch}>FETCH</button> */}
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