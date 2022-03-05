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
                Sacred Scarabs NFT Staking (COMING SOON!)
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className="headingText">
              <Typography sx={{ mt: 5, fontSize: 20, color: "#ffffff" }}>
                The Sacred Scarabs NFT Staking dashboard will be where holders
                of the Sacred Collections accrue passive rewards as our internal
                token for participating in the community.
              </Typography>
              <Typography sx={{ mt: 2, fontSize: 20, color: "#ffffff" }}>
                Each of the available Sacred NFTs has measurable rarity which
                will allow us to assign additional rewards to the NFTs with the
                highest rarities.
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
