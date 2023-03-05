import { styled } from "@mui/material";

const ImageStyle = styled('img')({
  height: '90%',
    width: '80%',
  objectFit: "cover",
  padding: 5,
  display: "block",
    margin: "0 auto",
})

const BottomRow = ({image}) => {
  return (
    <ImageStyle src={image.largeImageURL} alt="Image here"  />
  )
}
export default BottomRow;