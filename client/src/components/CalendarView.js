import React, { Component } from "react";
import Calendar from "react-big-calendar";
import moment from "moment";
import uuid from 'uuid';
import RecipePage from "./recipeForm/RecipePage";

import "react-big-calendar/lib/css/react-big-calendar.css";

import apple from './images/apple.png'

import axios from 'axios';

const propTypes = {}

//import {BrowserRouter, Route } from 'react-router-dom'

const localizer = Calendar.momentLocalizer(moment);

//[year, month, day, hour, minute, second, millisecond]




class CalendarView extends Component {

  constructor(props) {
    super(props);
    this.state = {
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
          //id: uuid.v4(),
          name: "chicken and brocoli",
          image: {apple},
          calories: 256,
          serves: 4,
          minutesNeeded: 30,
          //comments: "some comments",
          description: "best DAM FOOOODDSDSS!!!",
          instruction: "just do it",
          ingredient: "put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in ",
          //category: "chicken",
          //[year, month, day, hour, minute, second, millisecond] //month start count from 0
          start: new Date(2018, 11, 9, 9, 30),
          //start: new Date(moment().add(3, "hours")),
          end: new Date(2018, 11, 9, 9, 30),
        },
      ],

      boolean: true, 

      selectedEvent: null

    };
  }

  componentDidMount() {
    axios.get('/recipe').then(recipeArray=>{
      let data = recipeArray.data;
      for(let i = 0; i < data.length;i++){
        let time = new Date(data[i].time);
        let timeEnd = new Date(data[i].timeEnd);
        data[i].start = time;
        data[i].end =  timeEnd;
        //console.log(data[i]);
      }

      this.setState({events:data})
    })
  }
  


// this.setState({check: !this.state.check})

onSelectEvent = (e) => {
  this.setState({
    boolean: false,
    selectedEvent: e
  })
}

turnOnBoolean = () => {
  this.setState({boolean: true});
}

  render() {
      let page = null;
      const that = this;

      if (this.state.boolean) {
        page = (
          <div>
            <Calendar
              selectable
              localizer={localizer}
              defaultDate={new Date()}
              defaultView="week"
              events={this.state.events}
              //onSelectEvent={event => alert("Title: " + event.title + "\n Calaries: " + event.calories + "\n servings: " + event.servings + "\n comments:\n" + event.comments + "\n descriptions:\n" + event.descriptions + "\n instructions:\n" + event.instructions + "\n ingredients\n" + event.ingredients )}
              //onSelectEvent={(e) => window.open("http://localhost:3000/recipies/" + e.id)} 
              onSelectEvent={(e) => that.onSelectEvent(e)}   
              style={{ height: "100vh" }}
            />
          </div>
        );
      } else {
        page = (<RecipePage 
            event={this.state.selectedEvent}
            turnOnBoolean={this.turnOnBoolean}  
          />);
      }
        return(
            <div>
                {page}
            </div>
        );

  }
}

CalendarView.propTypes = propTypes

export default CalendarView;
