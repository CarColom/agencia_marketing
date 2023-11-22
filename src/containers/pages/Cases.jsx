import Layout from "hocs/layouts/Layout";
import Navbar from "components/navigation/Navbar";
import Footer from "components/navigation/Footer";
import Header from "components/Cases/Header";
import CasesList from "components/Cases/CasesList";


function Cases(){
 return(
    <Layout>
        <Navbar/>
        <div className="pt28">
         <Header/> 
        <CasesList/>
        </div>
        
        <Footer/>
    </Layout>
 )
}

export default Cases;