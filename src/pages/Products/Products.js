import React from 'react'
import {homeObjTwo, homeObjThree, homeObjFour } from './Data'
import { Infosection, Pricing } from '../../components'

const Products = () => {
  return (
    <>
    <Infosection {...homeObjTwo} />
    <Infosection {...homeObjThree} />
    <Pricing/>
    <Infosection {...homeObjFour} />
    </>

  )
}

export default Products
