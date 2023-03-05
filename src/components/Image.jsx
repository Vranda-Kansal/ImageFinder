import { Card, styled } from "@mui/material";
import { useState } from "react";
import LargeImage from "./LargeImage";

const ImageStyle = styled('img')({
    height: 250,
    width: '400px',
    objectFit: "cover",
    padding: 2,
    margin: 2,
    display: 'block'
})



const Image = ({image}) => {

  const [open, setOpen] = useState(false);
    

  return (
    <Card sx={{ position: 'relative' }}>
        <ImageStyle src={image.largeImageURL} alt="Image here" onClick={() => setOpen(true)} />
       { open && <LargeImage open={open} setOpen={setOpen} image={image} />}
    </Card>
  )
}
export default Image
