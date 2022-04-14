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
import Avatar from "@mui/material/Avatar";

export default function HealingNetwork() {
  let { username } = useParams();

  const [user, setUser] = useState();
  const [loaded, setLoaded] = useState(false);
  const { isInitialized } = useMoralis();

  // const renderServices = () => {
  //   if (user.services) {
  //     console.log(user.services);
  //     return user.services.map((s) => {
  //       return (
  //         <div key={s.id}>
  //           {s.name}:{s.description}
  //           <br></br>
  //           Price:{s.price}
  //         </div>
  //       );
  //     });
  //   } else {
  //     return <h1>No services</h1>;
  //   }
  // };

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
          <Grid item xs={12} style={{ height: "40vh" }}>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={4} container justifyContent="center">
                <Avatar
                  src={user.avatarFile._url}
                  sx={{ width: "25vh", height: "25vh" }}
                ></Avatar>
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
                {user?.websiteURL && 
                <a
                  href={user.websiteURL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {user.websiteURL}
                </a>}
              </Grid>
              <Grid item xs={12}>
                {user?.facebookURL && 
                <a
                  href={user.facebookURL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FacebookIcon />
                </a>}
              
                {user?.youtubeURL && 
                <a
                  href={user.youtubeURL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <YouTubeIcon />
                </a>}

                {user?.instagramURL &&
                 <a
                  href={user.instagramURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                  <InstagramIcon />
                </a> }
                {user?.twitterURL && 
                <a
                  href={user.twitterURL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TwitterIcon />
                </a> }
                  {user?.tiktokURL &&
                <a
                  href={user.tiktokURL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  TikTOK
                </a>}
              </Grid>
            </Grid>
          </Grid>

          <Grid container>{<BasicTabs user={user} />}</Grid>

          <Grid
            container
            item
            xs={12}
            direction="row"
            style={{ marginBottom: "5px" }}
          >
            <Card>
              <Grid container direction="row">
                <Grid item xs={2}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={user.avatarFile._url}
                    alt={user.avatarFile._name}
                    style={{ padding: "5px", paddingRight: "10px" }}
                  />
                </Grid>
                <Grid item xs={10}>
                  <h1>TITLE</h1>
                  <h4>
                    Desciprrtion of sericces asjdfl; jsflsjd lkjfsdlsjd
                    Desciprrtion of sericces asjdfl; jsflsjd lkjfsdlsjd
                    Desciprrtion of sericces asjdfl; jsflsjd lkjfsdlsjd
                    Desciprrtion of sericces asjdfl; jsflsjd lkjfsdlsjd{" "}
                  </h4>
                  Price: 5$ - 5 eth - 200 SACRED SCARSB
                  <p>Reviews</p>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid
            item
            container
            xs={12}
            direction="row"
            style={{ marginBottom: "5px" }}
          >
            <Card>
              <Grid container direction="row">
                <Grid item xs={2}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={user.avatarFile._url}
                    alt={user.avatarFile._name}
                    style={{ padding: "5px", paddingRight: "10px" }}
                  />
                </Grid>
                <Grid item xs={10}>
                  <h1>TITLE</h1>
                  <h4>
                    Desciprrtion of sericces asjdfl; jsflsjd lkjfsdlsjd
                    Desciprrtion of sericces asjdfl; jsflsjd lkjfsdlsjd
                    Desciprrtion of sericces asjdfl; jsflsjd lkjfsdlsjd
                    Desciprrtion of sericces asjdfl; jsflsjd lkjfsdlsjd{" "}
                  </h4>
                  Price: 5$ - 5 eth - 200 SACRED SCARSB
                  <p>Reviews</p>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid
            container
            item
            xs={12}
            direction="row"
            style={{ marginBottom: "20px" }}
          >
            <Card>
              <Grid container direction="row">
                <Grid item xs={2}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={user.avatarFile._url}
                    alt={user.avatarFile._name}
                    style={{ padding: "5px", paddingRight: "10px" }}
                  />
                </Grid>
                <Grid item xs={10}>
                  <h1>TITLE</h1>
                  <h4>
                    Desciprrtion of sericces asjdfl; jsflsjd lkjfsdlsjd
                    Desciprrtion of sericces asjdfl; jsflsjd lkjfsdlsjd
                    Desciprrtion of sericces asjdfl; jsflsjd lkjfsdlsjd
                    Desciprrtion of sericces asjdfl; jsflsjd lkjfsdlsjd{" "}
                  </h4>
                  Price: 5$ - 5 eth - 200 SACRED SCARSB
                  <p>Reviews</p>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          {/* {renderServices()} */}
        </div>
      ) : (
        "NOT LOADED"
      )}
    </div>
  );
}
