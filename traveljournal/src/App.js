
import './App.css';
import Header from './components/Header/Header';
import Entry from './components/Entry/Entry';

function App() {
  return (
    <div>
      <header>
         <Header />
      </header>
      <main className="container">
                <Entry />
      </main>
    </div>
  );
}

export default App;
