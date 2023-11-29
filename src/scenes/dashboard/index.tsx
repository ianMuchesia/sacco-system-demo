import { Box, Grid } from "@mui/material"
import Header from "../../components/Header"
import DashboardCard from "../../cards/DashboardCard"
import { Handyman } from "@mui/icons-material"

const Dashboard = () => {
  return (
    <Box m="1.5rem 2.5rem">
    <Header title="Dashboard" subtitle="Statistics of your company" />
    <Grid m="2.5rem 0rem" item xs={12} md={6} lg={4}>
            <Grid container spacing={6}>
          
                {
                    Array.from({length:10},(_,index)=>{
                        return(
                            <Grid item xs={6} lg={4} key={index}>
                            <DashboardCard
                            stats={"20"|| "Loading..."}
                            title='Your title'
                            trend='negative'
                           
                            trendNumber=''
                            subtitle='Total number of titles'
                            icon={<Handyman />}
                          />
                        </Grid>
                       
                        )
                    })
                }
               
            </Grid>
          </Grid>
  
     </Box>
  )
}

export default Dashboard