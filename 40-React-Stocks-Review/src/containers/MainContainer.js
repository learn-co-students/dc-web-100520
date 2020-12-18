import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stocks: [],
    portfolio: [],
    sort: "",
    filter: "All"
  }

  
  componentDidMount(){
    const URL = 'http://localhost:3001/stocks'
    fetch(URL)
      .then(res => res.json())
      .then(stocks => this.setState({ stocks }))
  }

  addStock = (stock) => {
    if(!this.state.portfolio.includes(stock)){
      this.setState({portfolio: [...this.state.portfolio, stock]})
    }
  }

  removeStock = (stock) => {
    
    let newPort = this.state.portfolio.filter(
      portStock => portStock !== stock
    )

    this.setState({portfolio: newPort})
  }

  changeSort = (sort) => this.setState({sort: sort})

  changeFilter = (filter) => this.setState({filter: filter})

  stocksToDisplay = () => {
    //make a copy of all the stocks in state
    let displayStocks = [...this.state.stocks]
    //Check to see if the filter is All
    //If it isnt, we need to filter over the stocks in state and return the ones
    //where the stock.type === this.state.filter
    if(this.state.filter !== "All"){
      displayStocks = displayStocks.filter(
        stock => stock.type === this.state.filter
      )
    }
    //Once array is filtered
    //Check for the sort in state
    if(this.state.sort === "Alphabetically"){
      return displayStocks.sort((stock1, stock2) => stock1.name > stock2.name ? 1 : -1  )
    }else if(this.state.sort === "Price"){
      return displayStocks.sort((stock1, stock2) => stock1.price > stock2.price ? 1 : -1  )
    } else {
      return displayStocks
    }
      //If the sort is Alph we sort one way
      //If the sort is Price we will sort another
      //If there is no sort we will just return 

  }


  render() {

    let displayStock = this.stocksToDisplay() 

    return (
      <div>
        <SearchBar
          changeSort={this.changeSort}
          changeFilter={this.changeFilter}
          sort={this.state.sort}
        />

          <div className="row">
            <div className="col-8">

              <StockContainer
                stockData={displayStock}
                addStock={this.addStock}
              />

            </div>
            <div className="col-4">

              <PortfolioContainer
                stockData={this.state.portfolio}
                removeStock={this.removeStock}
              />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
