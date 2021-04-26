import React, { useState } from 'react';
import { makeStyles, Box } from "@material-ui/core";
import { DateRangePicker, isInclusivelyAfterDay } from "react-dates";
import moment from 'moment';
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import DatePickerStyle from "components/Content/DatePicker/style";

const useStyles = makeStyles((theme) => (DatePickerStyle(theme)));

const DatePicker = ({ dateRange, onDateChange }) => {

  const classes = useStyles();

  const mediumScreen = useMediaQuery('(min-width:768px)');
  const [focusedInput, setFocusedInput] = useState(null);

  const props = {
    startDate: (dateRange.startDate) || null,
    endDate: (dateRange.endDate) || null, 
    onDatesChange: ({ startDate, endDate }) => onDateChange({ startDate, endDate }),
    focusedInput: focusedInput, 
    onFocusChange: (focusedInput) => {
      setFocusedInput(focusedInput) 
    },
    numberOfMonths: mediumScreen ? 2 : 1,
    daySize: 40,
    minimumNights: 1,
    hideKeyboardShortcutsPanel: true,
    keepOpenOnDateSelect: false,
    isOutsideRange: day => isInclusivelyAfterDay(moment(day), moment(new Date()).add(1, 'days')),
    displayFormat: "DD-MM-YYYY",
    onClose: () => console.log('close'),
    showClearDates: true,
    reopenPickerOnClearDates: true,
    startDateId: "start-date",
    endDateId: "end-date",
    showDefaultInputIcon: true,
    verticalSpacing: 4,
    anchorDirection: mediumScreen ? "right" : "left",
  }

  return (
    <Box className={classes.calendarRoot}>
      <DateRangePicker {...props}/>
    </Box>
  );
}

export default DatePicker;
