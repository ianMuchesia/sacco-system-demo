
//react imports
import { useState } from "react"

//import components
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"

//material ui imports
import { Box, useMediaQuery } from "@mui/material" 

//redux imports
import { useAppDispatch } from "../store/hooks"

//router imports
import { Outlet } from "react-router-dom"


const Layout = () => {

    const isNoneMobile: boolean = useMediaQuery("(min-width: 600px)")

    const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(true)

    const dispatch = useAppDispatch()

    
  return (
    <Box display={isNoneMobile ? "flex" : "block"} width="100%" height="100%">
   <Sidebar
        isNonMobile={isNoneMobile}
        drawerWidth="250px"
        isSidebarOpen={isSideBarOpen}
        setIsSidebarOpen={setIsSideBarOpen}
      />
<Box flexGrow={1}>
<Navbar
          isSideBarOpen={isSideBarOpen}
          setIsSideBarOpen={setIsSideBarOpen}
        />
<Outlet/>
</Box>
        </Box>
  )
}

export default Layout