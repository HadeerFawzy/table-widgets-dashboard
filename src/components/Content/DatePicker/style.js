import { fade } from "@material-ui/core";

const DatePickerStyle = (theme) => ({ 
  calendarRoot: { 
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.up("md")]: {
      justifyContent: 'flex-end',
    },
    // inputs wrapper
    '& .DateRangePickerInput__showClearDates': {
      display: 'flex',
      alignItems: 'center',
      background: `${theme.palette.background.default} !important`,
      color: `${theme.palette.secondary.main} !important`,
      '& *': {
        background: `${theme.palette.background.default}`,
        color: `${theme.palette.secondary.main}`,
      }
    },
    // day style
    '& .CalendarDay__selected_span, .CalendarDay__hovered_span, CalendarDay__hovered_span:hover': {
      background: `${fade(theme.palette.primary.main, 0.5)} !important`,
      border: `1px double ${fade(theme.palette.primary.main, 0.5)}`,
      color: `${theme.palette.common.white} !important`,
    },  
    '& .CalendarDay__selected, .CalendarDay__selected:active, .CalendarDay__selected:hover, .CalendarDay__selected_span:hover, .CalendarDay__hovered_span:hover': {
      background: `${theme.palette.primary.main} !important`,
      border: `1px double ${theme.palette.primary.main}`,
      color: `${theme.palette.common.white} !important`
    },
    '& .CalendarDay__default:hover': {
      background: `${fade(theme.palette.primary.main, 0.5)}`,
    },
    // days out of range
    '& .CalendarDay__blocked_out_of_range, .CalendarDay__blocked_out_of_range:active, .CalendarDay__blocked_out_of_range:hover': {
      color: `${fade(theme.palette.secondary.main, 0.5)} !important`,
      background: 'transparent',
    },
    // months navigations
    '& .DayPickerNavigation_button': {
      '& svg': {
        fill: theme.palette.primary.main,
      }
    },
    '& .DayPickerNavigation_button__default:active': {
      background: `${theme.palette.background.default} !important`
    },
    // month name
    '& .CalendarMonth_caption': {
      color: theme.palette.primary.main,
      fontSize: '20px',
      fontWeight: 'bold',
      textTransform: 'uppercase',
    },
    // Calendar Icon
    '& .DateRangePickerInput_calendarIcon': {
      margin: `0`,
      display: 'flex',
      alignItems: 'center'
    },
    '& .DateRangePickerInput_calendarIcon_svg': {
      fill: theme.palette.primary.main,
    },
    // Input
    '& .DateInput': {
      width: theme.spacing(12.5)
    },
    '& .DateInput_input__focused': {
      borderBottom: `2px solid ${theme.palette.primary.main}`
    },
    '& .DateInput_input': {
      fontSize: theme.typography.pxToRem(16),
      paddingLeft: theme.spacing(0.5),
      paddingRight: 0,
    },
    // clear Icon
    '& .DateRangePickerInput_clearDates': {
      top: '47%',
    },
    // arrow Icon
    '& .DateRangePickerInput_arrow_svg': {
      fill: `${theme.palette.secondary.main}`
    },
    '& .DateRangePickerInput_arrow': {
      margin: theme.spacing(0, 1, 0, 0)
    }
  },
});

export default DatePickerStyle;
