import * as React from "react";
import TextField from "@mui/material/TextField";
import { Button, Grid, Typography } from "@mui/material";
import { setDefaults, useTranslation } from "react-i18next";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CustomizedInputs() {
  const { t } = useTranslation();
  const [img, setImg] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [frontImage, setFrontImage] = React.useState("");
  const [rightImage, setRightImage] = React.useState("");
  const [leftImage, setLeftImage] = React.useState("");
  const [behindImage, setBehindImage] = React.useState("");
  const [innerImage, setInnerImage] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [name, setName] = React.useState("")
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    let obj = {
      name: name,
      description: description,
      price: price,
      img: img,
      frontImage: frontImage,
      rightImage: rightImage,
      leftImage: leftImage,
      behindImage: behindImage,
      innerImage: innerImage,
    }

    axios.post('http://localhost:3000/data', obj)
      .then(res => {
        res.status === 201 ? alert('Successfull') : alert('error');
        navigate("/list")
      })
      .catch((err) => console.error(err))

  };

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="end"
        alignItems="center">
        <Grid item xs={6} md={8}>
          <Typography
            component="h1"
            sx={{
              paddingTop: "70px",
              paddingBottom: "40px",
              fontSize: "30px",
            }}>
            {t("admin.product_create_form.product_heading")}
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              id="outlined-basic"
              sx={{ width: "600px", marginBottom: "20px" }}
              label={t("admin.form_labels.name")}
              variant="outlined"
              onChange={(e) => setName(e.target.value)}
              required
            />
            <TextField
              id="outlined-basic"
              sx={{ width: "600px", marginBottom: "20px" }}
              label={t("admin.form_labels.description")}
              variant="outlined"
              onChange={(e) => setDescription(e.target.value)}
              required
            />
            <TextField
              id="outlined-basic"
              sx={{ width: "600px", marginBottom: "20px" }}
              label={t("admin.form_labels.price")}
              variant="outlined"
              onChange={(e) => setPrice(e.target.value)}
              required
            />
            <TextField
              id="outlined-basic"
              sx={{ width: "600px", marginBottom: "20px" }}
              label={t("admin.form_labels.mainImage")}
              variant="outlined"
              onChange={(e) => setImg(e.target.value)}
              required
            />
            <TextField
              id="outlined-basic"
              sx={{ width: "600px", marginBottom: "20px" }}
              label={t("admin.form_labels.frontImage")}
              variant="outlined"
              onChange={(e) => setFrontImage(e.target.value)}
              required
            />
            <TextField
              id="outlined-basic"
              sx={{ width: "600px", marginBottom: "20px" }}
              label={t("admin.form_labels.rightImage")}
              variant="outlined"
              onChange={(e) => setRightImage(e.target.value)}
              required
            />
            <TextField
              id="outlined-basic"
              sx={{ width: "600px", marginBottom: "20px" }}
              label={t("admin.form_labels.leftImage")}
              variant="outlined"
              onChange={(e) => setLeftImage(e.target.value)}
              required
            />
            <TextField
              id="outlined-basic"
              sx={{ width: "600px", marginBottom: "20px" }}
              label={t("admin.form_labels.behindImage")}
              variant="outlined"
              onChange={(e) => setBehindImage(e.target.value)}
              required
            />
            <TextField
              id="outlined-basic"
              sx={{ width: "600px", marginBottom: "20px" }}
              label={t("admin.form_labels.insideImage")}
              variant="outlined"
              onChange={(e) => setInnerImage(e.target.value)}
              required
            />
            <br></br>
            <Button variant="contained" type="submit">
              Button
            </Button>
          </form>
        </Grid>
      </Grid>
    </>
  );
}
