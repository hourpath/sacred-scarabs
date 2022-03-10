
import FormControl from "@material-ui/core/FormControl";
import { useState } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import {  InputLabel } from "@mui/material";
export default function Services(){
    const [selectedService, setSelectedService] = useState('');
    // const [userServices, setUserServices] = useState([]);
    const servicesOffered = [
        'BreathWork',
        'Tarot Reading',
        'Energy Healing',
        'ETC'
    ]

    const testServices = ['BreathWork', 'ETC'];
    const makeServicesList = () => {
        return (
          <FormControl>
            <InputLabel id="select-service">Add Service:</InputLabel>
            <Select
              labelId="select-service"
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
            >
              {servicesOffered.map((s) => (
                <MenuItem value={s} key={s}>
                  {s}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        );
              }
    return(
        <div>
            {makeServicesList()}
            <div>
                Your services: 
                {testServices.map((t) =>{
                    <p>{t}</p>
                })}
            </div>
        </div>
    )

}

