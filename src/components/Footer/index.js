import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  
  FaLinkedin
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink
} from './FooterElements';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/'>Sakshi Jain</SocialLogo>
            <SocialIcons>
              <SocialIconLink href='https://www.facebook.com/' target='_blank' aria-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href='https://www.instagram.com/' target='_blank' aria-label='Instagram'>
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href='youtube.com' target='_blank' aria-label='Youtube'>
                <FaYoutube />
              </SocialIconLink>
             
              <SocialIconLink href='https://www.linkdin.com/in/sakshi-jain-656a31210' target='_blank' aria-label='Linkedin'>
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
