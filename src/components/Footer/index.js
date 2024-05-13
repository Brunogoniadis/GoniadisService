import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { FooterContainer, FooterWrapper, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrapper, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink } from './FooterElements';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterLinksContainer>

          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Sobre Nós</FooterLinkTitle>
              <FooterLink to='/'>Como funciona</FooterLink>
              <FooterLink to='/'>Depoimentos</FooterLink>
              <FooterLink to='/'>Carreiras</FooterLink>
              <FooterLink to='/'>Investidores</FooterLink>
              <FooterLink to='/'>Termos de Serviço</FooterLink>
            </FooterLinkItems>

            <FooterLinkItems>
              <FooterLinkTitle>Sobre Nós</FooterLinkTitle>
              <FooterLink to='/'>Como funciona</FooterLink>
              <FooterLink to='/'>Depoimentos</FooterLink>
              <FooterLink to='/'>Carreiras</FooterLink>
              <FooterLink to='/'>Investidores</FooterLink>
              <FooterLink to='/'>Termos de Serviço</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>

          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Sobre Nós</FooterLinkTitle>
              <FooterLink to='/'>Como funciona</FooterLink>
              <FooterLink to='/'>Depoimentos</FooterLink>
              <FooterLink to='/'>Carreiras</FooterLink>
              <FooterLink to='/'>Investidores</FooterLink>
              <FooterLink to='/'>Termos de Serviço</FooterLink>
            </FooterLinkItems>

            <FooterLinkItems>
              <FooterLinkTitle>Sobre Nós</FooterLinkTitle>
              <FooterLink to='/'>Como funciona</FooterLink>
              <FooterLink to='/'>Depoimentos</FooterLink>
              <FooterLink to='/'>Carreiras</FooterLink>
              <FooterLink to='/'>Investidores</FooterLink>
              <FooterLink to='/'>Termos de Serviço</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>

        </FooterLinksContainer>

        <SocialMedia>
          <SocialMediaWrapper>
            <SocialLogo to='/' onClick={toggleHome}>
              logo
            </SocialLogo>
            <WebsiteRights>logo © {new Date().getFullYear()} Todos os direitos reservados.</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='Youtube'>
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='Linkedin'>
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrapper>
        </SocialMedia>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
