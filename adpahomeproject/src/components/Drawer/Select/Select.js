// import { FormControl, MenuItem } from '@mui/material'
import React, { useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useTranslation } from "react-i18next"
// import i18n from "i18next"


export default function SelectOption() {
    const [age, setAge] = React.useState("");
    console.log(typeof(age));
    const { i18n } = useTranslation()
    
    const handleChange = (event) => {
        setAge(event.target.value);
        i18n.changeLanguage(age);
        console.log(age)
    };

    return (
        <>

            <FormControl sx={{ m: 1, minWidth: 80 }}>
                <InputLabel id="demo-simple-select-autowidth-label">{age}</InputLabel>
                <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    onChange={handleChange}
                    value={age} 
                    // label={age}
                >
                    <MenuItem value={"en"}>English </MenuItem>
                    <MenuItem value={"ru"}>Russian</MenuItem>
                    <MenuItem value={"uz"}>Uzbek</MenuItem>
                </Select>
            </FormControl>

        </>
    )
}
