/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-indent */
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
function Title() {
  const { loading, data } = useQuery(query);
  if (loading) return <p>Loading Anime ...</p>;
  console.log(data);
  let animeTitle = data.MediaListCollection.lists[0].entries;
  console.log(animeTitle);


  return (
     <>
       <div>
        {animeTitle && animeTitle.map(item => (
          <div key={item.id}>{item.media.title.english}</div>
        ))}
       </div>
    </>
    
  );
}
export default Title;
