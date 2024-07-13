import React from 'react'
import '../styles/shopping.css'
import list from '../Data'

import Card from './Card'

function Shopping({handleButtonClick}) {
  return (
    <section>
        {
        list.map((items)=>(
            <Card item={items} key={items.id}handleButtonClick={handleButtonClick}></Card>

        ))
        }
    </section>
  )
}

export default Shopping