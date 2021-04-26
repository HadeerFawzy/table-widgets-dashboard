import React, { useState } from "react";
import { Box, Grid, Typography, makeStyles, useMediaQuery } from "@material-ui/core";
import DatePicker from "components/Content/DatePicker";
import TableComponent from "components/Content/TableComponent";

const useStyles = makeStyles((theme) => ({
  headerBox: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row'
    }
  },
  pageTitle: {
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up('lg')]: {
      marginBottom: 0
    }
  }
}));

const Content = () => {
  const classes = useStyles();
  const mediumScreen = useMediaQuery('(min-width:768px)');

  const [dateRange, setDateRange] = useState({
    startDate: null,
    endDate: null,
  });

  const onDateChange = ({ startDate, endDate }) => {
    setDateRange({
      startDate,
      endDate,
    });
  };

  return (
    <Box>
      <Box className={classes.headerBox} mb={6} mt={2}>
        <Typography variant="h4" className={classes.pageTitle}>Activities Dashboard</Typography>
        <DatePicker dateRange={dateRange} onDateChange={onDateChange} />
      </Box>
      <Grid container spacing={mediumScreen ? 2 : 0}>
        <Grid item xs={12} lg={6}>
          <TableComponent
            title="Activities Table One"
            dateRange={dateRange}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <TableComponent
            title="Activities Table Two"
            dateRange={dateRange}
          />
        </Grid>
        <Grid item xs={12}>
          <TableComponent
            title="Activities Table Three"
            dateRange={dateRange}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Content;
