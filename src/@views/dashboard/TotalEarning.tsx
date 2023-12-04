import { Avatar, Box, Card, CardContent, CardHeader, IconButton, LinearProgress, Typography } from "@mui/material"
import { ThemeColor, ThemeOptions } from "../../@types"
import { DotsVertical, MenuUp } from "mdi-material-ui"
import { logoaviator, logobit, logozip } from "../../environments/assets/images/cards"
import { useTheme } from "@emotion/react"


interface DataType {
    title: string
    imgSrc: string
    amount: string
    subtitle: string
    progress: number
    color: ThemeColor
    imgHeight: number
  }
  
  const data: DataType[] = [
    {
      progress: 75,
      imgHeight: 20,
      title: 'Zipcar',
      color: 'success',
      amount: 'Ksh.24,895.65',
      subtitle: 'Typescript, React & Material UI',
      imgSrc: logozip
    },
    {
      progress: 50,
      color: 'info',
      imgHeight: 27,
      title: 'Bitbank',
      amount: 'Ksh.8,650.20',
      subtitle: 'Node js, Express & PostgreSQL',
      imgSrc:logobit
    },
    {
      progress: 20,
      imgHeight: 20,
      title: 'Aviato',
      color: 'secondary',
      amount: 'Ksh. 1,245.80',
      subtitle: 'Render, Vercel & Railway',
      imgSrc: logoaviator
    }
  ]
  
  const TotalEarning = () => {

    const theme = useTheme() as ThemeOptions
    return (
      <Card sx={{background:theme.palette.background.alt}}>
        <CardHeader
          title='Total Earning'
          titleTypographyProps={{ sx: { lineHeight: '1.6 !important', letterSpacing: '0.15px !important' } }}
          action={
            <IconButton size='small' aria-label='settings' className='card-more-options' sx={{ color: 'text.secondary' }}>
              <DotsVertical />
            </IconButton>
          }
        />
        <CardContent sx={{ pt: theme => `${theme.spacing(2.25)} !important` }}>
          <Box sx={{ mb: 1.5, display: 'flex', alignItems: 'center' }}>
            <Typography variant='h4' sx={{ fontWeight: 600, fontSize: '2.125rem !important' }}>
              Ksh. 24,895
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', color: 'success.main' }}>
              <MenuUp sx={{ fontSize: '1.875rem', verticalAlign: 'middle' }} />
              <Typography variant='body2' sx={{ fontWeight: 600, color: 'success.main' }}>
                10%
              </Typography>
            </Box>
          </Box>
  
          <Typography component='p' variant='caption' sx={{ mb: 10 }}>
            Compared to Ksh. 84,325 last year
          </Typography>
  
          {data.map((item: DataType, index: number) => {
            return (
              <Box
                key={item.title}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  ...(index !== data.length - 1 ? { mb: 8.5 } : {})
                }}
              >
                <Avatar
                  variant='rounded'
                  sx={{
                    mr: 3,
                    width: 40,
                    height: 40,
                    backgroundColor: theme => `rgba(${theme.palette.primary.main[200]}, 0.04)`
                  }}
                >
                  <img src={item.imgSrc} alt={item.title} height={item.imgHeight} />
                </Avatar>
                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <Box sx={{ marginRight: 2, display: 'flex', flexDirection: 'column' }}>
                    <Typography variant='body2' sx={{ mb: 0.5, fontWeight: 600, color: 'text.primary' }}>
                      {item.title}
                    </Typography>
                    <Typography variant='caption'>{item.subtitle}</Typography>
                  </Box>
  
                  <Box sx={{ minWidth: 85, display: 'flex', flexDirection: 'column' }}>
                    <Typography variant='body2' sx={{ mb: 2, fontWeight: 600, color: 'text.primary' }}>
                      {item.amount}
                    </Typography>
                    <LinearProgress color={item.color} value={item.progress} variant='determinate' />
                  </Box>
                </Box>
              </Box>
            )
          })}
        </CardContent>
      </Card>
    )
  }
  
  export default TotalEarning
  