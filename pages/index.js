import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { Avatar, Container, Divider, Grid, Typography, List, ListItem, ListItemAvatar, Button, Link } from '@mui/material'

export default function Home() {
  return (
    <div>
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
          <Grid item sx={{mb:"20px"}}>
            <Typography 
              variant='p'
              color='text.secondary'
              sx={{fontSize: "16px",}}
            >
              Full-Stack Web Developer
            </Typography>
            
          </Grid>
          <Grid item alignItems="flexStart" justifyContent="center">
            <Divider sx={{mb:"20px"}}/>
            <Container maxWidth="sm">
              <Typography variant='h5'>About me</Typography>

              <List>
                <ListItem>
                  <ListItemAvatar>
                  <Avatar
                    alt="Concordia"
                    src="/static/images/concordia.png"
                    sx={{ marginY:"10px", width: 35, height: 35 }}
                  />
                  </ListItemAvatar>
                  <p>Graduated from Concordia University with a <b>Bachelors in Computer Engineering</b> in the Fall of 2020</p>
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                  <Avatar
                    alt="Coveo"
                    src="/static/images/coveo.png"
                    sx={{ marginY:"10px", width: 35, height: 35 }}
                  />
                  </ListItemAvatar>
                  <p>Worked as a <b>Web Developer</b> for Coveo building enterprise search interfaces and integrating the Coveo solution accross a plethora of tech stacks, ranging from custom e-commerce websites to salesforce agent panels and communities</p>
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                  <Avatar
                    alt="CGI"
                    src="/static/images/cgi.png"
                    sx={{ marginY:"10px", width: 35, height: 35 }}
                  />
                  </ListItemAvatar>
                  <p>Worked as a <b>Cloud Data Engineer</b> for Bell contributing to the design and implementation of multiple on-prem ETL pipelines, which fed graph data to customer facing RestAPIs deployed on Openshift accross 3 environments</p>
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                  <Avatar
                    alt="Digital Nomad"
                    src="/static/images/goal.png"
                    sx={{ marginY:"10px", width: 35, height: 35 }}
                  />
                  </ListItemAvatar>
                  <p>Aspiring to become a proficient Full Stack Web Developer and to live a <b>Digital Nomad</b> lifestyle</p>
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                  <Avatar
                    alt="Jiu-Jitsu"
                    src="/static/images/black-belt.png"
                    sx={{ marginY:"10px", width: 35, height: 35 }}
                  />
                  </ListItemAvatar>
                  <p>Training and competing in the martial art of <b>Jiu-Jitsu</b> for the past 7 years</p>
                </ListItem>
              </List>
            </Container>
          </Grid>
          <Grid item sx={{mb:"20px"}}>
            <Link href='static/pdf/cv.pdf' download>
              <Button
                sx={{ my: 2, backgroundColor: "primary.main", color: 'white', display: 'block', '&:hover': { backgroundColor: "primary.light"} }}
              >
                Resume
              </Button>
            </Link>
          </Grid>
        </Grid>
      </main>

      <Footer />
    </div>
  )
}
