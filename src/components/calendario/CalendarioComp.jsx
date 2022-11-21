import React, { Fragment, useState, useEffect } from 'react'
import { setBlockData } from 'draft-js/lib/DraftModifier'
import { forEach } from 'draft-js/lib/DefaultDraftBlockRenderMap'
import CalendarioFuncionalidad from './CalendarioFuncionalidad'
import { db } from '../firebase/firebase'
import PopUp from '../popup/PopUp'

function CalendarioComp(props) {
    const {
        calendarRows, selectedDate, todayFormatted, daysShort, monthNames, getNextMonth, getPrevMonth,
    } = CalendarioFuncionalidad()
    const [dateEvent, setDataEvent] = useState([])

    const [date, setDate] = useState(false)
    const [addDate, setAddDate] = useState(false)
    const [event, setEvent] = useState([])

    const [day, setDay] = useState('')
    const [mount, setMonth] = useState('')
    const [year, setYear] = useState('')

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const [hoyEs, setHoyEs] = useState('')

    const [idRe, setIdRe] = useState('')

    useEffect(() => {
        let contenido = ''
        let fecha = ''
        let titulo = ''
        let id = ''
        let user = ''

        const dateEventTemp = []

        /* istanbul ignore next */
        db.collection('eventos')
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    id = (doc.id)
                    contenido = (doc.get('contenido'))
                    fecha = (doc.get('fecha'))
                    titulo = (doc.get('titulo'))
                    user = (doc.get('user'))

                    if (user === props.email) {
                        dateEventTemp.push({
                            id,
                            contenido,
                            fecha,
                            titulo,
                            user,
                        })
                        setDataEvent(dateEventTemp)
                    }
                })
            })
    }, [])

    function nameClass(e) {
        let name = ''

        if (e === todayFormatted) {
            name = 'today'
        }

        dateEvent.forEach((element) => {
            if (e === element.fecha) {
                name += 'Event'
                return (name)
            }
        })

        return (name)
    }

    /* istanbul ignore next */
    const newDateInador = (info, fechas1 = hoyEs, title1 = title, userV1 = props.email, hoyEs1 = hoyEs, content1 = content) => {
        let idTemp = "";
        db.collection('eventos').add({
            contenido: content1,
            fecha: fechas1,
            titulo: title1,
            user: userV1,

        })
        .then(function(docRef) {
            idTemp = docRef.id;
            setIdRe(idTemp)
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });

        const temp = dateEvent
        temp.push({
            contenido: content1,
            fecha: fechas1,
            titulo: title1,
            user: userV1,
            id: idTemp,
        })
        setDataEvent(temp)
        setAddDate(false)
    }

    const readInador = (e) => {
        /* istanbul ignore next */
        if (e.target.name === 'titulo') {
            setTitle(e.target.value)
        } else if (e.target.name === 'contenido') {
            setContent(e.target.value)
        }
        const temp = {
            contenido: '', fecha: '', titulo: '', id: '',
        }
        setEvent(temp)
    }

    const borraInador = () => {
        const id = event.id
        let temp = dateEvent
        db.collection('eventos').doc(id).delete()
        temp = temp.filter((element) => element.id !== id)
        setDataEvent(temp)
        setDate(false)
    }

    /* istanbul ignore next */
    const dateClickHandler = (newDate) => {
        let foundDate = false

        dateEvent.forEach((element) => {
            if (newDate === element.fecha) {
                foundDate = true
                if(element.id === "") {
                    element.id = idRe
                }
                setEvent({ fecha: element.fecha, titulo: element.titulo, contenido: element.contenido, id: element.id })
                setDate(true)
            }
        })

        if (!foundDate) {
            setHoyEs(newDate)
            setAddDate(true)
        } else {
            setDate(true)
        }
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
                            daysShort.map((dayItem) => (
                                <th key={dayItem}>{dayItem}</th>
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
                                        <td key={col.date} className={`${col.classes} ${nameClass(col.date)}`} onClick={() => dateClickHandler(col.date)}>{col.value}</td>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            <div className="megacontenedordebotones8000">
                <button type="button" className="buttonControl" onClick={getPrevMonth}>Previo</button>
                <button type="button" className="buttonControl" onClick={getNextMonth}>Siguiente</button>
            </div>

            <PopUp trigger={addDate} setTrigger={setAddDate}>

                <div className="preguntaInador">
                    <div className="cabeza">
                        <h3>{hoyEs}</h3>
                    </div>
                    <div className="fechaInador1">
                        <div className="ingresador">

                            <h3>Título</h3>
                            <input type="text" name="titulo" onChange={readInador} />
                        </div>
                    </div>

                    <div className="fechaInador3">
                        <div className="ingresador">
                            <h3>Contenido</h3>
                            <input name="contenido" type="text" onChange={readInador} />
                        </div>
                    </div>
                    <button className="continuaBotoncito" type="button" onClick={newDateInador}>Continuar</button>

                </div>
            </PopUp>

            <PopUp trigger={date} setTrigger={setDate}>
                <div className="eventDiv">
                    <div className="eventDiv1">
                        <h1>{event.fecha}</h1>
                        <h2>
                            Título:
                            {event.titulo}
                        </h2>
                    </div>

                    <div className="eventDiv2">
                        <h2>
                            Información:
                            {event.contenido}
                        </h2>
                    </div>
                    <button type="button" className="buttonControlBorrar" onClick={borraInador}>BORRAR</button>
                </div>
            </PopUp>
        </>
    )
}

export default CalendarioComp
