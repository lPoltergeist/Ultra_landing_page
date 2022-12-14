import React from 'react'
import { Link } from 'react-router-dom';
import {InfoSec, InfoRow, InfoColumn, TextWrapper } from './infosection.elements';
import {TopLine, Heading, Subtitle, ImgWrapper, Img } from './infosection.elements';
import {Container, Button} from '../../styles/global';


export const Infosection = ({lightBg, imgStart, lightTopLine, lightTextDesc, lightText, buttonLabel, description, headline, topLine, primary, img, alt, start}) => {
  return (
    <>
    <InfoSec lightBg={lightBg}>
    <Container>
      <InfoRow imgStart={imgStart}>
        <InfoColumn>
          <TextWrapper>
            <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
            <Heading lightText={lightText}>{headline}</Heading>
            <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
            <Link to='/sign-up'>
              <Button big fontBig primary={primary}>
                {buttonLabel}
              </Button>
            </Link>
          </TextWrapper>
        </InfoColumn>
        <InfoColumn>
          <ImgWrapper start={start}>
            <Img src={img} alt={alt}/>
          </ImgWrapper>
        </InfoColumn>
      </InfoRow>
      </Container>
    </InfoSec>
    </>
  )
}
