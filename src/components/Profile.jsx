import { Container, Grid, InputLabel, Card } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useMoralis, useNFTBalances } from "react-moralis";
import { useState, useEffect, useCallback } from "react";
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
import CircularProgress from "@mui/material/CircularProgress";
import { useVerifyMetadata } from "hooks/useVerifyMetadata";

export default function Profile() {
  const { verifyMetadata } = useVerifyMetadata();
  const SACRED_SCARABS_ADDRESS = "0x2953399124f0cbb46d2cbacd8a89cf0599974963";
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
  const [avatarFile, setAvatarFile] = useState();
  const [username, setUserName] = useState("");
  const [showAddress, setShowAddress] = useState(false);
  const [userAddress, setUserAddress] = useState({});
  const [userWebsite, setUserWebsite] = useState("");
  const [userBio, setUserBio] = useState("");
  const [facebookURL, setfacebookURL] = useState("");
  const [twitterURL, settwitterURL] = useState("");
  const [tiktokURL, settiktokURL] = useState("");
  const [youtubeURL, setyoutubeURL] = useState("");
  const [instagramURL, setinstagramURL] = useState("");

  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipCode] = useState("");
  const [state, setState] = useState("");
  const [sacredNFTHoldings, setSacredNFTHoldings] = useState("");
  const [sacredSpiders, setSacredSpiders] = useState(0);
  const [sacredSnakes, setSacredSnakes] = useState(0);
  const [sacredScarabs, setSacredScarabs] = useState(0);
  const { data: NFTBalances } = useNFTBalances();
  const [photoFile, setPhotoFile] = useState();
  const [photoFileName, setPhotoFileName] = useState();
  const [isSaving, setIsSaving] = useState(false);
  const [avatarFilePreview, setAvatarPreview] = useState();
  const [showPreview, setShowPreview] = useState(false);

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

  const fetchMyNFTMetaData = useCallback(
    async (nfts) => {
      let numHoldings = 0;
      let numScarabs = 0;
      let numSpiders = 0;
      let numSnakes = 0;
      await nfts.forEach((e) => {
        if (e.token_address == SACRED_SCARABS_ADDRESS) {
          numHoldings++;
        }
        let nft = verifyMetadata(e);

        if (nft.metadata?.name.includes("Scarabs")) {
          numScarabs++;
        } else if (nft.metadata?.name.includes("Snakes")) {
          numSnakes++;
        } else if (nft.metadata?.name.includes("Spiders")) {
          numSpiders++;
        }
      });
      setSacredNFTHoldings(numHoldings);
      setSacredSnakes(numSnakes);
      setSacredSpiders(numSpiders);
      setSacredScarabs(numScarabs);
    },
    [verifyMetadata],
  );

  useEffect(() => {
    if (NFTBalances?.result) {
      //Scarabs
      fetchMyNFTMetaData(NFTBalances.result);
    }
  }, [NFTBalances?.result, fetchMyNFTMetaData]);

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
      const userAvatar = user?.attributes?.avatarFile;
      console.log(userAvatar);
      if (userAvatar) {
        setAvatarFile(userAvatar);
      } else {
        //SET DEFAULT PIC?
      }
      const userWebsiteIn = user?.attributes.websiteURL;
      if (userWebsiteIn) {
        setUserWebsite(userWebsiteIn);
      }

      console.log(user?.attributes);
      const showAddressIn = user?.attributes.showAddress;
      if (showAddressIn) {
        setShowAddress(showAddressIn);
      }

      const showfacebookURLIn = user?.attributes.facebookURL;
      if (showfacebookURLIn) {
        setfacebookURL(showfacebookURLIn);
      }

      const twitterURLIn = user?.attributes.twitterURL;
      if (twitterURLIn) {
        settwitterURL(twitterURLIn);
      }
      const tiktokURLIn = user?.attributes.tiktokURL;
      if (tiktokURLIn) {
        settiktokURL(tiktokURLIn);
      }

      const youtubeURLIn = user?.attributes.youtubeURL;
      if (youtubeURLIn) {
        setyoutubeURL(youtubeURLIn);
      }

      const instagramURLIn = user?.attributes.instagramURL;
      if (instagramURLIn) {
        setinstagramURL(instagramURLIn);
      }

      const userAddressIn = user?.attributes.userAddress;

      if (userAddressIn) {
        setUserAddress(userAddressIn);
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

  const onChangePhoto = (e) => {
    setPhotoFile(e.target.files[0]);
    setPhotoFileName(e.target.files[0].name);
    setShowPreview(true);
    setAvatarPreview(URL.createObjectURL(e.target.files[0]));
  };

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

  const handleSave = async () => {
    console.log("hi");
    console.log(userBio);
    setIsSaving(true);
    const file = photoFile;
    const name = photoFileName;
    const profilePic = new Moralis.File(name, file);
    console.log(username, email, userBio);
    let useOld = false;
    if (photoFile) {
      await setUserData({
        about: userBio,
        email: email,
        avatarFile: profilePic,
        username: username,
        websiteURL: userWebsite,
        showAddress: showAddress,
        isPractitioner: true,
        facebookURL: facebookURL,
        twitterURL: twitterURL,
        tiktokURL: tiktokURL,
        youtubeURL: youtubeURL,
        instagramURL: instagramURL,
      });
      await user.save();
    } else {
      useOld = true;
      console.log("no file");
      console.log(avatarFile);
      await setUserData({
        about: userBio,
        email: email,
        username: username,
        websiteURL: userWebsite,
        showAddress: showAddress,
        isPractitioner: true,
        facebookURL: facebookURL,
        twitterURL: twitterURL,
        tiktokURL: tiktokURL,
        youtubeURL: youtubeURL,
        instagramURL: instagramURL,
      });
    }

    if (!useOld) {
      setAvatarFile(profilePic);
    }

    setShowPreview(false);
    setIsSaving(false);
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
              <h3>
                Sacred Holdings: {sacredNFTHoldings} Snakes:{sacredSnakes}{" "}
                Spiders: {sacredSpiders} Scarabs: {sacredScarabs}
              </h3>
            </div>
          </Grid>
          <Grid item xs={6}>
            {user && (
              <Card>
                <FormControl>
                  <FormLabel>About you :</FormLabel>
                  <TextField
                    variant="outlined"
                    onChange={(e) => setUserBio(e.currentTarget.value)}
                    placeholder={userBio}
                    multiline
                    minRows={2}
                    maxRows={6}
                    style={{ width: "100%" }}
                    value={userBio}
                  />
                  <FormLabel>Usename:</FormLabel>
                  <TextField
                    variant="outlined"
                    onChange={(e) => setUserName(e.currentTarget.value)}
                    value={username}
                  />
                  <FormLabel>Email:</FormLabel>
                  <TextField
                    variant="outlined"
                    onChange={(e) => setEmail(e.currentTarget.value)}
                    placeholder={email}
                    value={email}
                  />
                  <FormLabel>Website URL:</FormLabel>
                  <TextField
                    variant="outlined"
                    onChange={(e) => setUserWebsite(e.currentTarget.value)}
                    placeholder={userWebsite}
                    value={userWebsite}
                  />
                  <FormLabel>FacebookURL:</FormLabel>
                  <TextField
                    variant="outlined"
                    onChange={(e) => setfacebookURL(e.currentTarget.value)}
                    placeholder={facebookURL}
                    value={facebookURL}
                  />

                  <FormLabel>TwitterURL:</FormLabel>
                  <TextField
                    variant="outlined"
                    onChange={(e) => settwitterURL(e.currentTarget.value)}
                    placeholder={twitterURL}
                    value={twitterURL}
                  />
                  <FormLabel>TiktokURL:</FormLabel>
                  <TextField
                    variant="outlined"
                    onChange={(e) => settiktokURL(e.currentTarget.value)}
                    placeholder={tiktokURL}
                    value={tiktokURL}
                  />
                  <FormLabel>YoutubeURL:</FormLabel>
                  <TextField
                    variant="outlined"
                    onChange={(e) => setyoutubeURL(e.currentTarget.value)}
                    placeholder={youtubeURL}
                    value={youtubeURL}
                  />
                  <FormLabel>InstagramURL:</FormLabel>
                  <TextField
                    variant="outlined"
                    onChange={(e) => setinstagramURL(e.currentTarget.value)}
                    placeholder={instagramURL}
                    value={instagramURL}
                  />
                </FormControl>

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
                {isSaving && <CircularProgress />}
              </Card>
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
            {sacredNFTHoldings >= 1 ? (
              <Services />
            ) : (
              <h3>Purchase a sacred NFT to get access to services</h3>
            )}
          </Grid>
          <Grid item xs={6}>
            <div>
              <Avatar
                alt="profile Image"
                src={showPreview ? avatarFilePreview : avatarFile?._url}
                sx={{ width: 200, height: 200 }}
              />
              <Button variant="contained" component="label">
                Upload File
                <input
                  id="fileAvatar"
                  onChange={onChangePhoto}
                  type="file"
                  hidden
                />
              </Button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
