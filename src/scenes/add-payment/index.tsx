import { Box, Grid } from "@mui/material";
import PaymentForm from "../../@views/forms/PaymentForm";
import Header from "../../components/Header";


const AddPayment = () => {
  


  return (
    <Box m="1.5rem 2.5rem">
    <Header
      title="Payment Form"

      subtitle="Add new payment to the system"
    />
    <Box m="2.5rem 0rem">
    <Grid item xs={12}>
         <PaymentForm/>
        </Grid>
    </Box>
  </Box>
  );
};

export default AddPayment;
