import { useContext } from 'react';
import './App.css';
import Images from './components/Images';
import NavBar from './components/NavBar';
import Search from './components/Search';
import SnackBar from './components/SnackBar';
import { ImageContext } from './context/ImageProvider';



function App() {

  const {open, setOpen} = useContext(ImageContext);

  return (
    <>
      <NavBar />
      <Search />
      <Images />
      <SnackBar open={open} setOpen={setOpen} />
    </>
  );
}

export default App;
