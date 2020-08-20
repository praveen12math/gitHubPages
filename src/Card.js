import React from "react"

const Card = ({cardTitle="Card Title", cardText="Write Anything", cardBtn="Click", cardImg=""}) => {
  return (
    <div className="card" style={{width: "18rem"}}>
                <img
                  src={cardImg}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{cardTitle}</h5>
                  <p className="card-text">
                    {cardText}
                  </p>
                  <a href="#" className="btn btn-success">{cardBtn}</a>
                </div>
              </div>
  )
}

export default Card