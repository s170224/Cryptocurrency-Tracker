import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoCurrency} = props
  const {id, currencyName, usdValue, euroValue, currencyLogo} = cryptoCurrency

  return (
    <li>
      <div className="currencyContainer">
        <div className="logoContainer">
          <img src={currencyLogo} alt={currencyName} className="logoImage" />
          <p className="paraCurrency">{currencyName}</p>
        </div>
        <div className="usdContainer">
          <p className="para2">{usdValue}</p>
          <p className="para2">{euroValue}</p>
        </div>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
