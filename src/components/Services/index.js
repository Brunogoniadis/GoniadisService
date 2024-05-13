import React from 'react';
import Icon1 from '../../images/svg-4.svg';
import Icon2 from '../../images/svg-5.svg';
import Icon3 from '../../images/svg-6.svg';
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Nossos Clientes</ServicesH1>
      <ServicesWrapper>

        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Cliente 1</ServicesH2>
          <ServicesP>Aplicativo sobre 1</ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Cliente 2</ServicesH2>
          <ServicesP>Serviço sobre 2</ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Cliente 3</ServicesH2>
          <ServicesP>Aplicativo sobre o 3</ServicesP>
        </ServicesCard>

      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
