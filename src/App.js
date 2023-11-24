import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";
import Error404 from "containers/errors/Error404";
import Home from "containers/pages/Home";
import Services from "containers/pages/Services";
import About from "containers/pages/About";
import Careers from "containers/pages/Careers";
import Blog from "containers/pages/Blog";
import Contact from "containers/pages/Contact";
import Cases from "containers/pages/Cases";
import { Helmet, HelmetProvider } from 'react-helmet-async';


function App() {
  return (
    <HelmetProvider>
       <Helmet>
        <title>AppCraft | Software Agency</title>
        <meta name="description" content="Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de aplicaciones." />
        <meta name="keywords" content='agencia de software, agencia de marketing, creacion de pagina web' />
        <meta name="robots" content='all' />
        <link rel="canonical" href="https://www.AppCraft.com/" />
        <meta name="author" content='AppCraft' />
        <meta name="publisher" content='AppCraft' />

        {/* Social Media Tags */}
        <meta property="og:title" content='AppCraft | Software Agency' />
        <meta property="og:description" content='Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de aplicaciones.' />
        <meta property="og:url" content="https://www.AppCraft.com/" />
        <meta property="og:image" content='https://bafybeicwrhxloesdlojn3bxyjqnxgsagtd4sl53a7t4cn4vfe2abmybzua.ipfs.w3s.link/lightbnuilbg.jpg' />

        <meta name="twitter:title" content='AppCraft | Software Agency' />
        <meta
            name="twitter:description"
            content='Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de aplicaciones.'
        />
        <meta name="twitter:image" content='https://bafybeicwrhxloesdlojn3bxyjqnxgsagtd4sl53a7t4cn4vfe2abmybzua.ipfs.w3s.link/lightbnuilbg.jpg' />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
    <Provider store={(store)}>
  <Router>
    <Routes>
      <Route path="*" element={<Error404 />}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/casos" element={<Cases/>}/>
      <Route path="/servicios" element={<Services/>}/>
      <Route path="/nosotros" element={<About/>}/>
      <Route path="/carreras" element={<Careers/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/contacto" element={<Contact/>}/>
    </Routes>
  </Router>
  </Provider>
    </HelmetProvider>
  );
}

export default App;
