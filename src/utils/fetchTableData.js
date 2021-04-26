import axios from "axios";
import getRandomDate from "utils/getRandomDate";
import moment from "moment";

const fetchTableData = ({ setLoading, successCallBack }) => {
    const rowsCount = Math.floor(Math.random() * (100 - 50) + 50);
    setLoading(true);
    const url = `https://mockend.com/HadeerFawzy/table-widgets-dashboard/applications?limit=${rowsCount}`
    axios
      .get(url)
      .then(function (response) {
        const dataFormatted = response.data.map((row) => {
          const randomDate = getRandomDate();
          return {
            ...row,
            user_img: `https://picsum.photos/id/${Math.floor(Math.random() * (row.id))}/100/100`,
            date: randomDate,
            dateFormatted: moment(randomDate).format("DD/MM/YYYY, hh:mm"),
            duration: Math.floor(Math.random() * (8 - 1) + 1)
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
