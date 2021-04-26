  /**
   * THIS FUNCTION TO GET DATES IN 2021 AS MOCKEND GETS VERY OLD DATE WHICH MAKE IT HARD TO FILTER DATES
  **/
  const getRandomDate = () => {
    const start = new Date("01, 01, 2020");
    const end = new Date();
    var date = new Date(+start + Math.random() * (end - start));
    return date;
  };

  export default getRandomDate