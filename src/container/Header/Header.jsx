import React from 'react';
import { SubHeading } from '../../components';

import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title='Chase the new flavour'/>
      <h1 className='app__header-h1'>The Key To Fine Dining</h1>
      <p className='p__opensans' style={{ margin: '2rem 0' }}>Our fine dining restaurant offers a truly exceptional dining experience. From the moment you step into our elegant and sophisticated space, you'll be greeted by our attentive and knowledgeable staff, who are dedicated to providing impeccable service - and maybe even a few laughs along the way!</p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.welcome} alt='header img'/>
    </div>
  </div>
);

export default Header;
