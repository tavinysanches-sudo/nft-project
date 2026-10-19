import './NFTCard.css'

function NFTCard() {
  return (
    <article className="nft-card">
      <div className="nft-image-container">
        <img
          src="https://images.unsplash.com/photo-1634986666676-ec8fd927c23d"
          alt="Abstract digital artwork"
          className="nft-image"
        />

        <div className="image-overlay">
          <span>◉</span>
        </div>
      </div>

      <h2>Equilibrium #3429</h2>

      <p className="description">
        Our Equilibrium collection promotes balance and calm.
      </p>

      <div className="nft-info">
        <span className="price">♦️ 0.041 ETH</span>
        <span className="time">◷ 3 days left</span>
      </div>

      <div className="creator">
        <div className="avatar"></div>

        <p>
          Creation of <strong>Jules Wyvern</strong>
        </p>
      </div>
    </article>
  )
}

export default NFTCard