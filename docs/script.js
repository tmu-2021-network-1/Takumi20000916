const uri = 'https://script.google.com/macros/s/AKfycbxyacpN8y4nxSAnU0Eji6E_rBRDFTY7YoWWFa0clY5ELRhskgpt/exec';
const id = '1BpGnuwC4lZf9G2yFyiSrxbJuGO8gviV8mr-I2D3x4vA';
const sheet = 'Studio';
const endpoint = `${uri}?id=${id}&sheet=${sheet}`;

const renderJson = (json) => {
  const studios = json.records;
  studios.pop();
  
  studios.forEach(studio => {
   const studioDiv = document.createElement('div');

   const studioTitle = document.createElement('div');
   studioTitle.className = 'studio-title';
   studioTitle.textContent = studio['name-ja'];

   const studioT = document.createElement('div');
   studioT.className = 'studio-t';
   studioT.textContent = studio['core-ja'];

   const description = document.createElement('div');
   description.className = 'description ';
   description.textContent = studio['description-ja'];

   const studioImage = document.createElement('img');
   studioImage.className = 'studio-image';
   studioImage.src = studio['photo1'];
   studioImage.alt = 'スタジオの画像。';

   studioDiv.appendChild(studioImage);
   studioDiv.appendChild(studioTitle);
   studioDiv.appendChild(studioT);
   studioDiv.appendChild(description);

   document.getElementById('studios').appendChild(studioDiv);
 });
  /*document.getElementById('result').textContent = JSON.stringify(json, null, 2);*/
}

const getData = async () => {
  try {
    const response = await fetch(endpoint);
    if (response.ok) {
      const jsonResponse = await response.json();
			renderJson(jsonResponse);
    }
  }
  catch (error) {
    console.log(error);
  }
}

getData();