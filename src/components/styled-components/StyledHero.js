import React from 'react';
import styled from 'styled-components';

const Hero = () => {
  return (
    <section className="hero is-link is-fullheight-with-navbar">
      <div className="hero-body">
        <div className="container">
          <p className="title">
            Fullheight hero with navbar
          </p>
        </div>
      </div>
    </section>
  )
}

const StyledHero = styled(Hero)`
  background-color: red;
`

export default StyledHero;