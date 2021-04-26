import React, { useState, useEffect } from "react";
import { TextField, InputAdornment, IconButton } from "@material-ui/core";
import ClearIcon from '@material-ui/icons/Clear';

const SearchComponent = ({ onChangeCallBack }) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    onChangeCallBack(search);
  }, [search]);

  return (
    <>
      <TextField
        id="search"
        size="small"
        label="Search by Name"
        variant="outlined"
        autoComplete="new-password"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={() => setSearch('')} edge="end">
                <ClearIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </>
  );
};

export default SearchComponent;
