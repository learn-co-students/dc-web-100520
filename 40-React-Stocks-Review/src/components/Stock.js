import React from 'react'

const Stock = ({ stockData, clickAction }) => (
  <div onClick={() => clickAction(stockData)}>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{
            stockData.name
          }</h5>
        <p className="card-text">{
            `${stockData.ticker}: ${stockData.price}`
          }</p>
      </div>
    </div>
  </div>
);

export default Stock
