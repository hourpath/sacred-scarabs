import { Container, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function HealingNetwork() {
  return (
    <div>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <div className="headingText">
              <Typography variant="h3" sx={{ mt: 5, color: "#ffffff" }}>
                Sacred Scarabs Healing Network Dashboard (COMING SOON!)
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className="headingText">
              <Typography sx={{ mt: 5, fontSize: 20, color: "#ffffff" }}>
                The Sacred Scarabs Healing Network will allow users worldwide to
                locate Wellness Coaches, Plant Medicine Shamans, Reiki and
                Bodywork Healers, Kambo Practitioners, Psychics and many other
                healers, either locally or remotely.
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
