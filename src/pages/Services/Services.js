import React from 'react'
import {homeObjFour } from './Data'
import { Infosection, Pricing } from '../../components'

const Services = () => {
  return (
    <>
    <Pricing/>
    <Infosection {...homeObjFour} />
    </>

  )
}

export default Services;

