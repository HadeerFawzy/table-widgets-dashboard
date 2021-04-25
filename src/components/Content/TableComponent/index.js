import React, {useEffect} from 'react';
import DataTable from 'react-data-table-component';


const TableComponent = ({ sidebarInfo }) => {

  useEffect(() => {
    // the online data generator wasn't flexible enough to draw data relations so I only will generate vehicles and add some dates statically
    // fetchVehicles(`https://mockend.com/HadeerFawzy/table-widgets-dashboard/applications?limit=50`)
  }, []);

  return (
    <div>
      TEST
    </div>
  );
}

export default TableComponent;
