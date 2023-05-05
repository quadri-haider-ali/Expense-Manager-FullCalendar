import React, { useState, useEffect, useRef } from 'react';
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import '../Expenses/ExpenseRenderer.css';
import './Calendar.css'

const Calendar = (props) => {
    const [initialDate, setInitialDate] = useState(props.date);
    const calendarRef = useRef(null);

    const events = props.expenses.map(expense => ({
        title: expense.title,
        start: expense.date,
        end: expense.date,
        allDay: true
    }));

    useEffect(() => {
        setInitialDate(props.date);
        if (calendarRef.current) {
            calendarRef.current.getApi().gotoDate(props.date);
            calendarRef.current.getApi().rerenderEvents();
        }
    }, [props.date, initialDate]);
    console.log("initialDate = ", initialDate);
    console.log("props.date = ",props.date);
    return (
        <div className="render-expenses" key={initialDate}>
            <Fullcalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView={"dayGridMonth"}
                headerToolbar={{
                    start: "today prev,next", // will normally be on the left. if RTL, will be on the right
                    center: "title",
                    end: "dayGridMonth,timeGridWeek,timeGridDay", // will normally be on the right. if RTL, will be on the left
                }}
                height={"90vh"}
                events={events}
                eventTextColor={"white"}
                initialDate={initialDate}
            />
        </div>
    )
}

export default Calendar;