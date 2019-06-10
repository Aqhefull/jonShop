import React from 'react'

//Components
import Wrapper from '../Wrapper'
import Sidebar from '../containers/Sidebar'
import Products from "../containers/Products";
const Home =  () => {
  return (
    <Wrapper>
      <Sidebar />
      <Products />
    </Wrapper>
  );
}

export default Home;