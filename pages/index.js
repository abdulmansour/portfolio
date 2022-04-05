import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { Avatar, Container, Grid, Typography } from '@mui/material'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Abdulrahim Mansour</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header/>
        <Container>
          <Grid container rowSpacing={2} direction="column" alignItems="center" justifyContent="flexStart">
            <Grid item>
              <Avatar
                alt="Abdulrahim Mansour"
                src="/static/images/portrait.jpg"
                sx={{ mt:"10px", width: 250, height: 250 }}
              />
            </Grid>
            <Grid item>
              <Typography variant='h4'>Abdulrahim Mansour</Typography>
            </Grid>
            <Grid item>
              <Typography 
                variant='p'
                sx={{fontSize: ""}}
              >
                Full-Stack Software Developer
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </main>

      <Footer />
    </div>
  )
}
