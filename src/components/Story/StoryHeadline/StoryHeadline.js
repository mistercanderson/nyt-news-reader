import './StoryHeadline.css';
import { Link } from 'react-router-dom';

export default function StoryHeadline({ title, byline, path }) {
  return (
    <div className='headline-container'>
      <Link to={`/${path}`}>
        <h2>{title}</h2>
        <p>
          <em>{byline}</em>
        </p>
      </Link>
    </div>
  );
}
