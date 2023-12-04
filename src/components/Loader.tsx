import { Box, CircularProgress, Typography, useTheme } from '@mui/material'
import { useEffect, useState } from 'react';
import { ThemeOptions } from '../@types';



const Loader = () => {

    const theme = useTheme() as  ThemeOptions;

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
      const timeout = setTimeout(() => {
        setLoaded(true);
      }, 5000);
  
      return () => clearTimeout(timeout);
    }, []);

  if (loaded) return null;


  return (
    <>
    <Box
    sx={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      gap:2,
      justifyContent: 'center',
      backgroundColor: theme.palette.background.alt, // Set the background color as needed
      zIndex: 999999, // Adjust the z-index as necessary
    }}
  >


    <CircularProgress  sx={{
        color: theme.palette.primary.main,
        width: '100px !important',
        height: '100px !important',
    }}/>
     <Typography variant="h5" sx={{color:theme.palette.secondary[300],textAlign:"center",maxWidth:"70%"}}>This is a demo frontend experience of the sacco management system not the real one due to privacy concerns</Typography>
  </Box>
  </>
  )
}

export default Loader