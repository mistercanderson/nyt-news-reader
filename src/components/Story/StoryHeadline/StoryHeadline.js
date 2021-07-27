import './StoryHeadline.css';
import { Link } from 'react-router-dom';

export default function StoryHeadline({ title, byline, path, handleClick }) {
  return (
    <div className='headline-container'>
      <Link to={`/${path}`} onClick={handleClick}>
        <h2>{title}</h2>
        <p>
          <em>{byline}</em>
        </p>
      </Link>
    </div>
  );
}
