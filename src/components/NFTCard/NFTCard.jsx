import './NFTCard.css'

function NFTCard({ image, title, description, price, time, creator }) {
  return (
    <article className="nft-card animate_animated animate_fadeInUp">
      <div className="nft-image-container">
        <img
          src={image}
          alt={title}
          className="nft-image"
        />

        <div className="image-overlay">
          <span>◉</span>
        </div>
      </div>

      <h2>{title}</h2>

      <p className="description">
        {description}
      </p>

      <div className="nft-info">
        <span className="price">♦️ {price} ETH</span>
        <span className="time">◷ {time}</span>
      </div>

      <div className="creator">
        <div className="avatar"></div>

        <p>
          Creation of <strong>{creator}</strong>
        </p>
      </div>
    </article>
  )
}

export default NFTCard