const URL =
  'https://iskarr.github.io/austindonovan.github.io/api/business.json';

let cards = document.querySelector('div.container');

fetch(URL)
  .then((response) => response.json())
  .then((jsObject) => {
    let business = jsObject.business;

    console.log(business);
    for (let i = 0; i < business.length; i++) {
      // You must include your javascript below to display the following information:
      // 1. business names, 2.business image,
      // 3. business locations, 4. business descriptions
      // Here is an example for the name to start you off.

      // Creates card and places business name in h2 element
      let card = document.createElement('section');
      // Adds a classname to the section element above
      card.className = 'card';

      let h2 = document.createElement('h2');
      h2.className = 'card-h2 card-info';
      h2.textContent = business[i].name;
      card.appendChild(h2);
      document.querySelector('div.container').appendChild(card);

      let img = document.createElement('img');
      img.className = 'card-img';
      img.src = business[i].imageurl;
      card.appendChild(img);
      document.querySelector('div.container').appendChild(card);

      let para = document.createElement('p');
      para.className = 'card-para card-info';
      para.textContent = business[i].description;
      card.appendChild(para);
      document.querySelector('div.container').appendChild(card);

      let address = document.createElement('p');
      address.className = 'card-address card-info';
      address.textContent = ('Address:', business[i].address);
      card.appendChild(address);
      document.querySelector('div.container').appendChild(card);

      // Create the image location, you can look up how to add image using javascript

      // Include a business location

      // Include a business Description
    }
  });
