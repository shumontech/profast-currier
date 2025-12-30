import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import banner from '../../../../assets/Image/banner/banner1.png';
import banner2 from '../../../../assets/Image/banner/banner2.png';
import banner3 from '../../../../assets/Image/banner/banner3.png';

const Banner = () => {
    return (
        <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} showStatus={false} dynamicHeight={false}>
            <div>
                <img src={banner} />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src={banner2} />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src={banner3} />
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>
    );
};

export default Banner;