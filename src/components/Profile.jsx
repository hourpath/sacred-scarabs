import { Container, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useMoralis } from "react-moralis";
import { useState, useEffect } from "react";
  import { Moralis } from 'moralis';

export default function Profile() {
  const { user, setUserData } = useMoralis();
  const [email, setEmail] = useState("");
  const [avatarFile, setAvatarFile] = useState('');
  const [username, setUserName] = useState("");


  useEffect(()=>{
    if(user){
      setUserName(user.attributes.username)
      const userEmail = user.get('email');
      if(userEmail){
        setEmail(userEmail);
      }
      const userAvatar = user?.attributes?.avatar?._url;
          if(userAvatar) {
            setAvatarFile(userAvatar)
      }
    }
  },[user])

  if (!user) {
    //REDIRECT TO HOME?
    return <h1>Please login</h1>;
  }

  const handleSave = () => {
    const profilePic = new Moralis.File(avatarFile.name, avatarFile);
    setUserData({
      email: email,
      avatarFile: profilePic,
      username: username
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
            {user && (<div>
              <h1>Welcome user {username}</h1>
              <div>
              <label htmlFor="fileAvatar">Select Avatar</label>
              <input type="file" id="fileAvatar" defaultValue="" onChange={(e) => setAvatarFile(e.target.files[0])}></input>
              <img src= {user?.attributes.avatarFile._url} style={{width:'200px', height:'200px'}}></img>
              </div>
              <label htmlFor='username'>
                UserName:
                <input type='text' id='username' value={username} onChange={(e) => setUserName(e.currentTarget.value)}>
                </input>
              </label>
              
              <label htmlFor="email">Email:
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
              ></input>
              </label>
              <button onClick={handleSave}>Save</button>
            </div>)}
            
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
