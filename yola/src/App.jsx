import Header from './features/Header/Header';
import PostsList from './features/Posts/PostsList';
import './styles.css';

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>

      <main>
        <section >
          <PostsList />
        </section>
      </main>
    </div>
  );
}

export default App;