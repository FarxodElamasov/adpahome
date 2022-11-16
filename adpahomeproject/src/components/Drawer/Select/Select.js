import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useTranslation } from "react-i18next"

export default function SelectOption() {


    const { i18n } = useTranslation()
    const [age, setAge] = React.useState("Til");

    const handleChange = (event) => {
        setAge(event.target.value);
        i18n.changeLanguage(event.target.value);

    };

    return (
        <>
            <FormControl>
                <InputLabel id="demo-simple-select-label" sx={{ color: "white" }}>{age}</InputLabel>
                <Select
                    sx={{ color: "white" }}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                >
                    <MenuItem value={"Leng"}>English</MenuItem>
                    <MenuItem value={"Язик"}>Russian</MenuItem>
                    <MenuItem value={"Til"}>Uzbek</MenuItem>
                </Select>
            </FormControl>
        </>
    )
}
