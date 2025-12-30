import React from 'react';
import Banner from './banner/Banner';
import OurServices from './card/Card';
import CompanyLogoSlider from './companylogoslider/CompanyLogoSlider';
import ThreeColumnFeatures from './ThreeColumnFeatures/ThreeColumnFeatures';
import MerchantCustomerSection from './bemarchant/MerchantCustomerSection';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurServices></OurServices>
            <CompanyLogoSlider></CompanyLogoSlider>
            <ThreeColumnFeatures></ThreeColumnFeatures>
            <MerchantCustomerSection></MerchantCustomerSection>
                     

            
        </div>
    );
};

export default Home;