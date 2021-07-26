import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import { getTopStories } from '../../apiCalls';
import { useState, useEffect, useRef } from 'react';

function App() {
  const [topStories, setTopStories] = useState([]);
  const [images, setImages] = useState([]);
  const [error, setError] = useState(false);

  const mapImages = useRef();

  useEffect(() => {
    getTopStories()
      .then((data) => setTopStories(data.results))
      .catch(() => setError(true));
  }, []);

  mapImages.current = () => {
    return topStories.map((s, i) => (
      <img key={i} src={s.multimedia[0].url} alt={s.title} />
    ));
  };

  useEffect(() => {
    setImages(mapImages.current());
  }, [topStories]);

  return (
    <Switch>
      <Route exact path='/frontpage' render={() => <div>{images}</div>}></Route>
      <Redirect to='/frontpage' />
    </Switch>
  );
}

export default App;
