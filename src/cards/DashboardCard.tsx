import { Avatar, Box, Card, CardContent, IconButton, Typography, useTheme } from "@mui/material";
import { CardStatsVerticalProps, ThemeOptions } from "../@types";
import { DotsVertical } from "mdi-material-ui";

const DashboardCard = (props: CardStatsVerticalProps) => {
    const { title, subtitle, color, icon, stats, trend, trendNumber } = props

    const theme = useTheme() as ThemeOptions;

    return (
        <Card sx={{backgroundColor: theme.palette.background.alt,}}>
            <CardContent>
            <Box sx={{ display: 'flex', marginBottom: 5.5, alignItems: 'flex-start', justifyContent: 'space-between'  }}>
          <Avatar sx={{ boxShadow: 3, marginRight: 4, color: 'common.white', backgroundColor: `${color}.main`}}>
            {icon}
          </Avatar>
          <IconButton size='small' aria-label='settings' className='card-more-options' sx={{ color: theme.palette.secondary[200]
            } }>
            <DotsVertical />
          </IconButton>
        </Box>
        <Typography sx={{ fontWeight: 600, fontSize: '0.875rem',color: theme.palette.secondary[200] }}>{title}</Typography>
        <Box sx={{ marginTop: 1.5, display: 'flex', flexWrap: 'wrap', marginBottom: 1.5, alignItems: 'flex-start' }}>
          <Typography variant='h3' sx={{ mr: 2 }}>
            {stats}
          </Typography>
          <Typography
            component='sup'
            variant='caption'
            sx={{ color: trend === 'positive' ? 'success.main' : 'error.main' }}
          >
            {trendNumber}
          </Typography>
        </Box>
        <Typography variant='caption'>{subtitle}</Typography>

            </CardContent>

        </Card>
    )
}

export default DashboardCard