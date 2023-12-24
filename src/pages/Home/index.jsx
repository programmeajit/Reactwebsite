import React from 'react';
import MyNavbar from '../../components/Header/MyNavbar';
import Herosection from '../../components/Body/Herosection';
import HeroSection2 from '../../components/Body/Herosection2';
import Section from '../../components/Body/Section';
import MyFooter from '../../components/Footer/MyFooter';

const Home = () => {
  return (
    <React.Fragment>
     <MyNavbar/>
     <Herosection/>
     <HeroSection2/>
     <Section/>
     <MyFooter/>
    </React.Fragment>
  );
}


export default Home;

