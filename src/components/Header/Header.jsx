import './Header.css'
import logo from '../../assets/logo.png'

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="NFTERRA" className="logo" />

      <nav>
        <a href="#collection">Collection</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  )
}

export default Header