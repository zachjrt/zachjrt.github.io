const requestURL = './json/business.json';


fetch(requestURL)
  .then(function(response)
  {
    return response.json();
  })
  .then(function (jsonObject) 
    {
      console.table(jsonObject);
      const commerce = jsonObject['business'];

      for (let i = 0; i < commerce.length; i++ ) 
        {
        let card = document.createElement('section');
        let h4 = document.createElement('h4');
        let picture = document.createElement('img');
        let address = document.createElement('p');
        let cityName = document.createElement('p');
        let phoneNumber = document.createElement('p');
        let website = document.createElement('a');

        h4.textContent = commerce[i].name;

        
        address.textContent = 'Street Address: '+ commerce[i].streetAddress;
        cityName.textContent = '' + commerce[i].city + ', ' + commerce[i].state + ', ' + commerce[i].postalCode;
        website.textContent = '' + commerce[i].mainAddress;
        phoneNumber.textContent = '' + commerce[i].number;


        website.setAttribute('href', commerce[i].mainAddress);
        picture.setAttribute('src', commerce[i].img);
        picture.setAttribute('alt', commerce[i].name + ' ' +  'picture')


        card.appendChild(h4);
        card.appendChild(address);
        card.appendChild(cityName);
        card.appendChild(phoneNumber);
        card.appendChild(website);
        card.appendChild(picture);


        document.querySelector('div.cards').appendChild(card);
        }
    });