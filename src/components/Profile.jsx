import { Container, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useMoralis } from "react-moralis";
import { useState } from "react";


export default function Profile() {
  const {  user, setUserData } = useMoralis();
  console.log(user);
  const [email, setEmail] = useState(user.attributes.email);


  if(!user){
    //REDIRECT TO HOME?
    return (<h1>Please login</h1>)
  }

 const handleSave = () =>{
   console.log('saved' + email)
    setUserData({
      email: email,
    }
      
    )
  }

  

  
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
            <div>
            <h1>Welcome user {user.id}</h1>

              <img src="" id='imgAvatar' alt=''></img>
              <label htmlFor='fileAvatar'>Select Avatar</label>
              <input type='file' id='fileAvatar'></input>
              <label htmlFor='email'>Email:</label>
              <input type='email' id='email' value={email} onChange={(e) => setEmail(e.currentTarget.value)}></input>
          <button onClick={handleSave}>Save</button>


            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
