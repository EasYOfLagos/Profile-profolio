import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Homecomp from './components/Homecomp';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

import {ThemeProvider, useTheme} from "./pages/Themeprovider";
import ThemeToggle from "./pages/ThemeToggle";


const Home = React.lazy(() => import("./pages/Home"))
const About = React.lazy(() => import("./pages/About"))
const Projects = React.lazy(() => import("./pages/Projects"))
const Contact = React.lazy(() => import("./pages/Contact"))
const Allproject = React.lazy(() => import("./pages/Allproject"))
const Github = React.lazy(() => import("./pages/Github"))
const Resumes = React.lazy(() => import("./pages/Resumes"))
const Skills = React.lazy(() => import("./pages/Skills"))
const Services = React.lazy(() => import("./pages/Services"))
const Blog = React.lazy(() => import("./pages/Blog"))


function App() {
  
  return (
    <div className='App'>
      
      

          
      <React.Suspense>
        {/* <Homecomp/> */}
        <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/Github' element={<Github />} />
        <Route path='/Allproject' element={<Allproject />} />
        <Route path='/Resumes' element={<Resumes />} />
        <Route path='/Skills' element={<Skills />} />
        <Route path='/Services' element={<Services />} />
        <Route path='/Blog' element={<Blog />} />
        </Routes>
        </BrowserRouter>
      </React.Suspense>
     
     
    </div >
  );
}

export default App;
