import React, { Component } from "react";
import Calendar from "react-big-calendar";
import moment from "moment";
import uuid from 'uuid';

import "react-big-calendar/lib/css/react-big-calendar.css";

const propTypes = {}

//import {BrowserRouter, Route } from 'react-router-dom'

const localizer = Calendar.momentLocalizer(moment);

//[year, month, day, hour, minute, second, millisecond]

class CalendarView extends Component {
  state = {
    events: [
      // {
      //   start: new Date(2018, 10, 22, 15, 30),
      //   end: new Date(moment().add(1, "hours")),
      //   title: "Some title"
      // },
      // {
      //   start: new Date(2018, 10, 25, 15, 30),
      //   end: new Date(2018, 10, 25, 16, 30),
      //   title: "thing 2"
      // },
      {
        id: uuid.v4(),
        title: "curry chicken",
        calories: 256,
        servings: 4,
        comments: "some comments",
        descriptions: "best curry chicken!!!",
        instructions: "just do it",
        ingredients: "curry + chicken",
        category: "chicken",
        start: new Date(2018, 10, 22, 15, 30),
        end: new Date(moment().add(1, "hours")),
      }
    ]
  };


  render() {
    return (
      <div>
        <Calendar
          selectable
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="week"
          events={this.state.events}
          //onSelectEvent={event => alert("Title: " + event.title + "\n Calaries: " + event.calories + "\n servings: " + event.servings + "\n comments:\n" + event.comments + "\n descriptions:\n" + event.descriptions + "\n instructions:\n" + event.instructions + "\n ingredients\n" + event.ingredients )}
          onSelectEvent={(e) => window.open("http://localhost:3000/" + e.id)}   
           style={{ height: "100vh" }}
        />
      </div>
    );
  }
}

CalendarView.propTypes = propTypes

export default CalendarView;
