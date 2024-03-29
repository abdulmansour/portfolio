import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import {
  Avatar,
  Container,
  Divider,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Button,
  Link,
} from "@mui/material";

const openInNewTab = (url) => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};

export default function Home() {
  return (
    <div>
      <Head>
        <title>Abdulrahim Mansour</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div id="page-container">
        <div id="content-wrap">
          <Header />
          <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="flexStart"
          >
            <Grid item>
              <Avatar
                alt="Abdulrahim Mansour"
                src="/static/images/portrait.jpg"
                sx={{ marginY: "10px", width: 250, height: 250 }}
              />
            </Grid>
            <Grid item>
              <Typography variant="h4">Abdulrahim Mansour</Typography>
            </Grid>
            <Grid item sx={{ mb: "20px" }}>
              <Typography
                variant="p"
                color="text.secondary"
                sx={{ fontSize: "16px" }}
              >
                Full Stack Engineer
              </Typography>
            </Grid>
            <Grid item alignItems="flexStart" justifyContent="center">
              <Divider sx={{ mb: "20px" }} />
              <Container maxWidth="sm">
                <Typography variant="h5">About me</Typography>

                <List>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar
                        alt="CGI"
                        src="/static/images/cgi.png"
                        sx={{ marginY: "10px", width: 35, height: 35 }}
                      />
                    </ListItemAvatar>
                    <p>
                      Working remotely as a <b>Full Stack Engineer</b> for Bell,
                      contibuting to the enrichment of a PWA with React,
                      Typescript, NodeJs and Spring boot
                    </p>
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar
                        alt="Qualgo"
                        src="/static/images/qualgo.png"
                        sx={{
                          marginY: "10px",
                          width: 35,
                          height: 35,
                          ":hover": { cursor: "pointer" },
                        }}
                        onClick={() => openInNewTab("https://www.qualgo.io")}
                      />
                    </ListItemAvatar>
                    <p>
                      Co-founded a software consulting company. Together with my
                      team, we help clients thrive and solve their complex
                      problems.
                    </p>
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar
                        alt="Coveo"
                        src="/static/images/coveo.png"
                        sx={{ marginY: "10px", width: 35, height: 35 }}
                      />
                    </ListItemAvatar>
                    <p>
                      Worked as a <b>Software Engineer</b> integrating the Coveo
                      solution accross a plethora of tech stacks, ranging from
                      e-commerce websites, to salesforce lightning communities,
                      to custom Typescript and React applications
                    </p>
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar
                        alt="Concordia"
                        src="/static/images/concordia.png"
                        sx={{ marginY: "10px", width: 35, height: 35 }}
                      />
                    </ListItemAvatar>
                    <p>
                      Graduated from Concordia University with a{" "}
                      <b>Bachelors in Computer Engineering</b> in the Fall of
                      2020
                    </p>
                  </ListItem>
                </List>
                <Typography variant="h5">Passions</Typography>
                <List>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar
                        alt="Amazon Seller"
                        src="/static/images/amz_seller.png"
                        sx={{
                          marginY: "10px",
                          width: 35,
                          height: 35,
                          ":hover": { cursor: "pointer" },
                        }}
                        onClick={() =>
                          openInNewTab(
                            "https://www.amazon.ca/stores/Krenzo/Homepage/page/7DEBE880-E96B-4B9A-B8F3-BEE97BEA6351"
                          )
                        }
                      />
                    </ListItemAvatar>
                    <p>
                      Created and growing a six-figure e-commerce business
                      selling primarly on amazon
                    </p>
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar
                        alt="Digital Nomad"
                        src="/static/images/gcp.png"
                        sx={{
                          marginY: "10px",
                          width: 35,
                          height: 35,
                          ":hover": { cursor: "pointer" },
                        }}
                        onClick={() =>
                          openInNewTab(
                            "https://www.credential.net/6a53eb88-6fb5-4985-b1df-117c480d6b22?key=fa8db3d4e5e7bb7ea7d4cd0c81200fd67f1a866b9f91a4d9898351620f9a881e"
                          )
                        }
                      />
                    </ListItemAvatar>
                    <p>
                      Completed <b>Associate Cloud Engineer</b> (ACE) and
                      completing <b>Proffesional Cloud Architect</b> (PCA)
                      certifications
                    </p>
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar
                        alt="Digital Nomad"
                        src="/static/images/goal.png"
                        sx={{ marginY: "10px", width: 35, height: 35 }}
                      />
                    </ListItemAvatar>
                    <p>
                      Aspiring to become a proficient <b>Full Stack Engineer</b>{" "}
                      and to live a <b>digital nomad</b> lifestyle
                    </p>
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar
                        alt="Jiu-Jitsu"
                        src="/static/images/black-belt.png"
                        sx={{ marginY: "10px", width: 35, height: 35 }}
                      />
                    </ListItemAvatar>
                    <p>
                      Training and competing in the martial art of{" "}
                      <b>jiu-jitsu</b> for the past 7 years
                    </p>
                  </ListItem>
                </List>
              </Container>
            </Grid>
            <Grid item sx={{ mb: "20px" }}>
              <Link href="static/pdf/cv.pdf" download>
                <Button
                  sx={{
                    my: 2,
                    backgroundColor: "primary.main",
                    color: "white",
                    display: "block",
                    "&:hover": { backgroundColor: "primary.light" },
                  }}
                >
                  Resume
                </Button>
              </Link>
            </Grid>
          </Grid>
        </div>
        <Footer />
      </div>
    </div>
  );
}
