import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import { getTopStories } from '../../apiCalls';
import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import HeadlinesContainer from '../HeadlinesContainer/HeadlinesContainer';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Story from '../Story/Story';
import Modal from '@material-ui/core/Modal';

function App() {
  const [storyData, setStoryData] = useState([]);
  const [storyPaths, setStoryPaths] = useState([]);
  const [storyRoutes, setStoryRoutes] = useState([]);
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

  const createStory = (storyData, storyPath) => {
    return <Story story={storyData} path={storyPath} />;
  };

  useEffect(() => {
    const routes = storyPaths.map((p, i) => (
      <Route
        exact
        key={i}
        path={`/${p}`}
        render={() => createStory(storyData[i], p)}
      ></Route>
    ));
    setStoryRoutes(routes);
  }, [storyPaths]);

  return (
    <div className='App'>
      <Header stories={storyData} paths={storyPaths} />
      {error && <ErrorMessage />}
      <Switch>
        <Route
          exact
          path='/frontpage'
          render={() => (
            <HeadlinesContainer storyData={storyData} storyPaths={storyPaths} />
          )}
        ></Route>
        {storyRoutes}
        <Redirect to='/frontpage' />
      </Switch>
    </div>
  );
}

export default App;
