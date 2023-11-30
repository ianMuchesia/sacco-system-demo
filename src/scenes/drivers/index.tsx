import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import Typography from "@mui/material/Typography";
import TableContainer from "@mui/material/TableContainer";
import { Delete } from "mdi-material-ui";
import { Divider, useTheme } from "@mui/material";
import { driversData } from "../../environments";
import {  ThemeOptions } from "../../@types";
import Header from "../../components/Header";








const Drivers = () => {



  const drivers = driversData
  const theme = useTheme() as ThemeOptions;

 
  return (
    <Box m="1.5rem 2.5rem">
    <Header title="DRIVERS" subtitle="See your list of drivers." />
    <Divider />
    <Card
      sx={{
        backgroundImage: "none",
        backgroundColor: theme.palette.background.alt,
        borderRadius: "0.55rem",
      }}
    >
      {drivers && (
        <TableContainer>
          <Table sx={{ minWidth: 800 }} aria-label="table of drivers">
            <TableHead>
              <TableRow>
                <TableCell>Driver Name</TableCell>
                <TableCell>License Number</TableCell>
                <TableCell>Vehicle Plate Number</TableCell>
                <TableCell>Years of Experience</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {drivers.map((driver) => (
                <TableRow
                  hover
                  key={driver.driverId}
                  sx={{ "&:last-of-type td, &:last-of-type th": { border: 0 } }}
                >
                  <TableCell
                    sx={{ py: (theme) => `${theme.spacing(0.5)} !important` }}
                  >
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography
                        sx={{
                          fontWeight: 500,
                          fontSize: "0.875rem !important",
                        }}
                      >
                        {`${driver.fullName}`}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>{driver.licenseNumber}</TableCell>
                  <TableCell>{driver.vehiclePlateNumber}</TableCell>
                  <TableCell>{driver.yearsOfExperience}</TableCell>
                  <TableCell>
                    <Delete
                      onClick={() => {
                        
                      }}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Card>
    </Box>
  )
}

export default Drivers