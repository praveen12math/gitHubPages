import React from "react"

import Card from "./Card"

const CardSection = () => {
    return (
        <section className="contact bg-success ">
        <div className="container ">
          <h2 className="text-white">
            We love new friends!
          </h2>
          <div className="row">
            <div className="col-4">

              <Card cardImg="https://images.pexels.com/photos/3532557/pexels-photo-3532557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" cardBtn="Go Home" cardTitle="Home" cardText="This is paragraph"/>

            </div>
            <div className="col-4">
            <Card cardImg="https://images.pexels.com/photos/3532544/pexels-photo-3532544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" cardTitle="Card 2" cardBtn="Card Btn 2" cardText="Paragraph 2" cardTitle="Title 2"/>
             </div>
             <div className="col-4">
            <Card cardImg="https://images.pexels.com/photos/2522663/pexels-photo-2522663.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" cardTitle="Card 3" cardBtn="Card Btn 3" cardText="Paragraph 3" cardTitle="Title 3"/>
             </div>
          </div>
        </div>
      </section>
    )
}


export default CardSection