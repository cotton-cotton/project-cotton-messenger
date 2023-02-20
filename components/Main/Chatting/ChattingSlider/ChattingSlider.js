import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { ChattingSliderData } from './ChattingSliderData';

import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';

const ChattingSlider = () => {
  const setting = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 2000,
    autoplay: false,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    // responsive: [
    //   {
    //     breakpoint: 1600,
    //     settings: {
    //       slidesToShow: 7,
    //     },
    //   },
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 5,
    //     },
    //   },
    // ],
    prevArrow: (
      <Prev />
    ),
    nextArrow: (
      <Next />
    ),
  };

  return (
    <Wrapper>
      <SliderContainer {...setting}>
        {ChattingSliderData &&
          ChattingSliderData.map(({ id, src, alt }) => {
            return <SliderList key={id} src={src} alt={alt} />;
          })}
      </SliderContainer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
/* display: flex;
justify-content: center;
align-items: center; */
  width: 600px;
  /* border: 1px solid red; */
`;
const SliderContainer = styled(Slider)`
  .slick-list {
  }

  .slick-slide div {
    margin-right: 5px;
    cursor: pointer;
  }
`;
const Next = styled.div`
  position: absolute;
  right: 1.5%;
  bottom: 10%;
  z-index: 99;
`;
const Prev = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  left: 1%;
  bottom: 10%;
  z-index: 99;
`;
const SliderList = styled.img`
  width: 100%;
  height: 300px;
`;

export default ChattingSlider;
