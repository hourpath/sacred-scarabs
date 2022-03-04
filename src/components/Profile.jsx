import { Container, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function Profile() {
  return (
    <div>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <div className="headingText">
              <Typography variant="h2" sx={{ color: "#ffffff" }}>
                Sacred Scarabs Profile Dashboard (COMING SOON!)
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
