import { Container, Grid, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import { Moralis } from "moralis";
import { Link } from "react-router-dom";

export default function HealingNetwork() {
  const [users, setUsers] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const results = await Moralis.Cloud.run("getPractitioners", {});
      console.log(results);
      setUsers(results);
      for (let i = 0; i < results.length; i++) {
        //const object = results[i].attributes;
        const object = results[i];
        console.log(object);
      }
      setLoaded(true);
    };

    fetchData();
  }, []);

  const renderCards = () => {
    return (
      <>
        {users.map((p, id) => {
          return (
            <Grid item xs={6} md={4} lg={3} key={id}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={p.avatarFile._url}
                  alt={p.avatarFile._name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {p.username}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {p.about}
                  </Typography>
                  <Typography variant="body3" color="text.secondary">
                    Remote
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link to={`/practitioner/${p.username}`}>
                    <Button size="small">Profile</Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </>
    );
  };

  return (
    <div>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <div className="headingText">
              <Typography variant="h3" sx={{ mt: 5, color: "#ffffff" }}>
                <div className="search">
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    fullWidth
                    label="Search"
                  />
                </div>
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className="headingText">
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image="/static/images/cards/contemplative-reptile.jpg"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Becky G
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Becky G is a tarot reader with over 25 years of experience
                    she is a friendly person...
                  </Typography>
                  <Typography variant="body3" color="text.secondary">
                    Remote
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Profile</Button>
                </CardActions>
              </Card>
            </div>
          </Grid>
          {loaded ? renderCards() : "NOT LOADED"}
        </Grid>
      </Container>
    </div>
  );
}
