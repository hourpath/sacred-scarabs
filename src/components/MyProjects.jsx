import { Container, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function MyProjects() {
  return (
    <div>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <div className="headingText">
              <Typography variant="h3" sx={{ mt: 5, color: "#ffffff" }}>
                Sacred Scarabs Project Dashboard (COMING SOON!)
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className="headingText">
              <Typography sx={{ mt: 5, fontSize: 20, color: "#ffffff" }}>
                The Sacred Scarabs project dashboard will be where users share
                their stories about what they are actively building or growing.
              </Typography>
              <Typography sx={{ fontSize: 20, color: "#ffffff" }}>
                The idea is to organically grow a community of supportive
                members who believe in the visions of others. Projects will have
                the ability to be single phase funded or multiple phases where
                you share your journey!
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
