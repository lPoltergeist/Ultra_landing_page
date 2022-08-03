import React from 'react'
import {FaYoutube, FaFacebook, FaInstagram, FaTwitter, FaMagento} from 'react-icons/fa'
import { FooterContainer, FooterSubscription, FooterSubHeading, FooterSubText, Form, 
    FormInput, FooterLink, FooterLinkTitle, FooterLinksContainer, FooterLinksItems, FooterLinksWrapper, 
    SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights } from './Footer.elements'
import {Button} from '../../styles/global'

export const Footer = () => {
  return (
    <FooterContainer>
        <FooterSubscription>
            <FooterSubHeading>
                Join our exclusive membership to receive the latest news and trends
            </FooterSubHeading>
            <FooterSubText>
                You can unsubscribe at any moment.
            </FooterSubText>
            <Form>
                <FormInput name="email" type="email" placeholder="Your Email"/>
                    <Button fontBig>Subscribe</Button>
                </Form>
        </FooterSubscription>
        <FooterLinksContainer>
            <FooterLinksWrapper>
                <FooterLinksItems>
                    <FooterLinkTitle>About Us</FooterLinkTitle>
                    <FooterLink to='/sign-up'>How it works</FooterLink>
                    <FooterLink to='/sign-up'>Testimonials</FooterLink>
                    <FooterLink to='/sign-up'>Careers</FooterLink>
                    <FooterLink to='/sign-up'>Investors</FooterLink>
                    <FooterLink to='/sign-up'>Terms of Service</FooterLink>
                </FooterLinksItems>
                <FooterLinksItems>
                    <FooterLinkTitle>Contact Us</FooterLinkTitle>
                    <FooterLink to='/sign-up'>How it works</FooterLink>
                    <FooterLink to='/sign-up'>Testimonials</FooterLink>
                    <FooterLink to='/sign-up'>Careers</FooterLink>
                    <FooterLink to='/sign-up'>Investors</FooterLink>
                    <FooterLink to='/sign-up'>Terms of Service</FooterLink>
                </FooterLinksItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                <FooterLinksItems>
                    <FooterLinkTitle>Videos</FooterLinkTitle>
                    <FooterLink to='/sign-up'>How it works</FooterLink>
                    <FooterLink to='/sign-up'>Testimonials</FooterLink>
                    <FooterLink to='/sign-up'>Careers</FooterLink>
                    <FooterLink to='/sign-up'>Investors</FooterLink>
                    <FooterLink to='/sign-up'>Terms of Service</FooterLink>
                </FooterLinksItems>
                <FooterLinksItems>
                    <FooterLinkTitle>Social Midia</FooterLinkTitle>
                    <FooterLink to='/sign-up'>How it works</FooterLink>
                    <FooterLink to='/sign-up'>Testimonials</FooterLink>
                    <FooterLink to='/sign-up'>Careers</FooterLink>
                    <FooterLink to='/sign-up'>Investors</FooterLink>
                    <FooterLink to='/sign-up'>Terms of Service</FooterLink>
                </FooterLinksItems>
            </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
            <SocialMediaWrap>
                <SocialLogo to='/'>
                    <FaMagento/>
                    ULTRA
                </SocialLogo>
                <WebsiteRights>
                    ULTRA 2022
                </WebsiteRights>
                <SocialIcons>
                <SocialIconLink href="/" target="_blank" arial-label="Facebook">
                        <FaFacebook/>
                    </SocialIconLink>
                    <SocialIconLink href="/" target="_blank" arial-label="Instagram">
                        <FaInstagram/>
                    </SocialIconLink>
                    <SocialIconLink href="/" target="_blank" arial-label="Youtube">
                        <FaYoutube/>
                    </SocialIconLink>
                    <SocialIconLink href="/" target="_blank" arial-label="Twitter">
                        <FaTwitter/>
                    </SocialIconLink>
                </SocialIcons>
                    
            </SocialMediaWrap>
        </SocialMedia>
    </FooterContainer>

  )
}

;