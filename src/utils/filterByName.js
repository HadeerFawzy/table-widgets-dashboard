const filterByName = (name, originaTableData, setLoading) => {
  setLoading(true);
  let filteredDataByDate = [];
  originaTableData.map((row, index) => {
    if (row.user_name.toLowerCase().includes(name.toLowerCase())) {
      filteredDataByDate.push(row);
    }
  });
  setLoading(false);
  return filteredDataByDate;
};
export default filterByName;
