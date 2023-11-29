import { Box, Typography, useTheme } from "@mui/material";
import { ThemeOptions } from "../@types";

interface HeaderProps{
    title:string;
    subtitle:string;
}

const Header = ({title, subtitle}:HeaderProps) => {
    const theme = useTheme() as ThemeOptions;

  return (
    <Box>
    <Typography
      variant="h2"
      color={theme.palette.secondary[100]}
      fontWeight="bold"
      sx={{ mb: "5px" }}
    >
      {title}
    </Typography>
    <Typography variant="h5" color={theme.palette.secondary[300]}>
      {subtitle}
    </Typography>
  </Box>
  )
}

export default Header