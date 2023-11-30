import { Box, IconButton} from "@mui/material";
import React, { useState } from "react";
import Header from "../../components/Header";
import {
  DataGrid,

  GridValueGetterParams,
} from "@mui/x-data-grid";



import { membersData } from "../../environments";
import { DeleteCircleOutline } from "mdi-material-ui";
import MemberGrid from "../../components/MemberGrid";

const Members = () => {
 


  // values to be sent to the backend
  const [paginationModel, setPaginationModel] = React.useState({
    page: 0,
    pageSize: 20,
  });

  // values to be sent to the backend
  const [sort, setSort] = useState({});

  // values to be sent to the backend
  const [search, setSearch] = useState("");

  console.log(sort, search)

  const [searchInput, setSearchInput] = useState("");

const data = membersData
  const columns = [
    {
      field: "fullName",
      headerName: "Full Name",
      flex: 1,
      valueGetter: (params: GridValueGetterParams) => {
        const { fullName } = params?.row;
        return fullName;
      },
    },
    {
      field: "dateOfBirth",
      headerName: "Date of Birth",
      flex: 1,
    },
    {
      field: "contactInformation",
      headerName: "Contact Information",
      flex: 1,
    },
    {
      field: "savingsBalance",
      headerName: "Savings Balance",
      flex: 1,
    },
    {
      field: "delete",
      headerName: "Actions",
      flex: 1,
      sortable: false,
      renderCell: () => {
        return (
          <>
            <IconButton
              color="secondary"
              aria-label="Delete"
              onClick={(e) => {
                e.stopPropagation();
               
              }}
            >
              <DeleteCircleOutline />
            </IconButton>
          </>
        );
      },
    },
  ];

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="Members" subtitle="See the list of all members." />
      <Box
        height="80vh"
        sx={{
          // Styles for DataGrid
          // ...
        }}
      >
        <DataGrid
          loading={!data}
          getRowId={(member) => member.memberId}
          rows={(data && data) || []}
          columns={columns}
          rowCount={(data && data.length) || 0}
          pagination
          paginationModel={paginationModel}
          onPaginationModelChange={setPaginationModel}
          paginationMode="server"
          pageSizeOptions={[20, 50, 100]}
          sortingMode="server"
          onSortModelChange={(newSortModel) =>
            setSort((prevSortModel) => ({ ...prevSortModel, newSortModel }))
          }
          slots={{ toolbar: MemberGrid }} // Update to use MemberGrid
          slotProps={{
            toolbar: { searchInput, setSearchInput, setSearch },
          }}
         
        />
      </Box>
    </Box>
  );
};

export default Members;
