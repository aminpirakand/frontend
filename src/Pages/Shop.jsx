import React from 'react'
import Main from '../Components/Main/Header'
import Popular from '../Components/Popular/Popular'
import Offers from "../Components/Offers/Offers" 
import NewCollections from '../Components/NewCollections/NewCollections'
const Shop = () => {
  return (
    <div>
      <Main/>
      <Popular/>
      <Offers/>
      <NewCollections/>
    </div>
  )
}

export default Shop