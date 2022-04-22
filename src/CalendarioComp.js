import React, { Fragment } from 'react';

import CalendarioFuncionalidad from './CalendarioFuncionalidad';

const CalendarioComp = () => {
  const { calendarRows, selectedDate, todayFormatted, daysShort, monthNames, getNextMonth, getPrevMonth } = CalendarioFuncionalidad();

  const dateClickHandler = date => {
    console.log(date);
  }

  return(
    <Fragment>
        <p>Selected Month: {`${monthNames[selectedDate.getMonth()]} - ${selectedDate.getFullYear()}`}</p>
        <table className="table">
            <thead>
            <tr>
                {daysShort.map(day => (
                <th key={day}>{day}</th>
                ))}
            </tr>
            </thead>
            <tbody>
            {
                Object.values(calendarRows).map(cols => {
                return <tr key={cols[0].date}>
                    {cols.map(col => (
                    col.date === todayFormatted
                        ? <td key={col.date} className={`${col.classes} today`} onClick={() => dateClickHandler(col.date)}>
                        {col.value}
                        </td>
                        : <td key={col.date} className={col.classes} onClick={() => dateClickHandler(col.date)}>{col.value}</td>
                    ))}
                </tr>
                })
            }
            </tbody>
        </table>

      <button className="buttonNP" onClick={getPrevMonth}>Prev</button>
      <button className="buttonNP" onClick={getNextMonth}>Next</button>
    </Fragment>
  );
}

export default CalendarioComp;