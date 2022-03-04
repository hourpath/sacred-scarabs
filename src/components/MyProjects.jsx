import { Container, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

export default function MyProjects() {
  return (
    <div>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <div className="headingText">
              <Typography variant="h2" sx={{ color: "#ffffff" }}>
                Sacred Scarabs Project Dashboard (COMING SOON!)
              </Typography>
            </div>
          </Grid>
          <Paper elevation={2}></Paper>
        </Grid>
      </Container>
    </div>
  );
}
