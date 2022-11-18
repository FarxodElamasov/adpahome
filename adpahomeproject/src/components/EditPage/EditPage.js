import React, { useEffect, useState } from 'react';
import { Box, Button, Grid, TextField } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function EditPage() {
    const [data, setData] = useState([]);
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();

    console.log(id);

    const getAllDataId = async (id) => {
        await axios.get(`http://localhost:3000/data/${id}`)
            .then((res) => {
                setData(res.data)
                setName(res.data.name)
                setDescription(res.data.description)
                setPrice(res.data.price)
                setImage(res.data.img)
            })
    }

    useEffect(() => { getAllDataId(id) }, [])

    const editData = async (id) => {
        const item = {
            name: name,
            description: description,
            price: price,
            img: image
        }
        console.log(item)
        await axios.put(`http://localhost:3000/data/${id}`, item)
            .then(res => {
                if (res.status === 200) {
                    alert("Succesfully")
                    setName("")
                    setDescription("")
                    setPrice("")
                    setImage("")
                    navigate("/list")
                }
            })
    }

    return (
        <>
            <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
                <Grid item xs={8} >
                    <h1>Edit Page</h1>
                    <form key={data.id}>
                        <Box
                            component="form"
                            sx={{ '& > :not(style)': { m: 1, width: '100%' } }}
                            noValidate
                            autoComplete="off">
                            <TextField id="outlined-basic" value={name} onChange={(e) => setName(e.target.value)} label="Name" variant="outlined" />
                            <TextField id="outlined-basic" value={description} onChange={(e) => setDescription(e.target.value)} label="Description" variant="outlined" />
                            <TextField id="outlined-basic" value={price} onChange={(e) => setPrice(e.target.value)} label="Price" variant="outlined" />
                            <TextField id="outlined-basic" value={image} onChange={(e) => setImage(e.target.value)} label="Image" variant="outlined" />
                            <Button onClick={() => editData(data.id)}>Save</Button>
                        </Box>
                    </form>
                </Grid>
            </Grid>
        </>
    )
}