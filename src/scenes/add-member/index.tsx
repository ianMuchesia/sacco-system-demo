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
import { useForm } from "react-hook-form";

type MemberRegistrationInputs = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  address: string;
  // Add more fields as needed
};

const AddMember = () => {
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
  });

  return (
    <Card>
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
        <Divider />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
        >
          Register
        </Button>
      </form>
    </Card>
  );
};

export default AddMember;
