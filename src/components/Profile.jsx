import { Container, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useMoralis } from "react-moralis";
import { useState, useEffect } from "react";
import { Moralis } from "moralis";
import Switch from "@mui/material/Switch";
import Button from "@mui/material/Button";
// import {statesList} from '../assets/states.js';

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
      const userAvatar = user?.attributes?.avatar?._url;
      if (userAvatar) {
        setAvatarFile(userAvatar);
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
      <select
        name="state"
        value={state}
        onChange={(e) => setState(e.target.value)}
      >
        {statesList.map((s) => (
          <option key={s}>{s}</option>
        ))}
      </select>
    );
  };

  const handleToggle = () => {
    setShowAddress(!showAddress);
    console.log(userAddress);
  };

  const handleSave = () => {
    const profilePic = new Moralis.File(avatarFile.name, avatarFile);

    setUserData({
      email: email,
      avatarFile: profilePic,
      username: username,
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
                Sacred Scarabs Profile Dashboard
              </Typography>
            </div>
            {user && (
              <div>
                <h1>Welcome {username}</h1>
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
                <div>
                <label htmlFor="email">
                  Email:
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.currentTarget.value)}
                  ></input>
                </label>
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
                    <label style={individualStyle} htmlFor="address1">
                      {" "}
                      Address 1:
                      <input
                        type="text"
                        name="address1"
                        onChange={(e) => setAddress1(e.target.value)}
                        value={address1}
                        placeholder={address1}
                      ></input>
                    </label>
                  </div>
                  <div>
                    <label style={individualStyle} htmlFor="address2">
                      Address 2:
                      <input
                        type="text"
                        name="address2"
                        value={address2}
                        onChange={(e) => setAddress2(e.target.value)}
                      ></input>
                    </label>
                  </div>
                  <div>
                    <label style={individualStyle} htmlFor="city">
                      City:
                      <input
                        type="text"
                        name="city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                      ></input>
                    </label>
                  </div>
                  <label style={individualStyle} htmlFor="state">
                    State:
                    {makeStatesList()}
                  </label>
                  <label style={individualStyle} htmlFor="zipcode">
                    ZipCode:
                    <input
                      type="number"
                      name="zipcode"
                      value={zipcode}
                      onChange={(e) => setZipCode(e.target.value)}
                      max={5}
                    ></input>
                  </label>

                  <button onClick={TestSubmit}>Update Address</button>
                </form>
              </div>
            )}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
