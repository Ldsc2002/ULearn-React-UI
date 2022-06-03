import React, { Fragment, useState } from 'react'
import CalendarioFuncionalidad from './CalendarioFuncionalidad'
import { db } from '../firebase/firebase'

import PopUp from '../popup/PopUp'

function CalendarioComp() {
    const {
        calendarRows, selectedDate, todayFormatted, daysShort, monthNames, getNextMonth, getPrevMonth,
    } = CalendarioFuncionalidad()

    const [event, setEvent] = useState({ contenido: '', fecha: '', titulo: '' })

    const [pregunta, setPregunta] = useState(false)

    const [tituloS, setTitulo] = useState('')
    const [diaS, setDia] = useState('')
    const [mesS, setMes] = useState('')
    const [anoS, setAno] = useState('')
    const [contenidoS, setContenido] = useState('')

    const newDateInador = () => {
        const fecha = `${diaS}-${mesS}-${anoS}`

        db.collection('eventos').add({
            contenido: contenidoS,
            fecha,
            titulo: tituloS,
        })
    }

    const readInador = (e) => {
        if (e.target.name === 'titulo') {
            setTitulo(e.target.value)
        } else if (e.target.name === 'dia') {
            setDia(e.target.value)
        } else if (e.target.name === 'mes') {
            setMes(e.target.value)
        } else if (e.target.name === 'ano') {
            setAno(e.target.value)
        } else if (e.target.name === 'contenido') {
            setContenido(e.target.value)
        }
    }

    const dateClickHandler = (date) => {
        const contenido = []
        const fecha = []
        const titulo = []

        db.collection('eventos')
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    contenido.push(doc.get('contenido'))
                    fecha.push(doc.get('fecha'))
                    titulo.push(doc.get('titulo'))
                })

                for (let i = 0; i < titulo.length; i += 1) {
                    const temp = { contenido: contenido[i], fecha: fecha[i], titulo: titulo[i] }

                    if (fecha[i] === date) {
                        setEvent(temp)
                    }
                }
            })
    }

    return (
        <>
            <p className="mountTitle">
                Selected Month:
                {`${monthNames[selectedDate.getMonth()]} - ${selectedDate.getFullYear()}`}
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

            <PopUp trigger={pregunta} setTrigger={setPregunta}>

                <div className="preguntaInador">
                    <h3>TITULO</h3>
                    <input type="text" name="titulo" onChange={readInador} />

                    <div className="fechaInador">
                        <h3>DIA</h3>
                        <h3>MES</h3>
                        <h3>AÑO</h3>
                    </div>

                    <div className="fechaInador2">
                        <input name="dia" type="text" onChange={readInador} />
                        <input name="mes" type="text" onChange={readInador} />
                        <input name="ano" type="text" onChange={readInador} />
                    </div>

                    <h3>CONTENIDO</h3>
                    <input name="contenido" type="text" onChange={readInador} />

                    <button type="button" onClick={newDateInador}>Continuar</button>
                </div>

            </PopUp>

            <div className="eventDiv">
                <h1>
                    {event.fecha}
                    {' '}
                    EVENT'S
                </h1>
                <div>
                    <h2>{event.titulo}</h2>
                    <h2>{event.contenido}</h2>
                </div>
            </div>

            <div className="botonAgregarDiv">
                <button type="button" className="botonAgregar" onClick={() => setPregunta(true)}>+</button>
            </div>
            <div className="botonAgregarDiv">
                <button type="button" className="botonAgregar" onClick={() => setPregunta(true)}>+</button>
            </div>
        </>
    )
}

export default CalendarioComp
