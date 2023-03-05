import { AppBar, styled, Toolbar, Typography } from '@mui/material';
import CollectionsIcon from '@mui/icons-material/Collections';

const Header = styled(AppBar)`
  background: #81878c
`;

function NavBar() {
  return (
    <Header position='static'>
      <Toolbar>
        <CollectionsIcon />
        <Typography variant='h5' >Image Finder</Typography>
      </Toolbar>
    </Header>
  )
}
export default NavBar