import './Header.css';
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <Link to='/frontpage'>NYT News Reader</Link>
      <SearchBar />
    </header>
  );
}
