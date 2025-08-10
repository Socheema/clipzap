import React from 'react'
import NavbarComponent from '../Components/header'
import FooterComponent from '../Components/footer'
import SearchComponent from '../Components/search'
import LinkContainer from '../Components/linkContainer'


function Links() {
  return (
    <div className='min-h-screen relative w-full'>
    <div className=' min-h-screen'>
      <div className='absolute w-[70vw] top-[-225px] left-[15vw] h-[50%] bg-blue-500 pointer-events-none ' style={{
      filter:"blur(120px)",
      opacity: 0.5
     }}/>

      <NavbarComponent />
      <SearchComponent />
      <LinkContainer />
      <FooterComponent />
    </div>

    </div>
  )
}

export default Links
