import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { useForm } from "react-hook-form";
import { ThemeOptions } from "../../@types";
import { Button, useTheme } from "@mui/material";


type Inputs = {
memberId: string;
  paymentMethod: string;
  transactionId: string;
  amount: number;
  paymentDate: string;
};
const PaymentForm = () => {

  const theme = useTheme() as ThemeOptions
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
     memberId: "",
      paymentMethod: "", // Add payment-related fields
      transactionId: "",
      amount: 0,
      paymentDate: "",
    },
  });

  const paymentSubmit = async (formData: Inputs) => {
    console.log(formData)
    reset()
  };
  return (
    <Card
      sx={{
        backgroundImage: "none",
        backgroundColor: theme.palette.background.alt,
        borderRadius: "0.55rem",
      }}
    >
      <CardHeader
        title="Please fill all the details before submitting"
        titleTypographyProps={{ variant: "h6" }}
      />
      <Divider sx={{ margin: 0 }} />
      <form onSubmit={handleSubmit(paymentSubmit)}>
        <CardContent>
          <Grid container spacing={5}>

            <Grid item xs={12}>
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                Payment Information
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Payment Method"
                placeholder="Credit Card"
                {...register("paymentMethod", {
                  required: "Payment method is required",
                })}
                error={!!errors.paymentMethod?.message}
                helperText={errors.paymentMethod?.message}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Transaction ID"
                placeholder="123456"
                {...register("transactionId", {
                  required: "Transaction ID is required",
                })}
                error={!!errors.transactionId?.message}
                helperText={errors.transactionId?.message}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Member ID"
                placeholder="123456"
                {...register("memberId", {
                  required: "Member ID is required",
                })}
                error={!!errors.memberId?.message}
                helperText={errors.memberId?.message}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                type="number"
                label="Amount"
                placeholder="100"
                {...register("amount", {
                  required: "Amount is required",
                })}
                error={!!errors.amount?.message}
                helperText={errors.amount?.message}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                type="date"
                {...register("paymentDate", {
                  required: "Payment date is required",
                })}
                error={!!errors.paymentDate?.message}
                helperText={errors.paymentDate?.message}
              />
            </Grid>
          </Grid>
        </CardContent>

        <Divider sx={{ margin: 0 }} />
        <CardActions>
          <Button size="large" type="submit" sx={{ mr: 2 }} variant="contained">
            Submit
          </Button>
          <Button
            size="large"
            color="secondary"
            variant="outlined"
            onClick={() => {
              reset();
            }}
          >
            Cancel
          </Button>
        </CardActions>
      </form>
    </Card>
  )
}

export default PaymentForm