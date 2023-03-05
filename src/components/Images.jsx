import { Grid } from "@mui/material";
import React, { useContext } from "react"
import { ImageContext } from "../context/ImageProvider"
import Image from "./Image";

function Images() {
  const {data} = useContext(ImageContext);
  return (
    <Grid container>
      {
        data.map((image, i) =>(
          <Grid item xs={3} key = {i}>
            <Image image={image}/>
          </Grid>
        ))
      }
    </Grid>
  )
}
export default Images