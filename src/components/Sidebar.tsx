import React, { MouseEvent, useEffect, useState } from 'react'
import { useAppDispatch } from '../store/hooks';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Divider, Drawer, IconButton, List, Typography, useTheme } from '@mui/material';
import { ThemeOptions } from '../@types';
import { ChevronLeft } from 'mdi-material-ui';
import FlexBetween from './FlexBetween';
import { addItemsBar, viewItemsBar } from '../environments';
import ListItemComponent from './ListItemComponent';



interface sideBarProps {
  drawerWidth:string;
  isSidebarOpen:boolean;
  isNonMobile:boolean;
  setIsSidebarOpen:React.Dispatch<React.SetStateAction<boolean>>;
}
const Sidebar = ({drawerWidth, isSidebarOpen,isNonMobile,setIsSidebarOpen}:sideBarProps) => {


  const dispatch = useAppDispatch()

  const navigate = useNavigate()

  //to determine the path we are on
  const { pathname} = useLocation()
  
  const [ active, setActive ] = useState("")

  const [ anchorElement, setAnchorElement] = useState<HTMLElement| null>(null);


  const theme = useTheme() as ThemeOptions

    //everytime we have the pathname changing we are going to set the active value to the active page we are on
    useEffect(() => {
      setActive(pathname.substring(1));
    }, [pathname]);


    const isOpen  = Boolean(anchorElement);

    const handleClick = (event: MouseEvent<HTMLElement>) => {
      setAnchorElement(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorElement(null);
    };
  
  return (
   <Box component="nav">
    {
      isSidebarOpen && (
        <Drawer
        open={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        variant="persistent"
        anchor="left"
        sx={{
          width: drawerWidth,
          "& .MuiDrawer-paper": {
            color: theme.palette.secondary[200],
            backgroundColor: theme.palette.background.alt,
            boxSixing: "border-box",
            borderWidth: isNonMobile ? 0 : "2px",
            width: drawerWidth,
          },
        }}
      >   <Box width="100%">
      <Box m="1.5rem 2rem 2rem 3rem">
        <FlexBetween color={theme.palette.secondary.main}>
          <Box display="flex" alignItems="center" gap="0.5rem">
            <Typography variant="h4" fontWeight="bold">
              A DEMO
            </Typography>
          </Box>
          {!isNonMobile && (
            <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
              <ChevronLeft />
            </IconButton>
          )}
        </FlexBetween>
      </Box>
      <Divider />
      <List>
        {viewItemsBar.map(({ text, icon }) => {
          if (!icon) {
            return (
              <Typography
                variant="h3"
                key={text}
                sx={{ m: "2.25rem 0 1rem 3rem" }}
              >
                {text}
              </Typography>
            );
          }
          const lcText = `view${text.toLowerCase()}`;

          return (
            <ListItemComponent
              key={text}
              lcText={lcText}
              text={text}
              icon={icon}
              active={active}
              setActive={setActive}
            />
          );
        })}
      </List>

      <Divider />
      <List>
        {addItemsBar.map(({ text, icon }) => {
          if (!icon) {
            return (
              <Typography
                variant="h3"
                key={text}
                sx={{ m: "2.25rem 0 1rem 3rem" }}
              >
                {text}
              </Typography>
            );
          }
          const lcText = `${text.toLowerCase()}`;

          return (
            <ListItemComponent
              key={text}
              lcText={lcText}
              text={text}
              icon={icon}
              active={active}
              setActive={setActive}
            />
          );
        })}
      </List>
    </Box>
        </Drawer>
      )
    }
   </Box>
  )
}

export default Sidebar