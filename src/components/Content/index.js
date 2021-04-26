import React, { useState } from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import DatePicker from "components/Content/DatePicker";
import TableComponent from "components/Content/TableComponent";

const Content = () => {

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
      <Box mb={6} mt={2} display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant="h4">Activities Dashboard</Typography>
        <DatePicker dateRange={dateRange} onDateChange={onDateChange} />
      </Box>
      <Grid container spacing={2}>
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
