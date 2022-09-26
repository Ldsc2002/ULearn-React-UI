import React, { Fragment, useState } from 'react'
import CalendarioFuncionalidad from './CalendarioFuncionalidad'
import { db } from '../firebase/firebase'

import PopUp from '../popup/PopUp'
import { useEffect } from 'react'
import { setBlockData } from 'draft-js/lib/DraftModifier'
import { forEach } from 'draft-js/lib/DefaultDraftBlockRenderMap'

function CalendarioComp(props) {

    const {
        calendarRows, selectedDate, todayFormatted, daysShort, monthNames, getNextMonth, getPrevMonth,
    } = CalendarioFuncionalidad()
    const [dateEvent, setDataEvent] = useState([]);

    const [date, setDate] = useState(false)
    const [addDate, setAddDate] = useState(false)
    const [event, setEvent] = useState([])

    const [day, setDay] = useState('')
    const [mount, setMonth] = useState('')
    const [year, setYear] = useState('')

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const [hoyEs, setHoyEs] = useState('')

    useEffect(() => {
        var contenido = ""
        var fecha = ""
        var titulo = ""
        var id = ""
        var user = ""

        var dateEventTemp = [];

        db.collection('eventos')
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    id = (doc.id)
                    contenido = (doc.get('contenido'))
                    fecha = (doc.get('fecha'))
                    titulo = (doc.get('titulo'))
                    user = (doc.get('user'))

                    if (user == props.email) {
                        dateEventTemp.push({
                            id: id, 
                            contenido:contenido, 
                            fecha:fecha,
                            titulo:titulo, 
                            user:user
                        })
                        setDataEvent(dateEventTemp);
                    }
                })
            })

    },[])

    function guid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1)
        }
        return `${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`
    }

    function nameClass(e){

        let name = '';

        if(e === todayFormatted){
            name = "today"
        }
            
        dateEvent.forEach(element => {
            if(e === element.fecha){
                name = name+'Event'
                return(name)
            }
            
        });
        
        return (name);
    }

    const newDateInador = (content1 = content, fechas1 = fechas, title1 = title, userV1 = userV, hoyEs1 = hoyEs) => {
        const fechas = hoyEs1;

        const id = guid();

        const userV = props.email;

        db.collection('eventos').doc(id).set({
            contenido: content1,
            fecha: fechas1,
            titulo: title1,
            user: userV1,

        })
        setAddDate(false);
    }

    const readInador = (e) => {
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
        const { id } = event

        db.collection('eventos').doc(id).delete()
    }

    const dateClickHandler = (date) => {
        
        let foundDate = false;

        dateEvent.forEach(element => {
            if(date === element.fecha){

                foundDate = true
                setEvent({fecha: element.fecha, titulo: element.titulo, contenido: element.contenido})
                setDate(true)
                console.log();
            }
            
        });

        if (!foundDate) {
            setHoyEs(date);
            setAddDate(true);
        } else{
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
                                        <td key={col.date} className={`${col.classes} `+ nameClass(col.date)} onClick={() => dateClickHandler(col.date)}>{col.value}</td>
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
                    <div className='cabeza'>
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
                    <button type="button" className="buttonControl" onClick={borraInador}>BORRAR</button>
                </div>
            </PopUp>
        </>
    )
}

export default CalendarioComp
