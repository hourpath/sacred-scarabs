import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
// import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function renderServices(services) {
  return services.map((service) => {
    return (
      <div key={service.id}>
        <Card style={{ margin: "5px" }}>
          <Grid container direction="row">
            <Grid item xs={2}>
              <CardMedia
                component="img"
                height="200"
                style={{
                  padding: "5px",
                  paddingRight: "10px",
                  marginBottom: "5px",
                }}
              />
            </Grid>
            <Grid item xs={10}>
              <h1>{service.name}</h1>
              <h4>{service.description}</h4>
              <p>{service.price}</p>
              <p>Reviews</p>
            </Grid>
          </Grid>
        </Card>
      </div>
    );
  });
}

export default function BasicTabs(props) {
  const { user } = props;
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Collections" {...a11yProps(0)} />
          <Tab label="Services" {...a11yProps(1)} />
          <Tab label="Creations" {...a11yProps(2)} />
          <Tab label="Projects" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        Users Collections
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div>{user?.services && renderServices(user.services)}</div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        Users Creations
      </TabPanel>
      <TabPanel value={value} index={3}>
        Users Projects
      </TabPanel>
    </Box>
  );
}
