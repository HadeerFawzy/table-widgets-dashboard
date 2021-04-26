import React, { useState, useEffect } from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import DatePicker from "components/Content/DatePicker";
import TableComponent from "components/Content/TableComponent";
import SearchComponent from "components/Content/TableComponent/search-component";
import fetchTableData from "utils/fetchTableData";
import filterByDate from "utils/filterByDate";
import filterByName from "utils/filterByName";

const Content = () => {
  const [originaTableData, setOriginalTableData] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [dateRange, setDateRange] = useState({
    startDate: null,
    endDate: null,
  });

  const onDateChange = ({ startDate, endDate }) => {
    setDateRange({
      startDate,
      endDate,
    });
    // FILTER
    if (startDate && endDate) {
      const filteredTableByDate = filterByDate(
        {
          startDate,
          endDate,
        },
        originaTableData,
        setLoading
      );
      setTableData([...filteredTableByDate]);
    } else {
      setTableData([...originaTableData]);
    }
  };

  useEffect(() => {
    fetchTableData({
      setLoading,
      successCallBack: (res) => {
        setOriginalTableData([...res]);
        setTableData([...res]);
      },
    });
  }, []);

  const onSearchChange = (name) => {
    setTableData([...filterByName(name, originaTableData, setLoading)]);
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
            tableData={tableData}
            loading={loading}
            subHeaderComponent={
              <SearchComponent onChangeCallBack={onSearchChange} />
            }
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <TableComponent
            title="Activities Table Two"
            tableData={tableData}
            loading={loading}
            subHeaderComponent={
              <SearchComponent onChangeCallBack={onSearchChange} />
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TableComponent
            title="Activities Table Three"
            tableData={tableData}
            loading={loading}
            subHeaderComponent={
              <SearchComponent onChangeCallBack={onSearchChange} />
            }
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Content;
