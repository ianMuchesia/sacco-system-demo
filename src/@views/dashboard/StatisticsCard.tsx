import { ReactElement } from "react"
import { ThemeColor, ThemeOptions } from "../../@types"
import { TrendingUp } from "@mui/icons-material"
import { AccountOutline, CellphoneLink, CurrencyUsd, DotsVertical } from "mdi-material-ui"
import { Avatar, Box, Card, CardContent, CardHeader, Grid, IconButton, Typography, useTheme } from "@mui/material"


interface DataType {
    stats: string
    title: string
    color: ThemeColor
    icon: ReactElement
  }
  
  const salesData: DataType[] = [
    {
      stats: '245',
      title: 'Members',
      color: 'secondary',
      icon: <TrendingUp sx={{ fontSize: '1.75rem' }} />
    },
    {
      stats: '12.5k',
      title: 'Transactions',
      color: 'success',
      icon: <AccountOutline sx={{ fontSize: '1.75rem' }} />
    },
    {
      stats: '154',
      color: 'warning',
      title: 'Vehicles',
      icon: <CellphoneLink sx={{ fontSize: '1.75rem' }} />
    },
    {
      stats: '$88k',
      color: 'info',
      title: 'Revenue',
      icon: <CurrencyUsd sx={{ fontSize: '1.75rem' }} />
    }
  ]
  
  const renderStats = () => {


    return salesData.map((item: DataType, index: number) => (
      <Grid item xs={12} sm={3} key={index}>
        <Box key={index} sx={{ display: 'flex', alignItems: 'center',}}>
          <Avatar
            variant='rounded'
            sx={{
              mr: 3,
              width: 44,
              height: 44,
              boxShadow: 3,
              color: 'common.white',
              backgroundColor: `${item.color}.main`
            }}
          >
            {item.icon}
          </Avatar>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant='caption'>{item.title}</Typography>
            <Typography variant='h6'>{item.stats}</Typography>
          </Box>
        </Box>
      </Grid>
    ))
  }
  
  const StatisticsCard = () => {
    const theme = useTheme() as ThemeOptions

    return (
      <Card sx={{backgroundColor:theme.palette.background.alt }}>
        <CardHeader
          title='Statistics Card'
          action={
            <IconButton size='small' aria-label='settings' className='card-more-options' sx={{ color: 'text.secondary' }}>
              <DotsVertical />
            </IconButton>
          }
          subheader={
            <Typography variant='body2'>
              <Box component='span' sx={{ fontWeight: 600, color: 'text.primary' }}>
                Total 48.5% growth
              </Box>{' '}
              😎 this month
            </Typography>
          }
          titleTypographyProps={{
            sx: {
              mb: 2.5,
              lineHeight: '2rem !important',
              letterSpacing: '0.15px !important'
            }
          }}
        />
        <CardContent sx={{ pt: theme => `${theme.spacing(3)} !important` }}>
          <Grid container spacing={[5, 0]}>
            {renderStats()}
          </Grid>
        </CardContent>
      </Card>
    )
  }
  
  export default StatisticsCard
  