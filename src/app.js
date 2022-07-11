import './styles/app.css'

import Header from './components/Header'
import LeftNav from './components/LeftNav'
import Main from './components/Main'

function App() {
  return (
    <div className="app">
      <Header/>
      <LeftNav/>
      <Main/>
    </div>
  )
}

export default App
