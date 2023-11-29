import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../store/hooks";
import { MouseEvent, useState } from "react";
import { ThemeOptions } from "../@types";
import { AppBar, Box, Button, IconButton, InputBase, Menu, MenuItem, Toolbar, Typography, useTheme } from "@mui/material";
import FlexBetween from "./FlexBetween";
import { GridMenuIcon } from "@mui/x-data-grid";
import { ArrowDropDownCircleOutlined, DarkModeOutlined, LightModeOutlined, Search, SettingsOutlined } from "@mui/icons-material";
import { setMode } from "../store/features/modeSlice";
import profile from "../assets/react.svg"



interface NavbarProps {
    isSideBarOpen: boolean;
    setIsSideBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = ({isSideBarOpen, setIsSideBarOpen}:NavbarProps) => {


    const dispatch = useAppDispatch()

    const navigate = useNavigate()

    const theme = useTheme() as ThemeOptions;

    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const isOpen = Boolean(anchorEl);
  
    const handleClick = (event: MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
        <AppBar
        sx={{
          position: "static",
          background: "none",
          boxShadow: "none",
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
          }}
        >
          {/* Left side */}
          <FlexBetween>
            <IconButton onClick={() => setIsSideBarOpen(!isSideBarOpen)}>
              <GridMenuIcon />
            </IconButton>
            <div
              style={{
                backgroundColor: theme.palette.background.alt,
                borderRadius: "9px",
                padding: "0.1rem 1.5rem",
              }}
            >
              <FlexBetween gap="3rem">
                <InputBase placeholder="Search..." />
                <IconButton>
                  <Search />
                </IconButton>
              </FlexBetween>
            </div>
          </FlexBetween>
          {/* RIGHT SIDE */}
          <FlexBetween gap="1.5rem">
            <IconButton
              onClick={() => {
                dispatch(setMode());
              }}
            >
              {theme.palette.mode === "dark" ? (
                                <LightModeOutlined sx={{ fontSize: "25px" }} />

              ) : (
                <DarkModeOutlined sx={{ fontSize: "25px" }} />

              )}
            </IconButton>
            <IconButton>
              <SettingsOutlined />
            </IconButton>
            <Button
              onClick={handleClick}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                textTransform: "none",
                gap: "1rem",
              }}
            >
              <Box
                component="img"
                alt="profile"
                src={profile}
                height="32px"
                width="32px"
                borderRadius="50%"
                sx={{ objectFit: "cover" }}
              />
              <Box textAlign="left">
                <Typography
                  fontWeight="bold"
                  fontSize="0.85rem"
                  sx={{ color: theme.palette.secondary[100] }}
                >
                  user name
                </Typography>
                <Typography
                  fontSize="0.75rem"
                  sx={{ color: theme.palette.secondary[200] }}
                >
              trial
                </Typography>
              </Box>
              <ArrowDropDownCircleOutlined
                sx={{ color: theme.palette.secondary[300], fontSize: "25px" }}
              />
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={isOpen}
              onClose={handleClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
              <MenuItem>Log Out</MenuItem>
            </Menu>
          </FlexBetween>
        </Toolbar>
      </AppBar>
    )
}

export default Navbar