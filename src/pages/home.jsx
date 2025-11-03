import React from 'react';
// import TopHeader from '../Components/Header/TopHeader';
// import BottomHeader from '../Components/Header/BottomHeader';
// import CenteredNavbar from '../Components/Header/Navibar';
import ContentImageSlider from '../Components/Carousal/Carousal';
import ProductDetail from '../Components/ProductCards/ProductDetail';
import ProductcardGrid from '../Components/ProductCards/ProductCard';
import BannerOne from '../Components/ProductCards/banner';
import AboutUs from '../Components/AboutUs/AboutUs'

const Home = () => {
  return (
    <>
     {/* <TopHeader/>
      <BottomHeader/>
      <CenteredNavbar/> */}
      <ContentImageSlider />
      <ProductDetail/>
      <ProductcardGrid />
      <BannerOne/>
      <AboutUs/>
    </>
  );
};

export default Home