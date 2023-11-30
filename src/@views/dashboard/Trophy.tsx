import { Button, Card, CardContent,  Typography, styled } from '@mui/material'

import { useAppSelector } from '../../store/hooks'
import { trianlelightpng, trianlgedarkpng, trophypng } from '../../environments/assets/images/misc'


// Styled component for the triangle shaped background image
const TriangleImg = styled('img')({
    right: 0,
    bottom: 0,
    height: 170,
    position: 'absolute'
  })
  
  // Styled component for the trophy image
  const TrophyImg = styled('img')({
    right: 36,
    bottom: 20,
    height: 98,
    position: 'absolute'
  })

  
const Trophy = () => {

  
    const mode = useAppSelector(state=>state.mode.mode)
    const imageSrc = mode === 'light' ? trianlelightpng : trianlgedarkpng
  
  return (
    <Card sx={{ position: 'relative' }}>
    <CardContent>
      <Typography variant='h6'>Congrats to John Doe! 🥳</Typography>
      <Typography variant='body2' sx={{ letterSpacing: '0.25px' }}>
        He is one of our most loyal customers. He has spent Ksh. 42.8k in the last
      </Typography>
      <Typography variant='h4' sx={{ my: 4, color: 'primary.main[200]' }}>
        Ksh 42.8k
      </Typography>
      <Button size='small' variant='contained'>
        View Sales
      </Button>
      <TriangleImg alt='triangle background' src={`${imageSrc}`} />
      <TrophyImg alt='trophy' src={trophypng} />
    </CardContent>
  </Card>
  )
}

export default Trophy