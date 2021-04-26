import React, { useState, useEffect } from "react";
import Table from "components/Content/TableComponent/table";
import SearchComponent from "components/Content/TableComponent/search-component";
import fetchTableData from "utils/fetchTableData";
import filterByDate from "utils/filterByDate";
import filterByName from "utils/filterByName";

const TableComponent = ({ title, dateRange }) => {
  const [originaTableData, setOriginalTableData] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);

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

  const onDateChange = () => {
    if (dateRange.startDate && dateRange.endDate) {
      const filteredTableByDate = filterByDate(
        dateRange,
        originaTableData,
        setLoading
      );
      setTableData([...filteredTableByDate]);
    } else {
      setTableData([...originaTableData]);
    }
  }

  useEffect(() => {
    onDateChange()
  }, [dateRange]);

  return (
    <>
      <Table
        title={title}
        tableData={tableData}
        loading={loading}
        subHeaderComponent={
          <SearchComponent onChangeCallBack={onSearchChange} />
        }
      />
    </>
  );
};

export default TableComponent;
