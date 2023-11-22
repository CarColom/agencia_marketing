import Layout from "hocs/layouts/Layout";
import Navbar from "../../components/navigation/Navbar";
import Footer from "../../components/navigation/Footer";
import Header from "../../components/Home/Header"
import Incentives from "../../components/Home/Incentives";
import UseCases from "../../components/Home/UseCases";
import Features from "../../components/Home/Feactures";
import CTA from "../../components/Home/CTA";
import LogoCloud from "../../components/Home/LogoCloud";
import BlogList from "../../components/Home/BlogList";

function Home(){
 return(
    <Layout>
        <Navbar/>
        <div className="pt28">
         <Header/> 
         <Incentives/>
                <UseCases/>
                <Features/>
                <CTA/>
                <LogoCloud/>
                <BlogList/>
        </div>
        
        <Footer/>
    </Layout>
 )
}

export default Home;