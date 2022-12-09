
import './App.css';
import GalleryNavigation from './components/GalleryNavigation';
import harvardArt from './data/harvardArt';


function App() {
  return (
    <GalleryNavigation galleries = {harvardArt.records}/>
  );
}

export default App;
