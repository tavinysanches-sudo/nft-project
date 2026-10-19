import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <span>◈</span>
        NFTERRA
      </div>

      <nav>
        <a href="#collection">Collection</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  )
}

export default Header