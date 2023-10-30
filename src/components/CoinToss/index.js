// Write your code here
import {Component} from 'react'

import './index.css'

const headImg = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailImg = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {tossResultsImg: headImg, heads: 0, tails: 0}

  onClickButton = () => {
    const {heads, tails} = this.state
    const tossResult = Math.floor(Math.random() * 2)

    let totalTossImg = ''
    let totalHeads = heads
    let totalTails = tails

    if (tossResult === 0) {
      totalHeads += 1
      totalTossImg = headImg
    } else {
      totalTails += 1
      totalTossImg = tailImg
    }
    this.setState({
      tossResultsImg: totalTossImg,
      heads: totalHeads,
      tails: totalTails,
    })
  }

  render() {
    const {tossResultsImg, heads, tails} = this.state
    const totalResultCount = heads + tails

    return (
      <div className="main-bg-container">
        <div className="main-card-container">
          <h1 className="main-heading">Coin Toss Game</h1>
          <p className="main-paragraph">Heads (or) Tails</p>
          <img src={tossResultsImg} alt="toss result" className="image-logo" />
          <div>
            <button
              type="button"
              className="button"
              onClick={this.onClickButton}
            >
              Toss Coin
            </button>
          </div>
          <div className="para-container">
            <p className="details-para">Total: {totalResultCount}</p>
            <p className="details-para">Heads: {heads}</p>
            <p className="details-para">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
