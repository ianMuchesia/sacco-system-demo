import {
  
  HomeOutlined,
  Queue,
  GroupAdd,
  CarRental,
  DirectionsCar,
  Announcement,
} from "@mui/icons-material";

const addItemsBar = [
  {
    text: "Create",
    icon: null,
  },
  {
    text: "Register",
    icon: GroupAdd,
  },
  {
    text: "Payment",
    icon: Queue ,
  },
];

const viewItemsBar = [
  {
    text: "Dashboard",
    icon: HomeOutlined ,
  },
  {
    text: "View",
    icon: null,
  },
  {
    text: "Members",
    icon: CarRental ,
  },
  {
    text: "Vehicles",
    icon: DirectionsCar ,
  },
  {
    text: "Drivers",
    icon: GroupAdd ,
  },
  {
    text: "Transactions",
    icon: Announcement ,
  },

];



export {
  viewItemsBar,addItemsBar
}