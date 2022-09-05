import React, { Fragment, useState } from 'react'
import CalendarioFuncionalidad from './CalendarioFuncionalidad'
import { db } from '../firebase/firebase'

import PopUp from '../popup/PopUp'

function CalendarioComp(props) {
    const {
        calendarRows, selectedDate, todayFormatted, daysShort, monthNames, getNextMonth, getPrevMonth,
    } = CalendarioFuncionalidad()

    const [event, setEvent] = useState({ contenido: '-', fecha: 'dd-mm-yyyy', titulo: '-' })
    const dateEvent = [];
    var lenghtNum = 0;

    const [title, setTitle] = useState('')
    const [day, setDay] = useState('')
    const [month, setMonth] = useState('')
    const [year, setYear] = useState('')
    const [content, setContent] = useState('')

    const [date, setDate] = useState(false)
    const [addDate, setAddDate] = useState(false)

    const [claseToday, setClaseToday] = useState('today')

    function guid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1)
        }
        return `${s4() + s4()}-${s4()}-${s4()}-${
            s4()}-${s4()}${s4()}${s4()}`
    }

    function nameClassToday(e){
        var name = 'today';
        ArrayDate(() => {
            for(let i = 0; i < dateEvent.length; i++) {
                if(e === dateEvent[i]){
                    name = 'todayEvent';
                    console.log('name regresa en ',name)
                    setClaseToday(name);
                    return '';
                }
            }
            console.log('si llego al final')
            setClaseToday(name);
        })
        return '';
    }
    function nameClassOther(e){
        var name = 'today';
        ArrayDate(() => {
            for(let i = 0; i < dateEvent.length; i++) {
                if(e === dateEvent[i]){
                    name = 'todayEvent';
                    console.log('name regresa en ',name)
                    setClaseToday(name);
                    return '';
                }
            }
            console.log('si llego al final')
            setClaseToday(name);
        })
        return '';
    }

    function ArrayDate(_callback){
        const fecha = []
        const user = []

        db.collection('eventos')
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    fecha.push(doc.get('fecha'))
                    user.push(doc.get('user'))
                })
                for (let i = 0; i < fecha.length; i++) {
                    
                    if(user[i] === props.email){
                        lenghtNum = lenghtNum + 1;
                        dateEvent.push(fecha[i]);
                    }
                }
                _callback();
            })
    }

    const newDateInador = () => {
        let dayA = 0;
        let mesA = 0;
        let anoA = 0;
        
        if(day.charAt(0) === '0'){
            dayA = day.substring(1);
        } else{
            dayA = day;
        }
        if(month.charAt(0) === '0'){
            mesA = month.substring(1);
        } else{
            mesA = month;
        }
        if(year.length !== 4){
            anoA = '2022';
        } else{
            anoA = year
        }
        const fechas = `${dayA}-${mesA}-${anoA}`

        const id = guid()

        const userV = props.email;

        db.collection('eventos').doc(id).set({
            contenido: content,
            fecha: fechas,
            titulo: title,
            user: userV,

        })
        setAddDate(false)
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
        const user = []
        let foundDate = false;
        db.collection('eventos')
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    id.push(doc.id)
                    contenido.push(doc.get('contenido'))
                    fecha.push(doc.get('fecha'))
                    titulo.push(doc.get('titulo'))
                    user.push(doc.get('user'))
                })

                for (let i = 0; i < titulo.length; i++) {
                    const temp = {
                        contenido: contenido[i], fecha: fecha[i], titulo: titulo[i], id: id[i],
                    }

                    if (fecha[i] === date) {
                        if (user[i] == props.email) {
                            foundDate = true
                            setEvent(temp)
                            setDate(true)
                        }
                    }
                }

                if (!foundDate) {
                    setDate(false);
                    setAddDate(true);
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
                                        col.date === todayFormatted? (
                                            <td key={col.date} className={`${col.classes} `+ nameClassToday(col.date) + claseToday} onClick={() => dateClickHandler(col.date)}>{col.value}</td>
                                        ) : 
                                            <td key={col.date} className={`${col.classes} `+ nameClassOther(col.date) + claseToday} onClick={() => dateClickHandler(col.date)}>{col.value}</td>
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
                        <div className="ingresador">
                            <h3>TITULO</h3>
                            <input type="text" name="titulo" onChange={readInador} />
                        </div>
                    </div>

                    <div className="fechaInador2">
                        <div className="ingresador">
                            <h3>DIA</h3>
                            <input name="dia" type="text" onChange={readInador} />
                        </div>
                        <div className="ingresador">
                            <h3>MES</h3>
                            <input name="mes" type="text" onChange={readInador} />
                        </div>
                        <div className="ingresador">
                            <h3>AÑO</h3>
                            <input name="ano" type="text" onChange={readInador} />
                        </div>
                    </div>

                    <div className="fechaInador3">
                        <div className="ingresador">
                            <h3>CONTENIDO</h3>
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

            <div className="botonAgregarDiv">
                <button type="button" className="botonAgregar" onClick={() => setAddDate(true)}>+</button>
            </div>
        </>
    )
}

export default CalendarioComp
