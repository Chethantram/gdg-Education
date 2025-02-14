import React from 'react'
import HeroSection from './HeroSection'
import KeyFeature from './KeyFeature'
import UserReview from './UserReview'

const Header = () => {
  return (
    <div className='min-h-screen'>
        <HeroSection/>
        <KeyFeature/>
        <UserReview/>
    </div>
  )
}

export default Header