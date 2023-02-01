import {Navbar, Brand, CTA} from './components'
import { Blog, Features, Footer, Header, Possibility, WhatGPT3 } from './containers'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='gradient_bg'>
      <Navbar />
      <Header />  
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
