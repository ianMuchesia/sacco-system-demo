import { GridToolbarColumnsButton, GridToolbarContainer, GridToolbarDensitySelector, GridToolbarExport } from '@mui/x-data-grid'
import React from 'react'
import FlexBetween from './FlexBetween'
import { IconButton, InputAdornment, TextField } from '@mui/material'
import { Search } from '@mui/icons-material'



interface Props{
    searchInput: string;
    setSearchInput:React.Dispatch<React.SetStateAction<string>>;
    setSearch:React.Dispatch<React.SetStateAction<string>>;
}
const MemberGrid = ({searchInput, setSearchInput, setSearch}:Props) => {
  return (
    <GridToolbarContainer>
    <FlexBetween width="100%">
      <FlexBetween>
        <GridToolbarColumnsButton />
        <GridToolbarDensitySelector />
        <GridToolbarExport />
      </FlexBetween>
      <TextField
          label="Search..."
          sx={{ mb: "0.5rem", width: "15rem" }}
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
          variant="standard"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => {
                    setSearch(searchInput);
                    setSearchInput("");
                  }}
                >
                  <Search />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </FlexBetween>
      </GridToolbarContainer>
  )
}

export default MemberGrid