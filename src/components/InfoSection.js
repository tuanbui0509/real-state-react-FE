import React from 'react';
import styled, { css } from 'styled-components'
import { Button } from '../components/Button';

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 4rem 0;
`
const Container = styled.div`
  padding: 3rem calc((100vw - 1300px)/2);
  display:grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows:800px;
  @media screen and (max-width:768px){
    grid-template-columns: 1fr;
  }
`
const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height:1.4;
  padding: 1rem 2rem;
  order:${({ reverse }) => (reverse ? '1' : '2')};

  h1{
      margin-bottom:1rem;
      font-size:clamp(1.5rem,6w,2rem);
  }
  p{
    margin-bottom:2rem;
  }
`
const ColumnRight = styled.div`
  padding: 1rem 2rem;
  order:${({ reverse }) => (reverse ? '1' : '2')};
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px){
    order:${({ reverse }) => (reverse ? '2' : '1')};
  }
  img{
      width: 100%;
      height: 100%;
      object-fit:cover;
      @media screen and (max-width: 768px){
        width: 90%;
        height: 90%;
        }
  }


`

const InfoSection = ({ heading, paragraphOne, paragraphTwo, image, buttonLabel }) => {
    return (
        <Section>
            <Container>
                <ColumnLeft>
                    <h1>{heading}</h1>
                    <p>{paragraphOne}</p>
                    <p>{paragraphTwo}</p>
                    <Button to='/homes' primary='true' >{buttonLabel}</Button>
                </ColumnLeft>
                <ColumnRight>
                    <img src={image} alt='Homes' />
                </ColumnRight>
            </Container>
        </Section>
    );
}

export default InfoSection;