import moment from "moment";

const filterByDate = (dateRange, originaTableData, setLoading) => {
  // setLoading(true);
  let filteredDataByDate = [];
  originaTableData.map((row, index) => {
    const dayToCheck = new Date(moment(row.date).format("MM/DD/YYYY"));
    const startDay = new Date(dateRange.startDate.format("MM/DD/YYYY"));
    const endDay = new Date(dateRange.endDate.format("MM/DD/YYYY"));
    const isBetween = moment(dayToCheck).isBetween(startDay, endDay);

    if (isBetween) {
      filteredDataByDate.push(row);
    }
  });
  // setLoading(false);
  return [...filteredDataByDate];
};
export default filterByDate;
