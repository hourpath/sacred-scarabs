import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Moralis } from "moralis";
import { useMoralis } from "react-moralis";
import { Grid } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import BasicTabs from "./BasicTabs";
import Avatar from "@mui/material/Avatar";
import { Icon } from "@iconify/react";

export default function HealingNetwork() {
  let { username } = useParams();

  const [user, setUser] = useState();
  const [loaded, setLoaded] = useState(false);
  const { isInitialized } = useMoralis();

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
                {user?.websiteURL && (
                  <a
                    href={user.websiteURL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {user.websiteURL}
                  </a>
                )}
              </Grid>
              <Grid item xs={12}>
                {user?.facebookURL && (
                  <a
                    href={user.facebookURL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FacebookIcon />
                  </a>
                )}

                {user?.youtubeURL && (
                  <a
                    href={user.youtubeURL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <YouTubeIcon />
                  </a>
                )}

                {user?.instagramURL && (
                  <a
                    href={user.instagramURL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <InstagramIcon />
                  </a>
                )}
                {user?.twitterURL && (
                  <a
                    href={user.twitterURL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TwitterIcon />
                  </a>
                )}
                {user?.tiktokURL && (
                  <a
                    href={user.tiktokURL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <Icon icon="simple-icons:tiktok" />
                  </a>
                )}
              </Grid>
            </Grid>
          </Grid>

          <Grid
            container
            item
            xs={12}
            direction="row"
            style={{ marginBottom: "5px" }}
          >
            {<BasicTabs user={user} />}
          </Grid>

          <Grid
            container
            item
            xs={12}
            direction="row"
            style={{ marginBottom: "5px" }}
          ></Grid>
          {/* {renderServices()} */}
        </div>
      ) : (
        "NOT LOADED"
      )}
    </div>
  );
}
