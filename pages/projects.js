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
                Amazon Seller Dashboard
              </Typography>
              <img src="static/images/amzseller.png" width="1300px" />
            </Grid>
            <Grid item>
              <Typography variant="h5" noWrap component="div">
                Data Crawling Pipeline
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
