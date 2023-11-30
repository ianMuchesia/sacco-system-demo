import { Box, Grid } from "@mui/material"
import Header from "../../components/Header"
import DashboardCard from "../../@views/CardVertical"
import { Handyman } from "@mui/icons-material"
import ApexChartWrapper from "../../@views/charts"
import Trophy from "../../@views/dashboard/Trophy"
import StatisticsCard from "../../@views/dashboard/StatisticsCard"
import WeeklyOverview from "../../@views/dashboard/WeeklyOverview"
import TotalEarning from "../../@views/dashboard/TotalEarning"

const Dashboard = () => {
  return (
    <ApexChartWrapper>
      <Box m="1.5rem 2.5rem">
        <Header title="Dashboard" subtitle="Statistics of your company" />
        <Grid container spacing={6}>
          <Grid item xs={12} md={4}>
            <Trophy />
          </Grid>
          <Grid item xs={12} md={8}>
            <StatisticsCard />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <WeeklyOverview />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <TotalEarning />
          </Grid>
          <Grid item xs={12}  lg={4}>
            <Grid container spacing={6}>

              {
                Array.from({ length: 4 }, (_, index) => {
                  return (
                    <Grid item xs={6} key={index}>
                      <DashboardCard
                        stats={"20" || "Loading..."}
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
        </Grid>


      </Box>
    </ApexChartWrapper>
  )
}

export default Dashboard