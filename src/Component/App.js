import React, { useState } from 'react'
import { Home } from './Home'
import { Product } from './Product.'
import { Card } from './Card'
import { Display } from './Display'
import './home.css'

export const App = () => {
  const [Mydata, SetMydata] = useState([])

  fetch('https://fakestoreapi.com/products').then(
    response => {
      return response.json();
    }
  ).then(
    data => {
      SetMydata(data)
    }
  )



  let a = [
    {
      title: "Laptop",
      para: "Laptops combine many of the input/output components and capabilities of a desktop computer into a single unit, including a display screen, small speakers.",
      Rs: "100",

    },
    {
      title: "Laptop",
      para: "Laptops combine many of the input/output components and capabilities of a desktop computer into a single unit, including a display screen, small speakers.",
      Rs: "100",

    },
    {
      title: "Laptop",
      para: "Laptops combine many of the input/output components and capabilities of a desktop computer into a single unit, including a display screen, small speakers.",
      Rs: "100",

    }
  ]

  const [totalcount, Settotalcount] = useState(0)
  const [totalAmmount, SettotalAmmount] = useState(0)

  const addcartcal = (a) => {
    // alert("qq"+a)
    // Settotalcount(Number(totalcount)+Number(a))
    Settotalcount(totalcount + 1)
    SettotalAmmount(Number(totalAmmount) + Number(a))
  }





  // const [total, settotal] = useState(0)
  // const function2 = (p2) => {
  //   // alert("f2"+p2)
  //   settotal(Number(total) + Number(p2))
  // }

  return (
    <div>
      {/* <Home
        p3={total}
      /> */}


      <div className='abc'>
        {
          Mydata.map((data) => (
            <Card
              title1={data.title}
              img1={data.image}
              rs1={data.price}
              addcart3={addcartcal}
            />

          ))
        }
      </div>



      <Display
        madhu={totalcount}
        price1={totalAmmount}
      />





      {/* <Product
        Function1={function2}
      /> */}

    </div>
  )
}
