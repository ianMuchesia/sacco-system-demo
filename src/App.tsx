
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
  element={<Navigate to="/dashboard" replace />}
/>
<Route path="/dashboard" element={<Dashboard />} />

</Route>
       </Routes>
        </ThemeProvider>
      </BrowserRouter>

    </div>
  )
}

export default App
