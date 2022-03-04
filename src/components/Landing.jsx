import scarabLogo from "./scarab-logo.png";
import { Container, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";

const styles = {
  landingContainer: {
    paddingTop: "80px",
    background: "#3c6580",
  },
  logoBoxPadding: {
    paddingTop: "50px",
  },
  logoBackground: {
    height: "100%",
    width: "auto",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
  },
  scarabLogo: {
    width: "250px",
    height: "250px",
    borderRadius: "50%",
    boxShadow: "0px 10px 12px black",
  },
};

export default function Landing() {
  return (
    <div>
      <Container style={styles.landingContainer}>
        <Grid container>
          <Grid item xs={12} md={4} justifyContent="center" alignItems="center">
            <p className="logo-text">Sacred</p>
          </Grid>
          <Grid item xs={12} md={4} height="250px">
            <div style={styles.logoBackground}>
              <div style={styles.imageContainer}>
                <img
                  style={styles.scarabLogo}
                  src={scarabLogo}
                  alt="scarab-logo"
                />
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={4} justifyContent="center" alignItems="center">
            <p className="logo-text">Scarabs</p>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <div className="headingText">
              <Typography variant="h4" sx={{ color: "#ffffff" }}>
                The mission of the Sacred Scarabs NFT community and
                decentralized application is to provide crowd-funding to members
                who are actively working towards planetary healing.
              </Typography>
            </div>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <div className="subHeadingText">
              <Typography variant="h6" sx={{ color: "#ffffff" }}>
                {" "}
                View available NFTs available on{" "}
                <a href="https://opensea.io/collection/sacred-scarabs">
                  Opensea.io
                </a>
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
