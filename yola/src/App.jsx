import Header from './features/Header/Header';
import PostsList from './features/Posts/PostsList';
import './styles.css';

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>

      <main className="main" style={{ padding: '24px' }}>
        <section className="mainFeed">
          <PostsList />
        </section>
      </main>
    </div>
  );
}

export default App;