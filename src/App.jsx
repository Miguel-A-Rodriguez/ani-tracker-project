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
    episodes
    title {
      english
    }
      coverImage {
        medium
        large
        color
      }
      nextAiringEpisode{
			airingAt
			}
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

  const animeEntries = data.MediaListCollection.lists[0].entries;

  const generateDayOfWeek = (timestamp) => {
    console.log({ timestamp }); 
    var a = new Date(timestamp*1000);
    console.log({ timestamp });
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var dayOfWeek = days[a.getDay()] 
    console.log({ timestamp });
    return dayOfWeek
    
  };

    
    return (
    <>
    <section>
    <h1 className="header-container">Welcome to ani-chart</h1>
      <div className="overall-container">
      {animeEntries && animeEntries.map(({ media, progress, id }) => (
        <>
        
        <span key={id}>
        <div>{media.nextAiringEpisode ? generateDayOfWeek(media.nextAiringEpisode.airingAt) :null }</div>
        <div>{media.nextAiringEpisode === null ? "Finished Airing" : null}</div> 
          <img src={media.coverImage.large} alt="broken link"/>
          <div className="ani-titles">{media.title.english}</div>
          <div className="ani-progress">{progress}</div>/
          <div className="ani-episodes">{media.episodes}</div>
        </span>
        </>
      ))}
      </div>
       </section>
    </>
  );
}



export default App;


  // /// Images ///
  // let animeImages = data.MediaListCollection.lists[0].entries;
  // console.log(animeImages);

  // animeImages = animeImages.map((item) => <div className="imgs"><img key={item.id} src={item.media.coverImage.medium} alt="broken" /></div>);
  // //////// Titles //////
  
  // let animeTitles = data.MediaListCollection.lists[0].entries;
  //   console.log({ animeTitles });
  //   animeTitles = animeTitles.map((item) => <div className="Titles" key={item.id}> {item.media.title.english}</div>);    
    
  // //// Progress ////  
  // let animeProgress = data.MediaListCollection.lists[0].entries;
  // console.log(animeProgress);
  // animeProgress = animeProgress.map((item) => <div className="Progress" key={item.id}> {item.progress}</div>);
  // /// Total Episodes ///
  // let animeEpisodes = data.MediaListCollection.lists[0].entries;
  //   console.log({ animeEpisodes });
  //   animeEpisodes = animeEpisodes.map((item) => <div className="Titles" key={item.id}> {item.media.episodes}</div>);
  // /// Time Until Next Episode
  // let animeTime = data.MediaListCollection.lists[0].entries;
  // console.log({ animeTime });


/* <span>
      <div classNme="ani-titles">{animeTitles[0]}</div>
      <div className="ani-progress">{animeProgress[0]}</div>
      <div className="ani-episodes">{animeEpisodes[0]}</div>
      </span>
      <div className="ani-images">{animeImages[1]}</div>
      <span>
      <div classNme="ani-titles">{animeTitles[1]}</div>
      <div className="ani-progress">{animeProgress[1]}</div>/
      <div className="ani-episodes">{animeEpisodes[1]}</div>
      </span>
      <div className="ani-images">{animeImages[2]}</div>
      <span>
      <div classNme="ani-titles">{animeTitles[2]}</div>
      <div className="ani-progress">{animeProgress[2]}</div>/
      <div className="ani-episodes">{animeEpisodes[2]}</div>
      </span>

      <div className="ani-images">{animeImages[3]}</div>
      <span>
      <div classNme="ani-titles">{animeTitles[3]}</div>
      <div className="ani-progress">{animeProgress[3]}</div>/
      <div className="ani-episodes">{animeEpisodes[3]}</div>
      </span>
      <div className="ani-images">{animeImages[4]}</div>
      <span>
      <div classNme="ani-titles">{animeTitles[4]}</div>
      <div className="ani-progress">{animeProgress[4]}</div>/
      <div className="ani-episodes">{animeEpisodes[4]}</div>
      </span>

      <div className="ani-images">{animeImages[5]}</div>
      <span>
      <div classNme="ani-titles">{animeTitles[5]}</div>
      <div className="ani-progress">{animeProgress[5]}</div>/
      <div className="ani-episodes">{animeEpisodes[5]}</div>
      </span> */