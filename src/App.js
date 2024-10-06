import './App.css';
import FeaturedFragrances from './components/featuredFragrances/featuredFragrances';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Hero from './components/hero/hero';
import ProductInfo from './components/productinfo/productInfo';



function App() {
  return (
   
      <div className="App">
        <Header/>
        <Hero/>
        <FeaturedFragrances />
        <ProductInfo/>
        <Footer/>
      </div>
    
  );
}

export default App;
