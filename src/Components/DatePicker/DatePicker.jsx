import "date-fns";
import React from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { useState } from "react";

export default function MaterialUIPickers() {
  //-------------------date's------------------
  var today = new Date(); // today
  var next = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 7
  ); //next week

  //-----------------date limit------------------------
  var startDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 2
  );
  var endDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 8
  );
  // console.log( today, next, startDate, endDate);
  //---------------------------------------------------
    
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );
  const handleDateChange = (date) => {
    setSelectedDate(date);
    increment();
  };
  const [dates, setDates] = useState(0);
  function increment() {
    setDates(prevState => prevState + 1);
  }

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justifyContent="space-around">
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Choose Date"
          format="MM/dd/yyyy"
          value={selectedDate}
          min={startDate}
          max={endDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            "aria-label": "change date", 
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
