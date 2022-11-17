import * as React from "react";
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
          <TextField id="outlined-basic" sx={{ width: "600px", marginBottom: "20px" }} label={t("admin.form_labels.name")} variant="outlined" />
          <TextField id="outlined-basic" sx={{ width: "600px", marginBottom: "20px" }} label={t("admin.form_labels.description")} variant="outlined" />
          <TextField id="outlined-basic" sx={{ width: "600px", marginBottom: "20px" }} label={t("admin.form_labels.price")} variant="outlined" />
          <TextField id="outlined-basic" sx={{ width: "600px", marginBottom: "20px" }} label={t("admin.form_labels.mainImage")} variant="outlined" />
          <TextField id="outlined-basic" sx={{ width: "600px", marginBottom: "20px" }} label={t("admin.form_labels.frontImage")} variant="outlined" />
          <TextField id="outlined-basic" sx={{ width: "600px", marginBottom: "20px" }} label={t("admin.form_labels.rightImage")} variant="outlined" />
          <TextField id="outlined-basic" sx={{ width: "600px", marginBottom: "20px" }} label={t("admin.form_labels.leftImage")} variant="outlined" />
          <TextField id="outlined-basic" sx={{ width: "600px", marginBottom: "20px" }} label={t("admin.form_labels.behindImage")} variant="outlined" />
          <TextField id="outlined-basic" sx={{ width: "600px", marginBottom: "20px" }} label={t("admin.form_labels.insideImage")} variant="outlined" />
          <br></br>
          <Button variant="contained" type="submit">Button</Button>
        </form>
      </Grid>
    </Grid>
  );
}
