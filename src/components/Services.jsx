 import FormControl from "@material-ui/core/FormControl";
import { useState, useEffect } from "react";
import FormLabel from "@material-ui/core/FormLabel";
import TextField from "@material-ui/core/TextField";
import { useMoralis } from "react-moralis";

// import Select from "@mui/material/Select";
// import MenuItem from "@mui/material/MenuItem";
// import { InputLabel } from "@mui/material";
export default function Services() {
//   const [selectedService, setSelectedService] = useState("");
  const [addServiceToggle, setOnServiceToggle] = useState(false);
  // const [userServices, setUserServices] = useState([]);
  const [serviceName, setServiceName] = useState('');
  const [serviceDescription, setServiceDescription] = useState('');
  const [servicePrice, setServicePrice] = useState("");
  const [servicesOffered, setServicesOffered] = useState([]);
  const { user, setUserData } = useMoralis();
  // const servicesOffered = [
//     "BreathWork",
//     "Tarot Reading",
//     "Energy Healing",
//     "ETC",
//   ];


useEffect(() => {
    if (user) {
        const servicesOfferedIn = user?.attributes.servicesOffered;
        console.log(servicesOfferedIn);
        setServicesOffered(servicesOfferedIn);
// {
//     name: 'TestService1',
//     description: 'description1',
//     price: '10'
// }
        

    }
}, [user])

const handleSaveService = () =>{

    servicesOffered.push({name:serviceName, description:serviceDescription, price:servicePrice});

    setUserData({
        servicesOffered: servicesOffered
    })

    // CLEAR FORM
    setServiceName("");
    setServiceDescription("");
    setServicePrice("");

}
const addServiceForm = () =>{
    return (
        <div>
                <button onClick={() => setOnServiceToggle(false)}>X</button>
        <FormControl>
            <FormLabel >Service Name</FormLabel>
            <TextField
                    onChange={(e) => setServiceName(e.currentTarget.value)}
                    value={serviceName}
                  />
        <FormLabel >Service Description</FormLabel>
            <TextField
                    onChange={(e) => setServiceDescription(e.currentTarget.value)}
                    value={serviceDescription}
                  />
                          <FormLabel >Service Price</FormLabel>
            <TextField
            numeric='true'
                    onChange={(e) => setServicePrice(e.currentTarget.value)}
                    value={servicePrice}
                  />

                  <button onClick={() => handleSaveService()}>Save</button>
            
        </FormControl>
        </div>
    )
  }
//   const testServices = ["BreathWork", "ETC"];
//   const makeServicesList = () => {
//     return (
//       <FormControl>
//         <InputLabel id="select-service">Add Service:</InputLabel>
//         <Select
//           labelId="select-service"
//           value={selectedService}
//           onChange={(e) => setSelectedService(e.target.value)}
//         >
//           {servicesOffered.map((s) => (
//             <MenuItem value={s} key={s}>
//               {s}
//             </MenuItem>
//           ))}
//         </Select>
//       </FormControl>
//     );
//   };
  return (
    <div>
      <div>
          {servicesOffered.length >= 1 && 
          servicesOffered.map((s) =>{
              return (
            <div key={s.name}>
                <div>
                <h1>{s.name} </h1>   
                    </div>
                <div>
               About: {s.description}
                    </div>

               <div>
               ${s.price}
                   </div>
               
                </div>
          )})}
          <button
          onClick={() => setOnServiceToggle(!addServiceToggle)}>Add Service</button>

        {addServiceToggle &&
        addServiceForm()}
      </div>
    </div>
  );


}
