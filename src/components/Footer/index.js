import React from 'react';
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, FooterALink } from './FooterElements';

const Footer = () => {
  return (
      <FooterContainer>
        <FooterWrap>
              <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Over Ons</FooterLinkTitle>
                        <FooterLink to="/signin">Nieuws</FooterLink>
                        <FooterLink to="/signin">Mensen</FooterLink>
                        <FooterLink to="/signin">Standpunten</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Sociale Media</FooterLinkTitle>
                        <FooterALink href="https://www.instagram.com/pvda.gl_kw/">Instagram</FooterALink>
                        <FooterALink href="https://www.facebook.com/profile.php?id=100076613912811">Facebook</FooterALink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
              </FooterLinksContainer>
          </FooterWrap>
      </FooterContainer>                
  );
};

export default Footer;
