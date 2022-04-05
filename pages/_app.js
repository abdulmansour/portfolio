import '@styles/globals.css'
import {createTheme, ThemeProvider} from '@mui/material'

const theme = createTheme({
  palette: {
    primary: {
      main: "#122620"
    }
  }
})

function Application({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default Application
