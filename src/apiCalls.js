const apiKey = process.env.REACT_APP_NYT_API_KEY;

export const getTopStories = (type = 'home') => {
  return fetch(
    `https://api.nytimes.com/svc/topstories/v2/${type}.json?api-key=${apiKey}`
  ).then((res) => {
    if (res.ok) return res.json();
    throw new Error(res);
  });
};
