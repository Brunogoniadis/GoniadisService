import React, { useState } from 'react';
import Video from '../../videos/video.mp4';
import { CoverContainer, CoverBg, VideoBg, CoverContent, CoverH1, CoverP, CoverBtnWrapper, ArrowForward, ArrowRight } from './CoverElements';
import { Button } from '../ButtonElements';

const CoverSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <CoverContainer>
      <CoverBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </CoverBg>
      <CoverContent>
        <CoverH1>Criação de sites profissionais</CoverH1>
        <CoverP>Nossos sites são desenvolvidos com foco em design responsivo, garantindo uma ótima experiência em dispositivos móveis, tablets e desktops.</CoverP>
        <CoverBtnWrapper>
          <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover} primary='true' 
          style={{fontWeight:'bold'}}
          >
           Quero saber mais!{hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </CoverBtnWrapper>
      </CoverContent>
    </CoverContainer>
  );
};

export default CoverSection;
