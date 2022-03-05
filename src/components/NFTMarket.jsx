import { Container, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function NFTMarket() {
  return (
    <div>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <div className="headingText">
              <Typography variant="h3" sx={{ mt: 5, color: "#ffffff" }}>
                Sacred Scarabs NFT Market (COMING SOON!)
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className="headingText">
              <Typography sx={{ mt: 5, fontSize: 20, color: "#ffffff" }}>
                The Sacred Scarabs NFT Market will allow users to list and trade their Sacred Collection NFTs as well as NFTs from other collections. We hope to see some of your creations on our marketplace very soon!
                </Typography>
                <Typography sx={{ mt: 2, fontSize: 20, color: "#ffffff" }}>
                Additional integrations with external marketplaces will include Opensea and others in the future.
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
