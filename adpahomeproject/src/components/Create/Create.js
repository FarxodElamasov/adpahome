import * as React from "react";
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";



export default function CustomizedInputs() {
  const { t } = useTranslation()

  const handleSubmit = () => {
    alert("hello world")
  }

  return (
    <Grid container
      direction="row"
      justifyContent="end"
      alignItems="center">
      <Grid item xs={6} md={8}>
        <Typography component="h1" sx={{ paddingTop: "70px", paddingBottom: "40px", fontSize: "30px" }}>{t("admin.product_create_form.product_heading")}</Typography>
        <form onSubmit={handleSubmit} >
          <TextField id="outlined-basic" sx={{ width: "600px", marginBottom: "20px" }} label="Name" variant="outlined" />
          <TextField id="outlined-basic" sx={{ width: "600px", marginBottom: "20px" }} label="Description" variant="outlined" />
          <TextField id="outlined-basic" sx={{ width: "600px", marginBottom: "20px" }} label="Price" variant="outlined" />
          <TextField id="outlined-basic" sx={{ width: "600px", marginBottom: "20px" }} label="Image" variant="outlined" />
          <TextField id="outlined-basic" sx={{ width: "600px", marginBottom: "20px" }} label="Image" variant="outlined" />
          <TextField id="outlined-basic" sx={{ width: "600px", marginBottom: "20px" }} label="Image" variant="outlined" />
          <TextField id="outlined-basic" sx={{ width: "600px", marginBottom: "20px" }} label="Image" variant="outlined" />
          <TextField id="outlined-basic" sx={{ width: "600px", marginBottom: "20px" }} label="Image" variant="outlined" />
          <TextField id="outlined-basic" sx={{ width: "600px", marginBottom: "20px" }} label="Image" variant="outlined" />
          <br></br>
          <Button variant="contained" type="submit">Button</Button>
        </form>





      </Grid>
    </Grid>
  );
}
