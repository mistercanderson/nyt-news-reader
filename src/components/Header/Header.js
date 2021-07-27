import './Header.css';
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';

export default function Header({ stories, paths }) {
  return (
    <header>
      <Link to='/frontpage'>NYT News Reader</Link>
      <SearchBar stories={stories} paths={paths}/>
    </header>
  );
}
