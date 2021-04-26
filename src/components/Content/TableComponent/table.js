import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import {
  CircularProgress,
  makeStyles,
  Box,
  Typography,
  Avatar,
  LinearProgress
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
  tableBox: {
    maxWidth: "100%",
    border: `1px solid`,
    borderRadius: "2px",
    margin: theme.spacing(1, 2),
    [theme.breakpoints.up("md")]: {
      margin: theme.spacing(0),
    },
  },
  userImage: {
    marginRight: theme.spacing(1)
  },
}));

const Table = ({ loading, title, tableData, subHeaderComponent }) => {
  const classes = useStyles();
  const { themeToggle } = useContext(LayoutContext);

  const UserImgNameCell = ({ row }) => (
    <Box display="flex" alignItems="center">
      <Avatar alt={row.user_name} src={row.user_img} className={classes.userImage}/>
      <Typography>{row.user_name}</Typography>
    </Box>
  );

  const DurationCell = ({ row }) => (
    <Box>
      <Box mb={1}>{`${row.duration} hours`}</Box>
      <LinearProgress variant="determinate" value={row.duration* 10} />
    </Box>
  )

  const columns = [
    {
      name: "ID",
      selector: "id",
      sortable: false,
      width: "70px",
    },
    {
      name: "User",
      selector: "user_name",
      sortable: true,
      // grow: 4,
      minWidth: '200px',
      cell: (row) => <UserImgNameCell row={row} />,
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
      cell: (row) => <DurationCell row={row}/>,
    },
    {
      name: "Date",
      selector: "dateFormatted",
      sortable: true,
      minWidth: '180px',
    },
  ];

  return (
    <Box className={classes.tableBox}>
      <DataTable
        title={title}
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

export default Table;
