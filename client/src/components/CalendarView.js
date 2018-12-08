import React, { Component } from "react";
import Calendar from "react-big-calendar";
import moment from "moment";
import uuid from 'uuid';
import RecipePage from "./recipeForm/RecipePage";

import "react-big-calendar/lib/css/react-big-calendar.css";

import apple from './images/apple.png'

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
          id: uuid.v4(),
          title: "chicken and brocoli",
          image: {apple},
          calories: 256,
          servings: 4,
          minutesNeeded: 30,
          comments: "some comments",
          descriptions: "best DAM FOOOODDSDSS!!!",
          instructions: "just do it",
          ingredients: "put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in ",
          category: "chicken",
          //[year, month, day, hour, minute, second, millisecond]
          start: new Date(2018, 11, 2, 9, 30),
          //start: new Date(moment().add(3, "hours")),
          end: new Date(2018, 11, 2, 10, 30),
        },
        {
          id: uuid.v4(),
          title: "chicken and brocoli",
          image: {apple},
          calories: 256,
          servings: 4,
          minutesNeeded: 30,
          comments: "some comments",
          descriptions: "best DAM FOOOODDSDSS!!!",
          instructions: "just do it",
          ingredients: "put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in ",
          category: "chicken",
          //[year, month, day, hour, minute, second, millisecond]
          start: new Date(2018, 11, 2, 13, 30),
          //start: new Date(moment().add(3, "hours")),
          end: new Date(2018, 11, 2, 14, 30),
        },
        {
          id: uuid.v4(),
          title: "chicken and brocoli",
          image: {apple},
          calories: 256,
          servings: 4,
          minutesNeeded: 30,
          comments: "some comments",
          descriptions: "best DAM FOOOODDSDSS!!!",
          instructions: "just do it",
          ingredients: "put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in ",
          category: "chicken",
          //[year, month, day, hour, minute, second, millisecond]
          start: new Date(2018, 11, 2, 18, 30),
          //start: new Date(moment().add(3, "hours")),
          end: new Date(2018, 11, 2, 19, 30),
        },
        {
          id: uuid.v4(),
          title: "chicken and brocoli",
          image: {apple},
          calories: 256,
          servings: 4,
          minutesNeeded: 30,
          comments: "some comments",
          descriptions: "best DAM FOOOODDSDSS!!!",
          instructions: "just do it",
          ingredients: "put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in ",
          category: "chicken",
          //[year, month, day, hour, minute, second, millisecond]
          start: new Date(2018, 11, 2, 9, 30),
          //start: new Date(moment().add(3, "hours")),
          end: new Date(2018, 11, 2, 10, 30),
        },
        // ****************** ****************** ****************** ****************** ****************** ******************
        {
          id: uuid.v4(),
          title: "chicken and brocoli",
          image: {apple},
          calories: 256,
          servings: 4,
          minutesNeeded: 30,
          comments: "some comments",
          descriptions: "best DAM FOOOODDSDSS!!!",
          instructions: "just do it",
          ingredients: "put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in ",
          category: "chicken",
          //[year, month, day, hour, minute, second, millisecond]
          start: new Date(2018, 11, 3, 8, 30),
          //start: new Date(moment().add(3, "hours")),
          end: new Date(2018, 11, 3, 9, 30),
        },

        {
          id: uuid.v4(),
          title: "chicken and brocoli",
          image: {apple},
          calories: 256,
          servings: 4,
          minutesNeeded: 30,
          comments: "some comments",
          descriptions: "best DAM FOOOODDSDSS!!!",
          instructions: "just do it",
          ingredients: "put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in ",
          category: "chicken",
          //[year, month, day, hour, minute, second, millisecond]
          start: new Date(2018, 11, 3, 12, 30),
          //start: new Date(moment().add(3, "hours")),
          end: new Date(2018, 11, 3, 13, 30),
        },
        {
          id: uuid.v4(),
          title: "chicken and brocoli",
          image: {apple},
          calories: 256,
          servings: 4,
          minutesNeeded: 30,
          comments: "some comments",
          descriptions: "best DAM FOOOODDSDSS!!!",
          instructions: "just do it",
          ingredients: "put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in ",
          category: "chicken",
          //[year, month, day, hour, minute, second, millisecond]
          start: new Date(2018, 11, 3, 17, 30),
          //start: new Date(moment().add(3, "hours")),
          end: new Date(2018, 11, 3, 18, 30),
        },

        // ****************** ****************** ****************** ****************** ****************** ******************

// ****************** ****************** ****************** ****************** ****************** ******************
        {
          id: uuid.v4(),
          title: "chicken and brocoli",
          image: {apple},
          calories: 256,
          servings: 4,
          minutesNeeded: 30,
          comments: "some comments",
          descriptions: "best DAM FOOOODDSDSS!!!",
          instructions: "just do it",
          ingredients: "put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in ",
          category: "chicken",
          //[year, month, day, hour, minute, second, millisecond]
          start: new Date(2018, 11, 4, 9, 30),
          //start: new Date(moment().add(3, "hours")),
          end: new Date(2018, 11, 4, 10, 30),
        },

        {
          id: uuid.v4(),
          title: "chicken and brocoli",
          image: {apple},
          calories: 256,
          servings: 4,
          minutesNeeded: 30,
          comments: "some comments",
          descriptions: "best DAM FOOOODDSDSS!!!",
          instructions: "just do it",
          ingredients: "put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in ",
          category: "chicken",
          //[year, month, day, hour, minute, second, millisecond]
          start: new Date(2018, 11, 4, 13, 30),
          //start: new Date(moment().add(3, "hours")),
          end: new Date(2018, 11, 4, 14, 30),
        },
        {
          id: uuid.v4(),
          title: "chicken and brocoli",
          image: {apple},
          calories: 256,
          servings: 4,
          minutesNeeded: 30,
          comments: "some comments",
          descriptions: "best DAM FOOOODDSDSS!!!",
          instructions: "just do it",
          ingredients: "put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in ",
          category: "chicken",
          //[year, month, day, hour, minute, second, millisecond]
          start: new Date(2018, 11, 4, 18, 30),
          //start: new Date(moment().add(3, "hours")),
          end: new Date(2018, 11, 4, 19, 30),
        },

        // ****************** ****************** ****************** ****************** ****************** ******************

// ****************** ****************** ****************** ****************** ****************** ******************
        {
          id: uuid.v4(),
          title: "chicken and brocoli",
          image: {apple},
          calories: 256,
          servings: 4,
          minutesNeeded: 30,
          comments: "some comments",
          descriptions: "best DAM FOOOODDSDSS!!!",
          instructions: "just do it",
          ingredients: "put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in ",
          category: "chicken",
          //[year, month, day, hour, minute, second, millisecond]
          start: new Date(2018, 11, 5, 8, 30),
          //start: new Date(moment().add(3, "hours")),
          end: new Date(2018, 11, 5, 9, 30),
        },

        {
          id: uuid.v4(),
          title: "chicken and brocoli",
          image: {apple},
          calories: 256,
          servings: 4,
          minutesNeeded: 30,
          comments: "some comments",
          descriptions: "best DAM FOOOODDSDSS!!!",
          instructions: "just do it",
          ingredients: "put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in ",
          category: "chicken",
          //[year, month, day, hour, minute, second, millisecond]
          start: new Date(2018, 11, 5, 12, 30),
          //start: new Date(moment().add(3, "hours")),
          end: new Date(2018, 11, 5, 13, 30),
        },
        {
          id: uuid.v4(),
          title: "chicken and brocoli",
          image: {apple},
          calories: 256,
          servings: 4,
          minutesNeeded: 30,
          comments: "some comments",
          descriptions: "best DAM FOOOODDSDSS!!!",
          instructions: "just do it",
          ingredients: "put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in ",
          category: "chicken",
          //[year, month, day, hour, minute, second, millisecond]
          start: new Date(2018, 11, 5, 17, 30),
          //start: new Date(moment().add(3, "hours")),
          end: new Date(2018, 11, 5, 18, 30),
        },

        // ****************** ****************** ****************** ****************** ****************** ******************


// ****************** ****************** ****************** ****************** ****************** ******************
        {
          id: uuid.v4(),
          title: "chicken and brocoli",
          image: {apple},
          calories: 256,
          servings: 4,
          minutesNeeded: 30,
          comments: "some comments",
          descriptions: "best DAM FOOOODDSDSS!!!",
          instructions: "just do it",
          ingredients: "put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in ",
          category: "chicken",
          //[year, month, day, hour, minute, second, millisecond]
          start: new Date(2018, 11, 6, 9, 30),
          //start: new Date(moment().add(3, "hours")),
          end: new Date(2018, 11, 6, 10, 30),
        },

        {
          id: uuid.v4(),
          title: "chicken and brocoli",
          image: {apple},
          calories: 256,
          servings: 4,
          minutesNeeded: 30,
          comments: "some comments",
          descriptions: "best DAM FOOOODDSDSS!!!",
          instructions: "just do it",
          ingredients: "put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in ",
          category: "chicken",
          //[year, month, day, hour, minute, second, millisecond]
          start: new Date(2018, 11, 6, 13, 30),
          //start: new Date(moment().add(3, "hours")),
          end: new Date(2018, 11, 6, 14, 30),
        },
        {
          id: uuid.v4(),
          title: "chicken and brocoli",
          image: {apple},
          calories: 256,
          servings: 4,
          minutesNeeded: 30,
          comments: "some comments",
          descriptions: "best DAM FOOOODDSDSS!!!",
          instructions: "just do it",
          ingredients: "put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in ",
          category: "chicken",
          //[year, month, day, hour, minute, second, millisecond]
          start: new Date(2018, 11, 6, 18, 30),
          //start: new Date(moment().add(3, "hours")),
          end: new Date(2018, 11, 6, 19, 30),
        },

        // ****************** ****************** ****************** ****************** ****************** ******************




// ****************** ****************** ****************** ****************** ****************** ******************
        {
          id: uuid.v4(),
          title: "chicken and brocoli",
          image: {apple},
          calories: 256,
          servings: 4,
          minutesNeeded: 30,
          comments: "some comments",
          descriptions: "best DAM FOOOODDSDSS!!!",
          instructions: "just do it",
          ingredients: "put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in ",
          category: "chicken",
          //[year, month, day, hour, minute, second, millisecond]
          start: new Date(2018, 11, 7, 8, 30),
          //start: new Date(moment().add(3, "hours")),
          end: new Date(2018, 11, 7, 9, 30),
        },

        {
          id: uuid.v4(),
          title: "chicken and brocoli",
          image: {apple},
          calories: 256,
          servings: 4,
          minutesNeeded: 30,
          comments: "some comments",
          descriptions: "best DAM FOOOODDSDSS!!!",
          instructions: "just do it",
          ingredients: "put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in put tings in ",
          category: "chicken",
          //[year, month, day, hour, minute, second, millisecond]
          start: new Date(2018, 11, 7, 12, 30),
          //start: new Date(moment().add(3, "hours")),
          end: new Date(2018, 11, 7, 13, 30),
        },


        // ****************** ****************** ****************** ****************** ****************** ******************





        {
          id: uuid.v4(),
          title: "curry chicken",
          image: {apple},
          calories: 256,
          servings: 4,
          minutesNeeded: 30,
          comments: "some comments",
          descriptions: "best curry chicken!!!",
          instructions: "just do it",
          ingredients: "curry + chickencurry + chickencurry + chickencurry + chickencurry + chickencurry + chickencurry + chickencurry + chickencurry + chickencurry + chickencurry + chickencurry + chickencurry + chickencurry + chickencurry + chickencurry + chickencurry + chickencurry + chickencurry + chickencurry + chickencurry + chickencurry + chickencurry + chickencurry + chickencurry + chickencurry + chickencurry + chickencurry + chicken",
          category: "chicken",
          //start: new Date(2018, 10, 22, 15, 30),
          start: new Date(moment().add(1, "hours")),
          end: new Date(moment().add(2, "hours")),
        },

      ],

      boolean: true, 

      selectedEvent: null

    };
  }

// ComponentDidMount() {
//   axios
// }
  
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
