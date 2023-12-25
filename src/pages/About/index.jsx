import React from 'react'
import Aboutus from './Aboutus'
import MyNavbar from '../../components/Header/MyNavbar'
import MyFooter from '../../components/Footer/MyFooter'
import OpenCloseContent from '../../components/Collapsed/OpenCloseContent'

export default function About() {
  return (
    <div>
      <MyNavbar/>
      <Aboutus/>
      <OpenCloseContent/>
      <MyFooter/>
    </div>
  )
}
