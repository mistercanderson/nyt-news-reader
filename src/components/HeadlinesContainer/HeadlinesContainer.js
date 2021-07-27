import './HeadlinesContainer.css';
import StoryHeadline from '../Story/StoryHeadline/StoryHeadline';

export default function StoriesContainer({ storyData, storyPaths }) {
  const mapStories = () => {
    return storyData.map((s, i) => (
      <StoryHeadline
        key={i}
        title={s.title}
        byline={s.byline}
        path={storyPaths[i]}
      />
    ));
  };

  return <div className='headlines-container'>{mapStories()}</div>;
}
