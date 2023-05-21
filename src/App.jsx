import React from 'react'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.item = {
      brand: 'Tiger of Sweden',
      title: 'Leonard coat',
      description: 'Minimalistic coat in cotton-blend',
      descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
      price: 399,
      currency: '£'
    }
  }

  ShopItemFunc = () => {
    return (
      <div className="main-content">
        <h2>{this.item.brand}</h2>
        <h1>{this.item.title}</h1>
        <h3>{this.item.description}</h3>
        <div className="description">
          {this.item.descriptionFull}
        </div>
        <div className="highlight-window mobile"><div className="highlight-overlay"></div></div>
        <div className="divider"></div>
        <div className="purchase-info">
          <div className="price">{this.item.currency}{this.item.price},00</div>
          <button>Добавить в корзину</button>
        </div>
      </div>
    )
  }

  render() {

    
    // Внутри компонента App
    return (
      <div className="container">
        <div className="background-element">
        </div>
        <div className="highlight-window">
          <div className='highlight-overlay'></div>
        </div>
        <div className="window">
          <this.ShopItemFunc/>
        </div>
      </div>
    )
  }
}

export default App
