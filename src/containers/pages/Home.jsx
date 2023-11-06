import Layout from "hocs/layouts/Layout";
import Navbar from "components/navigation/Navbar";
import Footer from "components/Footer";


function Home(){
 return(
    <Layout>
        <Navbar/>
        <div className="pt28">
          Home  
        </div>
        
        <Footer/>
    </Layout>
 )
}

export default Home;