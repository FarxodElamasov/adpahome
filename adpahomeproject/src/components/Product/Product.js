import React, { useEffect, useState } from 'react';
import { Button, Grid } from '@mui/material';
import TableContainer from '@mui/material/TableContainer';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Link } from 'react-router-dom';
import Table from '@mui/material/Table';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Paper from '@mui/material/Paper';
import axios from 'axios';

export default function About() {

  const [data, setData] = useState([]);

  const getAllData = () => {
    axios.get("http://localhost:3000/data")
      .then((res) => {
        setData(res.data)
      })
  }

  const deleteData = (id) => {
    axios.delete(`http://localhost:3000/data/${id}`)
      .then((res) => {
        if (res.status === 200) {
          alert("secces")
          setData(data.filter((el) => el.id !== id))
        }
      })
  }

  useEffect(() => { getAllData() }, [])

  return (
    <>
      <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
        <Grid item xs={8} >
          <Paper elevation={24} sx={{ marginTop: 10  }}>
            <TableContainer >
              <Table sx={{ minWidth: 650, border: "20px", }} aria-label="simple table">
                <TableHead >
                  <TableRow>  
                    <TableCell>Home Imgaes</TableCell>
                    <TableCell align="right">Name</TableCell>
                    <TableCell align="right">Description</TableCell>
                    <TableCell align="right">Price</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((row) => {
                    return (
                      <>
                        <TableRow key={row.name} >
                          <TableCell component="div" scope="row" >
                            <img src={row.mainImage} width="100" alt="" />
                          </TableCell>
                          <TableCell align="right">{row.name}</TableCell>
                          <TableCell align="right">{row.description}</TableCell>
                          <TableCell align="right">${row.price}</TableCell>
                          <TableCell align="center">                         
                              <Link to={row.id ? `/list/editpage/${row.id}` : null}>
                                <Button variant="contained" sx={{ marginRight: 2 }} >Edit <EditIcon/></Button>
                              </Link>
                              <Button variant="contained" onClick={() => deleteData(row.id)} >Delete <DeleteIcon/></Button>                        
                          </TableCell>
                        </TableRow>
                      </>
                    )
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>
    </>
  )
}
