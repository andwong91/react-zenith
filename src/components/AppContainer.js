import React, { Component } from 'react';
import { render } from 'react-dom';

import Header from './StyledHeader';
import ImageCarousel from './ImageCarousel';

class AppContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    
  }

  render() {
    return (
      <div>
        <Header/>
        <ImageCarousel/>
      </div>
    )
  }
}

export default AppContainer;