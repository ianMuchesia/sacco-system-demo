
//react imports
import { useMemo } from 'react'

//components import
import Dashboard from './scenes/dashboard'
import Layout from './layout'

//router imports
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

//material ui imports
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'


//redux imports
import { themeSettings } from './environments'
import { useAppSelector } from './store/hooks'
import Members from './scenes/members'
import Drivers from './scenes/drivers'
import Transactions from './scenes/Transactions'
import Vehicles from './scenes/vehicles'
import AddMember from './scenes/add-member'
import AddPayment from './scenes/add-payment'



function App() {

  const mode = useAppSelector(state => state.mode.mode)

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])


  return (
    <div className='app'>
      <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
       <Routes>
       <Route element={<Layout />}>

<Route
  path="/"
  element={<Navigate to="/viewdashboard" replace />}
/>
<Route path="/viewdashboard" element={<Dashboard />} />
<Route path="/viewmembers" element={<Members  />} />
<Route path='/viewvehicles' element={<Vehicles/>}/>
<Route path='/viewdrivers' element={<Drivers/>}/>
<Route path="/viewtransactions" element={<Transactions />} />
<Route path="*" element={<Navigate to="/viewdashboard" replace />} />
<Route path="/register" element={<AddMember/>}/>
<Route path='/payment' element={<AddPayment/>}/>
</Route>
       </Routes>
        </ThemeProvider>
      </BrowserRouter>

    </div>
  )
}

export default App
