import React, { Fragment, useState } from 'react'
import CalendarioFuncionalidad from './CalendarioFuncionalidad'
import { db } from '../firebase/firebase'

import PopUp from '../popup/PopUp'

function CalendarioComp() {
    const {
        calendarRows, selectedDate, todayFormatted, daysShort, monthNames, getNextMonth, getPrevMonth,
    } = CalendarioFuncionalidad()

    const [event, setEvent] = useState({ contenido: '-', fecha: 'dd-mm-yyyy', titulo: '-' })

    const [title, setTitle] = useState('')
    const [day, setDay] = useState('')
    const [month, setMonth] = useState('')
    const [year, setYear] = useState('')
    const [content, setContent] = useState('')
    
    const [date, setDate] = useState(false)
    const [addDate, setAddDate] = useState(false)

    function guid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1)
        }
        return `${s4() + s4()}-${s4()}-${s4()}-${
            s4()}-${s4()}${s4()}${s4()}`
    }

    const newDateInador = () => {
        const fecha = `${day}-${month}-${year}`
        const id = guid()

        db.collection('eventos').doc(id).set({
            contenido: content,
            fecha,
            titulo: title,
        })
        setPregunta(false)
    }

    const readInador = (e) => {
        if (e.target.name === 'titulo') {
            setTitle(e.target.value)
        } else if (e.target.name === 'dia') {
            setDay(e.target.value)
        } else if (e.target.name === 'mes') {
            setMonth(e.target.value)
        } else if (e.target.name === 'ano') {
            setYear(e.target.value)
        } else if (e.target.name === 'contenido') {
            setContent(e.target.value)
        }
    }

    const borraInador = () => {
        const { id } = event

        db.collection('eventos').doc(id).delete()

        const temp = {
            contenido: '', fecha: '', titulo: '', id: '',
        }
        setEvent(temp)
    }


    const dateClickHandler = (date) => {
        setDate(true)
        const contenido = []
        const fecha = []
        const titulo = []
        const id = []

        db.collection('eventos')
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    id.push(doc.id)
                    contenido.push(doc.get('contenido'))
                    fecha.push(doc.get('fecha'))
                    titulo.push(doc.get('titulo'))
                })
                for (let i = 0; i < titulo.length; i++) {
                    const temp = {
                        contenido: contenido[i], fecha: fecha[i], titulo: titulo[i], id: id[i],
                    }
                    if (fecha[i] === date) {
                        setEvent(temp)
                    }
                }
            })
    }

    return (
        <>
            <p className="mountTitle">
                { ` ${monthNames[selectedDate.getMonth()]} - ${selectedDate.getFullYear()}`}
            </p>
            <table className="table">
                <thead>
                    <tr>
                        {
                            daysShort.map((day) => (
                                <th key={day}>{day}</th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        Object.values(calendarRows).map((cols) => (
                            <tr key={cols[0].date}>
                                {
                                    cols.map((col) => (
                                        col.date === todayFormatted
                                            ? (
                                                <td key={col.date} className={`${col.classes} today`} onClick={() => dateClickHandler(col.date)}>
                                                    {col.value}
                                                </td>
                                            )
                                            : <td key={col.date} className={col.classes} onClick={() => dateClickHandler(col.date)}>{col.value}</td>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            <div className="megacontenedordebotones8000">
                <button type="button" className="buttonControl" onClick={getPrevMonth}>Prev</button>
                <button type="button" className="buttonControl" onClick={getNextMonth}>Next</button>
            </div>

            <PopUp trigger={addDate} setTrigger={setAddDate}>

                <div className="preguntaInador">
                    <div className="fechaInador1">
                        <div className='ingresador'>
                            <h3>TITULO</h3>
                            <input type="text" name="titulo" onChange={readInador} />
                        </div>
                    </div>
                    
                    <div className="fechaInador2">
                        <div className='ingresador'>
                            <h3>DIA</h3>
                            <input name="dia" type="text" onChange={readInador} />
                        </div>
                        <div className='ingresador'>
                            <h3>MES</h3>
                            <input name="mes" type="text" onChange={readInador} />
                        </div>
                        <div className='ingresador'>
                            <h3>AÑO</h3>
                            <input name="ano" type="text" onChange={readInador} />
                        </div>
                    </div>

                    <div className="fechaInador3">
                        <div className='ingresador'>
                            <h3>CONTENIDO</h3>
                            <input name="contenido" type="text" onChange={readInador} />
                        </div>
                    </div>
                    <button className='continuaBotoncito' type="button" onClick={newDateInador}>Continuar</button>

                </div>
            </PopUp>

            <PopUp trigger={date} setTrigger={setDate}>
                {event.fecha != 'dd-mm-yyyy' ? (
                        <div className="eventDiv"> 
                            <div className='eventDiv1'>
                                <h1>{event.fecha}</h1>
                                <h2>Título: {event.titulo}</h2>
                            </div>
                        
                            <div className='eventDiv2'>
                                <h2>Información: {event.contenido}</h2>
                            </div>
                            <button type="button" className="buttonControl" onClick={borraInador}>BORRAR</button> 
                        </div>
                    ) : (
                        <div className="eventDiv">
                            <h1>No hay eventos en esta fecha</h1>
                        </div>
                    )  
                }
            </PopUp>

            <div className="botonAgregarDiv">
                    <button type="button" className="botonAgregar" onClick={() => setAddDate(true)}>+</button>
            </div>
        </>
    )
}

export default CalendarioComp
