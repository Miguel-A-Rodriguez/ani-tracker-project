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
  let animeImages = data.MediaListCollection.lists[0].entries;
  console.log(animeImages);

  animeImages = animeImages.map((item) => <div className="imgs"><img key={item.id} src={item.media.bannerImage} alt="broken" /></div>);
  //////// Titles //////
  
  let animeTitles = data.MediaListCollection.lists[0].entries;
    console.log(animeTitles);
    animeTitles = animeTitles.map((item) => <div className="Titles" key={item.id}> {item.media.title.english}</div>);    
    
  //// Progress ////  
  let animeProgress = data.MediaListCollection.lists[0].entries;
  console.log(animeProgress);
  animeProgress = animeProgress.map((item) => <div className="Progress" key={item.id}> {item.progress}</div>);

  return (
    <>
    <section>
      <h1 className="header-container">Welcome to ani-chart</h1>
      <div className="ani-images">{animeImages[0]}</div>
      <span>
      <div classNme="ani-titles">{animeTitles[0]}</div>
      <div className="ani-progress">{animeProgress[0]}</div>
      </span>
      <div className="ani-images">{animeImages[1]}</div>
      <span>
      <div classNme="ani-titles">{animeTitles[1]}</div>
      <div className="ani-progress">{animeProgress[1]}</div>
      </span>
      <div className="ani-images">{animeImages[2]}</div>
      <span>
      <div classNme="ani-titles">{animeTitles[2]}</div>
      <div className="ani-progress">{animeProgress[2]}</div>
      </span>

      <div className="ani-images">{animeImages[3]}</div>
      <span>
      <div classNme="ani-titles">{animeTitles[3]}</div>
      <div className="ani-progress">{animeProgress[3]}</div>
      </span>
       </section>
    </>
    
  );
}
export default App;
