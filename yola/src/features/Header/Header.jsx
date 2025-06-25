import SearchBar from '../SearchBar/SearchBar';

function Header() {
  return (
    <header className="header">
      <h1>Reddit Client</h1>
      <SearchBar />
    </header>
  );
}

export default Header;