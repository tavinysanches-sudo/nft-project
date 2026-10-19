import './App.css'
import Header from './components/Header/Header'
import CardList from './components/CardList/CardList'

function App() {
  return (
    <>
      <Header />

      <main className="app" id="collection">
        <CardList />
      </main>
    </>
  )
}

export default App