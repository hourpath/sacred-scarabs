import { Container, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function MyProjects() {
  return (
    <div>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <div className="headingText">
              <Typography variant="h2" sx={{ color: "#ffffff" }}>
                The Sacred Collections Staking Dashboard (COMING SOON!)
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
