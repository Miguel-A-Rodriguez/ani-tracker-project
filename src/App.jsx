/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-indent */

import './App.css';
import { gql, useQuery } from '@apollo/client';
import React from 'react';

const query = gql`
 {
  MediaListCollection(userId: 847462, type: ANIME) {
  
lists {
  entries {
    id
    progress
    media{
    title {
      english
    }
      bannerImage
      
    }
  }
}
user {
  name
}

}

},
`;
function App() {
  const { loading, data } = useQuery(query);
  if (loading) return <p>Loading Anime ...</p>;
  console.log(data);
  let animeProgress = data.MediaListCollection.lists[0].entries;
  console.log(animeProgress);

  animeProgress = animeProgress.map((item) => <div className="imgs"><img key={item.id} src={item.media.bannerImage} alt="broken" /></div>);

  return (
    <>
    <section>
      <h1>Welcome to ani-chart</h1>
       <div>{animeProgress}</div>
       </section>
    </>
    
  );
}
export default App;
