import './Story.css';
import StoryHeadline from './StoryHeadline/StoryHeadline';
import StoryDetails from './StoryDetails/StoryDetails';
import { useState, useEffect } from 'react';

export default function Story({ story }) {
  const [details, setDetails] = useState({});

  useEffect(() => {
    setDetails({
      abstract: story.abstract,
      imageUrl: story.multimedia[0].url,
      imageCaption: story.multimedia[0].caption,
      imageCopyright: story.multimedia[0].copyright,
      link: story.short_url,
      section: story.section,
    });
  }, [story]);

  return (
    <div className='story-container'>
      <StoryHeadline title={story.title} byline={story.byline} />
      <StoryDetails details={details} />
    </div>
  );
}
