import axios from "axios";
import getRandomDate from "utils/getRandomDate";
import moment from "moment";

const fetchTableData = ({ setLoading, successCallBack }) => {
    setLoading(true);
    axios
      .get(
        `https://mockend.com/HadeerFawzy/table-widgets-dashboard/applications?limit=200`
      )
      .then(function (response) {
        const dataFormatted = response.data.map((row) => {
          const randomDate = getRandomDate();
          return {
            ...row,
            date: randomDate,
            dateFormatted: moment(randomDate).format("DD/MM/YYYY, hh:mm"),
          };
        });
        successCallBack(dataFormatted);
      })
      .catch(function (error) {
        console.log(error);
        // will add errors handler here
      })
      .then(function () {
        // always executed
        setLoading(false);
      });
  };

export default fetchTableData;
