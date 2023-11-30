import  { useState } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Button,
  Typography,
  Rating,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Header from "../../components/Header";
import { ThemeOptions, VehicleData } from "../../@types";
import { vehiclesData } from "../../environments";

interface Props {
  item: VehicleData;
}

const SingleVehicle = ({ item }: Props) => {
  const theme = useTheme() as ThemeOptions;
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card
      sx={{
        backgroundImage: "none",
        backgroundColor: theme.palette.background.alt,
        borderRadius: "0.55rem",
      }}
    >
      <CardContent>
        <Typography
          sx={{ fontSize: 14 }}
          color={theme.palette.secondary[700]}
          gutterBottom
        >
          {item.vehicle.category}
        </Typography>
        <Typography variant="h5" component="div">
          {item.vehicle.model}
        </Typography>
        <Typography sx={{ mb: "1.5rem" }} color={theme.palette.secondary[400]}>
          ${Number(item.vehicle.price).toFixed(2)}
        </Typography>
        <Rating value={item.vehicle.rating} readOnly />

        <Typography variant="body2">{item.vehicle.description}</Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          size="small"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          See More
        </Button>
      </CardActions>
      <Collapse
        in={isExpanded}
        timeout="auto"
        unmountOnExit
        sx={{
          color: theme.palette.neutral[300],
        }}
      >
        <CardContent>
          <Typography>id: {item.vehicle._id}</Typography>
          <Typography>Supply Left: {item.vehicle.supply}</Typography>
          <Typography>
            Yearly Sales This Year: {item.yearlySalesTotal}
          </Typography>
          <Typography>
            Yearly Units Sold This Year: {item.yearlyTotalSoldUnits}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

const Vehicles = () => {
  const data = vehiclesData;
  const isLoading = false;
 
  const isNonMobile = useMediaQuery("(min-width: 1000px)");

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="VEHICLES" subtitle="See your list of vehicles." />
      {data || !isLoading ? (
        <Box
          mt="20px"
          display="grid"
          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
          justifyContent="space-between"
          rowGap="20px"
          columnGap="1.33%"
          sx={{
            "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
          }}
        >
          {data?.map(
            (item: any) => (
              <SingleVehicle key={item._id} item={item} />
            )
          )}
        </Box>
      ) : (
        <>Loading...</>
      )}
    </Box>
  );
};

export default Vehicles;
