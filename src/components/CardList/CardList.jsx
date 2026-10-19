import './CardList.css'
import NFTCard from '../NFTCard/NFTCard'

const nfts = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1634986666676-ec8fd927c23d',
    title: 'Equilibrium #3429',
    description: 'Our Equilibrium collection promotes balance and calm.',
    price: '0.041',
    time: '3 days left',
    creator: 'Jules Wyvern',
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4',
    title: 'Aurora #1842',
    description: 'A colorful digital artwork inspired by the night sky.',
    price: '0.056',
    time: '5 days left',
    creator: 'Maya Stone',
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1633279302651-0eeb6c5b8f5d',
    title: 'Cyber Dream #7210',
    description: 'A futuristic journey through digital imagination.',
    price: '0.078',
    time: '2 days left',
    creator: 'Alex Morgan',
  },
  {
    id: 4,
    image:
      'https://images.unsplash.com/photo-1634986666676-ec8fd927c23d',
    title: 'Neon Genesis #9031',
    description: 'A unique piece from our neon digital collection.',
    price: '0.063',
    time: '6 days left',
    creator: 'Luna Carter',
  },
]

function CardList() {
  return (
    <section className="card-list">
      {nfts.map((nft) => (
        <NFTCard
          key={nft.id}
          image={nft.image}
          title={nft.title}
          description={nft.description}
          price={nft.price}
          time={nft.time}
          creator={nft.creator}
        />
      ))}
    </section>
  )
}

export default CardList