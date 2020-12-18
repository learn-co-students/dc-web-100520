import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {this.props.stockData.map(
          stock => <Stock clickAction={this.props.addStock} stockData={stock} key={stock.id}/>
        )}
      </div>
    );
  }

}

export default StockContainer;
