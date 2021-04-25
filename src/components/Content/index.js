import React, { useState } from "react";
import { Box } from "@material-ui/core";
import DatePicker from "components/Content/DatePicker";
import TableComponent from "components/Content/TableComponent"

import moment from 'moment';

const Content = () => {
  const [dateRange, setDateRange] = useState({
    startDate: moment(),
    endDate: moment(),
  });

  const onDateChange = ({ startDate, endDate }) => {
    setDateRange({
      startDate, endDate,
    });
  };

  return (
    <Box>
      <DatePicker dateRange={dateRange} onDateChange={onDateChange} />
      <TableComponent/>
    </Box>
  );
};

export default Content;
