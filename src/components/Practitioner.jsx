import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Moralis } from "moralis";
import { useMoralis } from "react-moralis";
import { Grid } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import BasicTabs from "./BasicTabs";

export default function HealingNetwork() {
  let { username } = useParams();

  const [user, setUser] = useState();
  const [loaded, setLoaded] = useState(false);
  const { isInitialized } = useMoralis();

  const renderServices = () => {
    if (user.services) {
      console.log(user.services);
      return user.services.map((s) => {
        return (
          <div key={s.id}>
            {s.name}:{s.description}
            <br></br>
            Price:{s.price}
          </div>
        );
      });
    } else {
      return <h1>No services</h1>;
    }
  };

  useEffect(() => {
    if (isInitialized) {
      const queryParams = { username: username };
      const fetchData = async () => {
        const results = await Moralis.Cloud.run("getPractitioner", queryParams);
        setUser(results);
        setLoaded(true);
      };

      fetchData();
    }
  }, [username, isInitialized]);

  return (
    <div>
      {loaded && user ? (
        <div>
          <Grid item xs={12}>
            <Card sx={{ border: "5px red", height: "45vh" }}>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item xs={4}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={user.avatarFile._url}
                    alt={user.avatarFile._name}
                  />
                </Grid>
              </Grid>
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item xs={12}>
                  <h1>{user.username}</h1>
                </Grid>
                <Grid item xs={12}>
                  {user.about}
                </Grid>
                <Grid item xs={12}>
                  {" "}
                  <a
                    href={user.websiteURL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {user.websiteURL}
                  </a>
                </Grid>
                <Grid item xs={12}>
                  <FacebookIcon />
                  <YouTubeIcon />
                  <InstagramIcon />
                  <TwitterIcon />
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid container>{<BasicTabs />}</Grid>
          <Grid>
            <Grid item xs={12}>
              Item
            </Grid>
            <Card>
              <Grid container>
                <Grid item xs={3}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={user.avatarFile._url}
                    alt={user.avatarFile._name}
                  />
                  EXAMPLE SERVICE
                </Grid>
              </Grid>
              <Grid item xs={9}>
                ABOUT SERVICE
              </Grid>
            </Card>
          </Grid>
          <p>{user.services?.length}</p>
          <p>{user.email}</p>

          {renderServices()}
        </div>
      ) : (
        "NOT LOADED"
      )}
    </div>
  );
}
