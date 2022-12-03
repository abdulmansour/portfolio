import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { Typography, Grid } from "@mui/material";

export default function Projects() {
  return (
    <div>
      <Head>
        <title>Abdulrahim Mansour</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div id="page-container">
        <div id="content-wrap">
          <Header />
          <Grid container sx={{ padding: "20px" }}>
            <Grid item>
              <Typography variant="h5" noWrap component="div">
                Consulting Work - Driving School Platform
              </Typography>
              <img src="static/images/driving_school_sass.png" />
            </Grid>
            <Grid item>
              <Typography variant="h5" noWrap component="div">
                Consulting Work - Data Crawling Pipeline
              </Typography>
              <img src="static/images/data_pipeline.png" />
            </Grid>
          </Grid>
        </div>
        <Footer />
      </div>
    </div>
  );
}
