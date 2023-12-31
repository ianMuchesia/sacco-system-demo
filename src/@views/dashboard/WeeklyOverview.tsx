import {  Box, Button, Card, CardContent, CardHeader, IconButton, Typography, useTheme } from '@mui/material'
import { ApexOptions } from 'apexcharts'

import { ThemeOptions } from '../../@types'
import { DotsVertical } from 'mdi-material-ui'
import ReactApexChart from 'react-apexcharts'

const WeeklyOverview = () => {
    // ** Hook
    const theme = useTheme() as ThemeOptions
  
    const options: ApexOptions = {
      chart: {
        parentHeightOffset: 0,
        toolbar: { show: false }
      },
      plotOptions: {
        bar: {
          borderRadius: 9,
          distributed: true,
          columnWidth: '40%',
       
          
        }
      },
      stroke: {
        width: 2,
        colors: [theme.palette.background.alt]
      },
      legend: { show: false },
      grid: {
        strokeDashArray: 7,
        padding: {
          top: -1,
          right: 0,
          left: -12,
          bottom: 5
        }
      },
      dataLabels: { enabled: false },
      colors: [
        theme.palette.secondary[700],
        theme.palette.secondary[700],
        theme.palette.secondary[700],
        theme.palette.secondary[500],
        theme.palette.secondary[700],
        theme.palette.secondary[700],
      ],
      states: {
        hover: {
          filter: { type: 'none' }
        },
        active: {
          filter: { type: 'none' }
        }
      },
      xaxis: {
        categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        tickPlacement: 'on',
        labels: { show: false },
        axisTicks: { show: false },
        axisBorder: { show: false }
      },
      yaxis: {
        show: true,
        tickAmount: 4,
        labels: {
          offsetX: -17,
          formatter: value => `${value > 999 ? `${(value / 1000).toFixed(0)}` : value}k`
        }
      }
    }
  
    return (
      <Card sx={{
        backgroundColor:theme.palette.background.alt
      
      }}>
        <CardHeader
          title='Weekly Overview'
          titleTypographyProps={{
            sx: { lineHeight: '2rem !important', letterSpacing: '0.15px !important' }
          }}
          action={
            <IconButton size='small' aria-label='settings' className='card-more-options' sx={{ color: 'text.secondary' }}>
              <DotsVertical />
            </IconButton>
          }
        />
        <CardContent sx={{ '& .apexcharts-xcrosshairs.apexcharts-active': { opacity: 0 } }}>
          <ReactApexChart type='bar' height={205} options={options} series={[{ data: [37, 57, 45, 75, 57, 40, 65] }]} />
          <Box sx={{ mb: 7, display: 'flex', alignItems: 'center' }}>
            <Typography variant='h5' sx={{ mr: 4 }}>
              45%
            </Typography>
            <Typography variant='body2'>Your sales performance is 45% 😎 better compared to last month</Typography>
          </Box>
          <Button fullWidth variant='contained' sx={{backgroundColor:theme.palette.neutral[500],color:theme.palette.primary[500]}}>
            Details
          </Button>
        </CardContent>
      </Card>
    )
  }
  
  export default WeeklyOverview
  