import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import {
  CircularProgress,
  makeStyles,
  Box,
} from "@material-ui/core";
import LayoutContext from "components/Layout/layout-context";

const useStyles = makeStyles((theme) => ({
  loaderRoot: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(6),
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const TableComponent = ({ loading, tableData, subHeaderComponent }) => {
  const classes = useStyles();
  const { themeToggle } = useContext(LayoutContext);

  const columns = [
    {
      name: "ID",
      selector: "id",
      sortable: false,
    },
    {
      name: "User Name",
      selector: "user_name",
      sortable: true,
    },
    {
      name: "User Role",
      selector: "user_role",
      sortable: false,
    },
    {
      name: "Duration",
      selector: "duration",
      sortable: true,
    },
    {
      name: "Date",
      selector: "dateFormatted",
      sortable: true,
    },
  ];

  return (
    <Box my={4} maxWidth={`100%`}>
      <DataTable
        title="Activites Table"
        columns={columns}
        data={tableData}
        progressPending={loading}
        progressComponent={
          <div className={classes.loaderRoot}>
            <CircularProgress />
          </div>
        }
        persistTableHead
        fixedHeader
        responsive
        theme={themeToggle === "dark" ? "dark" : "default"}
        pagination
        subHeader
        subHeaderComponent={subHeaderComponent}
      />
    </Box>
  );
};

export default TableComponent;
