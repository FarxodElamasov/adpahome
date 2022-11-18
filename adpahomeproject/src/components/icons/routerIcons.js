import React from "react";
// import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';
import ClassIcon from '@mui/icons-material/Class';
import InfoIcon from '@mui/icons-material/Info';
import BarChartIcon from '@mui/icons-material/BarChart';

export default function Plus(iconName) {
    const icons = {
        "/": <BarChartIcon sx={{ color: "#9FA2B4" }} />,
        "/productcreate": <CategoryIcon sx={{ color: "#9FA2B4" }} />,
        "/list": <ClassIcon sx={{ color: "#9FA2B4" }} />,
        "/users": <InfoIcon sx={{ color: "#9FA2B4" }} />,
    };
    return icons[iconName];
}