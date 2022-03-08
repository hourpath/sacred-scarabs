import { Container, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useMoralis } from "react-moralis";
import { useState, useEffect } from "react";
import { Moralis } from "moralis";
import Switch from '@mui/material/Switch';

export default function Profile() {
  const { user, setUserData } = useMoralis();
  const [email, setEmail] = useState("");
  const [avatarFile, setAvatarFile] = useState("");
  const [username, setUserName] = useState("");
  const [showAddress, setShowAddress] = useState(false);

  useEffect(() => {
  
    if (user) {
      setUserName(user.attributes.username);
      const userEmail = user.get("email");
      if (userEmail) {
        setEmail(userEmail);
      }
      const userAvatar = user?.attributes?.avatar?._url;
      if (userAvatar) {
        setAvatarFile(userAvatar);
      }
      console.log(user?.attributes)
      const showAddressIn = user?.attributes.showAddress;
      if(showAddressIn){
        console.log(showAddressIn);
        setShowAddress(showAddressIn);
      }
    }
  }, [user]);

  if (!user) {
    //REDIRECT TO HOME?
    return <h1>Please login</h1>;
  }

  const handleToggle = () => {
    setShowAddress(!showAddress)
  }

  const handleSave = () => {
    const profilePic = new Moralis.File(avatarFile.name, avatarFile);

    setUserData({
      email: email,
      avatarFile: profilePic,
      username: username,
      showAddress: showAddress
    });
  };

  return (
    <div>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <div className="headingText">
              <Typography variant="h2" sx={{ color: "#ffffff" }}>
                Sacred Scarabs Profile Dashboard (COMING SOON!)
              </Typography>
            </div>
            {user && (
              <div>
                <h1>Welcome user {username}</h1>
                <div>
                  <label htmlFor="fileAvatar">Select Avatar</label>
                  <input
                    type="file"
                    id="fileAvatar"
                    defaultValue=""
                    onChange={(e) => setAvatarFile(e.target.files[0])}
                  ></input>
                  <img
                    src={user?.attributes.avatarFile._url}
                    style={{ width: "200px", height: "200px" }}
                  ></img>
                </div>
                <label htmlFor="username">
                  UserName:
                  <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUserName(e.currentTarget.value)}
                  ></input>
                </label>

                <label htmlFor="email">
                  Email:
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.currentTarget.value)}
                  ></input>
                </label>
                <button onClick={handleSave}>Save</button>

                <Switch
                  checked={showAddress}
                  onChange={handleToggle}
                  inputProps={{ 'aria-label': 'controlled' }}
                    />
              </div>
            )}
            {user  && showAddress && (
              <div>
                {/* <form>
                  <input>ABC ETC</input>
                
                </form> */}
                Show address form
              </div>
            )}
          </Grid>
        </Grid>
      </Container>
    </div>
  );


}

