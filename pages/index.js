import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { Avatar, Container, Divider, Grid, Typography } from '@mui/material'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Abdulrahim Mansour</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header/>
        <Grid container direction="column" alignItems="center" justifyContent="flexStart">
          <Grid item>
            <Avatar
              alt="Abdulrahim Mansour"
              src="/static/images/portrait.jpg"
              sx={{ marginY:"10px", width: 250, height: 250 }}
            />
          </Grid>
          <Grid item>
            <Typography variant='h4'>Abdulrahim Mansour</Typography>
          </Grid>
          <Grid item>
            <Typography 
              variant='p'
              color='text.secondary'
              sx={{fontSize: "16px"}}
            >
              Full-Stack Web Developer
            </Typography>
            
          </Grid>
          <Grid item alignItems="flexStart" justifyContent="center">
            <Divider sx={{marginY:"20px"}}/>
            <Container maxWidth="sm">
              <Typography variant='h5'>About me</Typography>
              <Typography variant='p'>
                Developed enterprise search pages using the Coveo Javascript Search Framework (JSUI) in order to accomplish customer requirements based on designed architecture
              </Typography>
            </Container>
          </Grid>
        </Grid>
      </main>

      <Footer />
    </div>
  )
}
