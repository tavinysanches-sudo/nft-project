import './NFTCard.css'

function NFTCard() {
  return (
    <article className="nft-card">
      <div className="nft-image-container">
        <img
          src="https://images.unsplash.com/photo-1634986666676-ec8fd927c23d"
          alt="NFT artwork"
          className="nft-image"
        />
      </div>

      <h2>Equilibrium #3429</h2>

      <p className="description">
        Our Equilibrium collection promotes balance and calm.
      </p>

      <div className="nft-info">
        <span>♦️ 0.041 ETH</span>
        <span>◷ 3 days left</span>
      </div>

      <div className="creator">
        <span>Creation of</span>
        <strong> Jules Wyvern</strong>
      </div>
    </article>
  )
}

export default NFTCard