import scarabLogo from "./scarab-logo.png";
import {
  Container,
  Grid
} from "@mui/material";

const styles = {
  logoContainer: {
    height: "900px",
    paddingBottom: "0px",
    marginTop: "80px"
  },
  logoBoxPadding: {
    paddingTop: "50px",
  },
  logoBackground: {
    height: '100%',
    width: "auto"
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center"
  },
  scarabLogo: {
    width:  "250px",
    height:  "250px",
    borderRadius: "50%",
    boxShadow: '0px 10px 12px black'
  }
};

export default function Landing() {
  return (
    <div>
      <Container style={styles.logoContainer}>
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
              <p>
                The mission of the Sacred Scarabs NFT community and decentralized
                application is to provide crowd-funding to members who are
                actively working towards planetary healing.
              </p>
            </div>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <div className="subHeadingText">
              <p>
                {" "}
                View available NFTs available on{" "}
                <a href="https://opensea.io/collection/sacred-scarabs">
                  Opensea.io
                </a>
              </p>
            </div>          
          </Grid>      
        </Grid>
      </Container>
    </div>
  );
}
