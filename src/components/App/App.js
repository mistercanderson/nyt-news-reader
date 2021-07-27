import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import { getTopStories } from '../../apiCalls';
import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import HeadlinesContainer from '../HeadlinesContainer/HeadlinesContainer';
import Story from '../Story/Story';

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

  const createStory = (storyData) => {
    return <Story story={storyData} />;
  };

  useEffect(() => {
    const routes = storyPaths.map((p, i) => (
      <Route
        exact
        key={i}
        path={`/${p}`}
        render={() => createStory(storyData[i])}
      ></Route>
    ));
    setStoryRoutes(routes);
  }, [storyPaths]);

  // const mapStories = () => {
  //   return storyData.map((s, i) => {
  //     const story = <Story story={s} />;
  //     return createRoute(storyPaths[i], story, i);
  //   });
  // };

  // useEffect(() => {
  //   return storyData.map((s, i) => <Story key={i} storyData={s} />);
  // }, [storyData]);

  return (
    <div className='App'>
      <Header />
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
