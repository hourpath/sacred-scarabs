import FormControl from "@material-ui/core/FormControl";
import { useState, useEffect } from "react";
import FormLabel from "@material-ui/core/FormLabel";
import TextField from "@material-ui/core/TextField";
import { useMoralis } from "react-moralis";
import Button from "@mui/material/Button";

// import Select from "@mui/material/Select";
// import MenuItem from "@mui/material/MenuItem";
// import { InputLabel } from "@mui/material";
export default function Services() {
  //   const [selectedService, setSelectedService] = useState("");
  const [addServiceToggle, setOnServiceToggle] = useState(false);
  // const [userServices, setUserServices] = useState([]);
  const [serviceName, setServiceName] = useState("");
  const [serviceDescription, setServiceDescription] = useState("");
  const [servicePrice, setServicePrice] = useState("");
  const [servicesOffered, setServicesOffered] = useState([]);
  const { user, setUserData } = useMoralis();
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [deleteId, setDeleteId] = useState();

  useEffect(() => {
    if (user) {
      const servicesOfferedIn = user?.attributes.servicesOffered;
      if (servicesOfferedIn) {
        setServicesOffered(servicesOfferedIn);
      }

      // {
      //     name: 'TestService1',
      //     description: 'description1',
      //     price: '10'
      // }
    }
  }, [user]);

  const handleSaveService = () => {
    servicesOffered.push({
      name: serviceName,
      description: serviceDescription,
      price: servicePrice,
      id: servicesOffered.length + 1,
    });

    setUserData({
      servicesOffered: servicesOffered,
    });

    // CLEAR FORM
    setServiceName("");
    setServiceDescription("");
    setServicePrice("");
  };

  const EditService = (e) => {
    console.log(e.target.getAttribute("id"));
  }

  const DeleteService = (e) => {
    console.log(e.target.getAttribute("id"));
    // filter by id and then reset userData for new array
    let updatedServices = servicesOffered.filter(function (element) {
      if (element.id) {
        return element.id != e.target.id;
      }
      return true;
    });

    setUserData({
      servicesOffered: updatedServices,
    });

    // Update in server

    setServicesOffered(updatedServices);
  };

  const showConfirmDelete = (s) => {
    return (
      <div>
      <Button
      id={s.id}
      variant="contained"
      color="error"
      onClick={DeleteService}
    >
      Yes, Delete
    </Button>
    <Button
      id={s.id}
      variant="outlined"
      color="error"
      onClick={() => {setConfirmDelete(!confirmDelete); setDeleteId(-1)}}
    >
      Cancel
    </Button>
      </div>

    )
  }

  const addServiceForm = () => {
    return (
      <div>
        <button onClick={() => setOnServiceToggle(false)}>X</button>
        <FormControl>
          <FormLabel>Service Name</FormLabel>
          <TextField
            onChange={(e) => setServiceName(e.currentTarget.value)}
            value={serviceName}
          />
          <FormLabel>Service Description</FormLabel>
          <TextField
            onChange={(e) => setServiceDescription(e.currentTarget.value)}
            value={serviceDescription}
          />
          <FormLabel>Service Price</FormLabel>
          <TextField
            numeric="true"
            onChange={(e) => setServicePrice(e.currentTarget.value)}
            value={servicePrice}
          />

          <button onClick={() => handleSaveService()}>Save</button>
        </FormControl>
      </div>
    );
  };
  return (
    <div>
      <div>
        {servicesOffered.length >= 1 &&
          servicesOffered.map((s) => {
            return (
              <div key={s.name}>
                <div>
                  <h1>{s.name} </h1>
                </div>
                <div>About: {s.description}</div>

                <div>${s.price}</div>
                {confirmDelete && s.id == deleteId? showConfirmDelete(s) : <Button
                  id={s.id}
                  variant="contained"
                  color="error"
                  onClick={() => {setConfirmDelete(!confirmDelete); setDeleteId(s.id)}}
                >
                  Delete
                </Button>
          }
                
                <Button
                  id={s.id}
                  variant="contained"
                  onClick={EditService}
                >
                  Edit
                </Button>
              </div>
            );
          })}
        <button onClick={() => setOnServiceToggle(!addServiceToggle)}>
          Add Service
        </button>

        {addServiceToggle && addServiceForm()}
      </div>
    </div>
  );
}
