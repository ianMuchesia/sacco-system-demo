// Import necessary components and icons from Material-UI
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import InputAdornment from "@mui/material/InputAdornment";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import EmailIcon from "@mui/icons-material/Email";

// Import useForm hook from react-hook-form library
import { useForm } from "react-hook-form";
import { CardActions, useTheme } from "@mui/material";
import { ThemeOptions } from "../../@types";

type MemberRegistrationInputs = {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
    address: string;
    // Add more fields as needed
  };
  
const MemberForm = () => {


    const theme = useTheme() as ThemeOptions
  const {
    handleSubmit,
    reset,
    register,
    getValues,
    formState: { errors },
  } = useForm<MemberRegistrationInputs>({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      address: "",
    },
  })
  return (
    <Card
    sx={{
      backgroundImage: "none",
      backgroundColor: theme.palette.background.alt,
      borderRadius: "0.55rem",
    }}
  >
      <CardHeader
        title="Member Registration"
        titleTypographyProps={{ variant: "h6" }}
      />
      <Divider />
      <form onSubmit={handleSubmit(() => {reset()})}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Username"
                {...register("username", {
                  required: "Username is required",
                })}
                error={!!errors.username?.message}
                helperText={errors.username?.message}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                type="email"
                label="Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
                error={!!errors.email?.message}
                helperText={errors.email?.message}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                type="password"
                label="Password"
                {...register("password", {
                  required: "Password is required",
                })}
                error={!!errors.password?.message}
                helperText={errors.password?.message}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                type="password"
                label="Confirm Password"
                {...register("confirmPassword", {
                  required: "Confirm Password is required",
                  validate: (value) =>
                    value === getValues("password") ||
                    "Passwords do not match",
                })}
                error={!!errors.confirmPassword?.message}
                helperText={errors.confirmPassword?.message}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Address"
                {...register("address", {
                  required: "Address is required",
                })}
                error={!!errors.address?.message}
                helperText={errors.address?.message}
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

export default MemberForm