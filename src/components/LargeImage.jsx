import { AppBar, Box, Button, Dialog, Divider, styled, Toolbar, Typography } from "@mui/material"
import { useContext, useState } from "react";
import { ImageContext } from "../context/ImageProvider";
import BottomRow from "./BottomRow";
import {saveAs} from 'file-saver';
import CloseIcon from '@mui/icons-material/Close';
import ShareIcon from '@mui/icons-material/Share';
import CopyToClipboard from "react-copy-to-clipboard";

const dialogStyle = {
    height: '96%',
    width: '70%',
    margin: '20px',
    maxWidth: '100%',
    maxHeight: '100%',
    boxShadow: 'none',
    overflow: 'hidden',
    borderRadius: '5px',
}

const Header = styled(AppBar)`
     marginTop: '50px';
    width: '80%';
    maxWidth: '100%';
    maxHeight: '50px';
    background: #fff
`;

const Title = styled(Typography)`
    color: #3cb46e;
    font-size: 25px;
    font-Style: italic;
    text-transform: capitalize
`;


const Download = styled(Button)`
    background: #3cb46e;
    color: #fff;
    text-transform: none;
`;

const Copied = styled(Button)`
    color: #fff;
    text-transform: none;
`;
const Close = styled(CloseIcon)`
    color: black;
    cursor: pointer;
`;

const Share = styled(Box)`
    color: black;
    display: flex;
    margin-right: 5px;
    border: 1px solid black;
    border-radius: 5px;
    justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const LargeImage = ({open, setOpen, image}) => {

    const [copy, setCopy] = useState(false);
    const {text} = useContext(ImageContext);

    const downloadImage = () => {
        let url = image.largeImageURL;
        saveAs(url, 'downloaded.jpg');
      }
    let def ;

    text.length ? def = text : def = "Default Image";


  return (

    <Dialog
        open={open}
        PaperProps={{sx: dialogStyle}} maxWidth={'md'}
        onClose={() => setOpen(false)}
    >
        <Header position= 'static' elevation={0}>
            <Toolbar style={{paddingRight: '0px'}} >
                <Title>{def}</Title>
                <Box sx={{marginLeft: "auto", display: 'flex'}} >
                <CopyToClipboard text = {image.largeImageURL}
                    onCopy={() => setCopy(true)}
                >
                {
                    copy ? <Copied variant="contained">Copied!</Copied> :

                <Share>
                
                    <ShareIcon sx={{ fontSize: '18px', padding: '3px' }} />
                    <Typography sx={{ fontSize: '14px', padding: '5px' }} >Share</Typography>
                </Share>
                }
                </CopyToClipboard>
                <Download variant="contained"  onClick={downloadImage}>Download Free</Download>
                </Box>
                
                <Close position="static" sx={{marginBottom: "auto"}} onClick={() => setOpen(false)}/>
            </Toolbar>
        </Header>
        <Divider />
        <BottomRow image={image} />
    </Dialog>
  )
}
export default LargeImage