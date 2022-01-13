import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureElements';

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>Web Design & Development</h1>
      <p>Web design determines the look and feel of a website, while web development determines how it functions. Because
         there isn't always a hard line that separates the two roles, the titles are often used interchangeably.</p>
        <a href="https://github.com/SAKSHIJAIN1703/" target="error"> <FeatureButton>Get In Touch</FeatureButton></a>
    </FeatureContainer>
  );
};

export default Feature;
