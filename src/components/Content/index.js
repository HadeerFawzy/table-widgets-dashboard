import React, { useState, useEffect } from "react";
import { Box } from "@material-ui/core";
import DatePicker from "components/Content/DatePicker";
import TableComponent from "components/Content/TableComponent";
import SearchComponent from "components/Content/TableComponent/search-component";
import fetchTableData from "utils/fetchTableData";
import filterByDate from "utils/filterByDate";
import filterByName from "utils/filterByName";
import moment from "moment";

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
    setTableData([...filterByName(name, originaTableData, setLoading)])
  };

  return (
    <Box>
      <DatePicker dateRange={dateRange} onDateChange={onDateChange} />
      <TableComponent
        tableData={tableData}
        loading={loading}
        subHeaderComponent={
          <SearchComponent onChangeCallBack={onSearchChange} />
        }
      />
    </Box>
  );
};

export default Content;
