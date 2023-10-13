import {Component} from 'react'

import Loader from 'react-loader-spinner'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrencyTracker extends Component {
  state = {criptoData: [], isLoader: true}

  componentDidMount() {
    this.getCriptoData()
  }

  getCriptoData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    console.log(data)

    const newData = data.map(eachCurrency1 => ({
      id: data.id,
      currencyName: eachCurrency1.currency_name,
      usdValue: eachCurrency1.usd_value,
      euroValue: eachCurrency1.euro_value,
      currencyLogo: eachCurrency1.currency_logo,
    }))
    this.setState({criptoData: newData, isLoader: false})
  }

  render() {
    const {criptoData, isLoader} = this.state
    // const {id, currencyName, usdValue, euroValue, currencyLogo} = criptoData
    console.log(criptoData)
    return (
      <div className="main-container">
        {isLoader ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div>
            <h1 className="criptoHeading">Cryptocurrency Tracker</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png "
              alt="cryptocurrency"
            />
            <div className="criptoContainer">
              <div className="coinContainer">
                <p className="para1">Coin Type</p>
                <p className="usdPara">USD</p>
                <p className="euroPara">EURO</p>
              </div>
              <ul>
                {criptoData.map(eachItem => (
                  <CryptocurrencyItem
                    key={eachItem.id}
                    cryptoCurrency={eachItem}
                  />
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default CryptocurrencyTracker
