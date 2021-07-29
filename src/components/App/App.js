import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import { getTopStories } from '../../apiCalls';
import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import HeadlinesContainer from '../HeadlinesContainer/HeadlinesContainer';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Story from '../Story/Story';

function App() {
  const [storyData, setStoryData] = useState([]);
  const [storyPaths, setStoryPaths] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    getTopStories()
      .then((data) => setStoryData(data.results))
      .catch(() => setError(true));
  }, []);

  useEffect(() => {
    const paths = storyData.map((s) => {
      return s.url.split('/').pop().split('.').shift();
    });
    setStoryPaths(paths);
  }, [storyData]);

  return (
    <div className='App'>
      <Header stories={storyData} paths={storyPaths} />
      {error && <ErrorMessage />}
      <Switch>
        <Route
          exact
          path='/'
          render={() => (
            <HeadlinesContainer storyData={storyData} storyPaths={storyPaths} />
          )}
        />
        <Route
          exact
          path='/:storyPath'
          render={({ match }) => {
            const { storyPath } = match.params;
            const index = storyPaths.indexOf(storyPath);
            if (index >= 0) {
              const story = storyData[index];
              return <Story story={story} path={storyPath} />;
            }
            return <Redirect to='/' />;
          }}
        />
      </Switch>
      <Redirect to='/' />
    </div>
  );
}

export default App;
