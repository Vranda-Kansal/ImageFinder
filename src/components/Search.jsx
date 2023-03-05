import { Box, InputBase, styled } from "@mui/material"
import { useContext } from "react";
import { ImageContext } from "../context/ImageProvider";

const Container = styled(Box)({
    background: "#F6F6F6",
    '& > div': {
        margin: 10
    }
})

function Search() {
    const {setText, setCount} = useContext(ImageContext);
  return (
    <Container>
        <InputBase 
            placeholder="Search"

            onChange={(e) => setText(e.target.value)}
        />
        <InputBase 
            placeholder="Number of images"
            type="Number"
            onChange={(e) => setCount(e.target.value)}
        />
    </Container>
  )
}
export default Search