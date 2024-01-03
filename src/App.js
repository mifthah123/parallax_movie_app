import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import ImageSlider from './Components/ImageSlider';
import Parallax from './Components/Parallax';

function App() {
  return (
    <div className="main__container">
     <Header/>
     <ImageSlider/>
     <Parallax/>
     <Footer/>
     
    </div>
  );
}

export default App;
