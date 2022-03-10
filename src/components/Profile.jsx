import { Container, Grid, InputLabel } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useMoralis } from "react-moralis";
import { useState, useEffect } from "react";
import { Moralis } from "moralis";
import Switch from "@mui/material/Switch";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
// import {statesList} from '../assets/states.js';
import Services from "./Services";

import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

export default function Profile() {
  const statesList = [
    "AL",
    "AK",
    "AZ",
    "AR",
    "CA",
    "CO",
    "CT",
    "DE",
    "FL",
    "GA",
    "HI",
    "ID",
    "IL",
    "IN",
    "IA",
    "KS",
    "KY",
    "LA",
    "ME",
    "MD",
    "MA",
    "MI",
    "MN",
    "MS",
    "MO",
    "MT",
    "NE",
    "NV",
    "NH",
    "NJ",
    "NM",
    "NY",
    "NC",
    "ND",
    "OH",
    "OK",
    "OR",
    "PA",
    "RI",
    "SC",
    "SD",
    "TN",
    "TX",
    "UT",
    "VT",
    "VA",
    "WA",
    "WV",
    "WI",
    "WY",
  ];
  const { user, setUserData } = useMoralis();
  const [email, setEmail] = useState("");
  const [avatarFile, setAvatarFile] = useState("");
  const [username, setUserName] = useState("");
  const [showAddress, setShowAddress] = useState(false);
  const [userAddress, setUserAddress] = useState({});
  const [userWebsite, setUserWebsite] = useState("");
  const [userBio, setUserBio] = useState("");

  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipCode] = useState("");
  const [state, setState] = useState("");

  const addressFormStyle = {
    textAlign: "center",
    display: "flex",
    flexDirection: "row",
  };

  const individualStyle = {
    display: "block",
    alignSelf: "center",
    width: "100%",
  };

  useEffect(() => {
    if (user) {
      setUserName(user.attributes.username);
      const userEmail = user.get("email");
      if (userEmail) {
        setEmail(userEmail);
      }

      const userBioIn = user?.attributes.about;
      if (userBioIn) {
        setUserBio(userBioIn);
      }
      const userAvatar = user?.attributes?.avatar?._url;
      if (userAvatar) {
        setAvatarFile(userAvatar);
      }
      const userWebsiteIn = user?.attributes.websiteURL;
      if (userWebsiteIn) {
        setUserWebsite(userWebsiteIn);
      }

      console.log(user?.attributes);
      const showAddressIn = user?.attributes.showAddress;
      if (showAddressIn) {
        console.log(showAddressIn);
        setShowAddress(showAddressIn);
      }

      const userAddressIn = user?.attributes.userAddress;

      if (userAddressIn) {
        console.log(userAddressIn);
        setUserAddress(userAddressIn);
        console.log(userAddressIn.addr1);
        setAddress1(userAddressIn.addr1);
        setAddress2(userAddressIn.addr2);
        setCity(userAddressIn.city);
        setZipCode(userAddressIn.zipcode);
        setState(userAddressIn.state);
      }
    }
  }, [user]);

  if (!user) {
    //REDIRECT TO HOME?
    return <h1>Please login</h1>;
  }
  const makeStatesList = () => {
    return (
      <FormControl>
        <InputLabel id="select-state">State:</InputLabel>
        <Select
          labelId="select-state"
          value={state}
          onChange={(e) => setState(e.target.value)}
        >
          {statesList.map((s) => (
            <MenuItem value={s} key={s}>
              {s}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  };

  const handleToggle = () => {
    setShowAddress(!showAddress);
    console.log(userAddress);
  };

  const handleSave = () => {
    const profilePic = new Moralis.File(avatarFile.name, avatarFile);

    setUserData({
      about: userBio,
      email: email,
      avatarFile: profilePic,
      username: username,
      websiteURL: userWebsite,
      showAddress: showAddress,
    });
  };

  const TestSubmit = (e) => {
    e.preventDefault();
    setUserData({
      userAddress: {
        addr1: address1,
        addr2: address2,
        city: city,
        state: state,
        zipcode: zipcode,
      },
    });
  };

  return (
    <div>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <div className="headingText">
              <Typography variant="h2" sx={{ color: "#ffffff" }}>
                Welcome {username}
              </Typography>
            </div>
            {user && (
              <div>
                <FormControl>
                  <FormLabel >About you :</FormLabel>
                  <TextField
                    onChange={(e) => setUserBio(e.currentTarget.value)}
                    value={userBio}
                    multiline
                    minRows={2}
                    maxRows={6}
                    style={{width:'100%'}}
                  />
                  <FormLabel>Usename:</FormLabel>
                  <TextField
                    onChange={(e) => setUserName(e.currentTarget.value)}
                    value={username}
                  />
                  <FormLabel>Email:</FormLabel>
                  <TextField
                    onChange={(e) => setEmail(e.currentTarget.value)}
                    value={email}
                  />
                  <FormLabel>Website URL:</FormLabel>
                  <TextField
                    onChange={(e) => setUserWebsite(e.currentTarget.value)}
                    value={userWebsite}
                  />
                </FormControl>
                <div>
                  <Avatar
                    alt="profile Image"
                    src={user?.attributes.avatarFile._url}
                    sx={{ width: 200, height: 200 }}
                  />
                  <label htmlFor="fileAvatar">Select Avatar</label>
                  <input
                    type="file"
                    id="fileAvatar"
                    defaultValue=""
                    onChange={(e) => setAvatarFile(e.target.files[0])}
                  ></input>
                </div>
                <div>
                  Remote / Physical Location
                  <Switch
                    checked={showAddress}
                    onChange={handleToggle}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                </div>
                <Button variant="contained" onClick={handleSave}>
                  Save
                </Button>
              </div>
            )}
            {user && showAddress && (
              <div style={addressFormStyle}>
                <form style={{ width: "100%" }}>
                  <div>
                    <FormControl>
                      <FormLabel>Address 1:</FormLabel>
                      <TextField
                        onChange={(e) => setAddress1(e.currentTarget.value)}
                        value={address1}
                      />
                      <FormLabel>Address 2:</FormLabel>
                      <TextField
                        onChange={(e) => setAddress2(e.currentTarget.value)}
                        value={address2}
                      />
                      <FormLabel>City:</FormLabel>
                      <TextField
                        onChange={(e) => setCity(e.currentTarget.value)}
                        value={city}
                      />
                    </FormControl>
                  </div>
                  <label style={individualStyle} htmlFor="state">
                    {makeStatesList()}
                  </label>
                  <FormLabel>ZipCode:</FormLabel>
                  <TextField
                    onChange={(e) => setZipCode(e.currentTarget.value)}
                    value={zipcode}
                    inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                  />

                  <Button variant="contained" onClick={TestSubmit}>
                    Update Address
                  </Button>
                </form>
              </div>
            )}
          </Grid>
          <Services />
        </Grid>
      </Container>
    </div>
  );
}
