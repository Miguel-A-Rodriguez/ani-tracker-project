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
function Progress() {
  const { loading, data } = useQuery(query);
  if (loading) return <p>Loading Anime ...</p>;
  console.log(data);
  let animeProgress = data.MediaListCollection.lists[0].entries;
  console.log(animeProgress);


  return (
     <>
       <div>
        {animeProgress && animeProgress.map(item => (
          <div key={item.id}>{item.progress}</div>
        ))}
       </div>
    </>
    
  );
}
export default Progress;