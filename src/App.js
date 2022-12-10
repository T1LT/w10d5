
import './App.css';
import GalleryNavigation from './components/GalleryNavigation';
import harvardArt from './data/harvardArt';
import GalleryView from './components/GalleryView/GalleryView';
import { Route } from "react-router-dom";


function App() {
  return (
    <div className='page-wrapper'>
      <Route path={'/galleries'}>
        <GalleryNavigation galleries={harvardArt.records} />
      </Route>
      <Route path={'/galleries/:galleryId'}>
        <GalleryView galleries={harvardArt.records} />
      </Route>
    </div>
  );
}

export default App;
