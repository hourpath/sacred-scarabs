import { Container, Grid } from "@mui/material";
import sacredSpider from "../assets/SacredSpider599.png";
import sacredSnake from "../assets/SacredSnake164.png";
import scarabLogo from "../assets/scarab-logo.png";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

const Item = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Dashboard() {
  return (
    <div>
      <Container>
        <Grid container>
          <Typography variant="h2" sx={{ color: "#ffffff" }}>
            The Sacred Collections Minting Dashboard (COMING SOON!)
          </Typography>
        </Grid>
        <Grid container xs={12} sx={{ mt: 5 }}>
          <Stack direction="row" spacing={2}>
            <Item>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="300"
                    image={sacredSpider}
                    alt="Sacred Spider #599"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Sacred Spiders NFT Collection
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Own 1 of 10,000 Sacred Spiders
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    MINT
                  </Button>
                </CardActions>
              </Card>
            </Item>
            <Item>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="300"
                    image={scarabLogo}
                    alt="Sacred Scarab #432"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Sacred Scarabs NFT Collection
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Own 1 of 5,000 Sacred Scarabs and gain access to the
                      healers network
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    MINT
                  </Button>
                </CardActions>
              </Card>
            </Item>
            <Item>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="300"
                    image={sacredSnake}
                    alt="Sacred Snake #164"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Sacred Snakes NFT Collection
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Own 1 of 500 Sacred Snakes
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    MINT
                  </Button>
                </CardActions>
              </Card>
            </Item>
          </Stack>
        </Grid>
      </Container>
    </div>
  );
}
