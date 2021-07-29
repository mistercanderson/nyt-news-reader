import './StoryHeadline.css';
import { Link } from 'react-router-dom';

export default function StoryHeadline({ title, byline, path, disableLink }) {
  return (
    <div className={`headline-container ${disableLink && 'disabled-link'}`}>
      <Link to={`/${path}`}>
        <h2>{title}</h2>
        <p>
          <em>{byline}</em>
        </p>
      </Link>
    </div>
  );
}