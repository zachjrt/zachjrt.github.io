const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
// Doesn't work
//const requestURL = 'byui-cit230.github.io/canvas-referenced/latter-day-prophets.json';



fetch(requestURL)
  .then(function(response)
  {
    return response.json();
  })
  .then(function (jsonObject) 
    {
      console.table(jsonObject);
      const prophets = jsonObject['prophets'];

      for (let i = 0; i < prophets.length; i++ ) 
        {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let birthPlace = document.createElement('p');
        let picture = document.createElement('img');
        let birthDate = document.createElement('p');

        h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;

        birthPlace.textContent = 'Place Born: ' + prophets[i].birthplace;
        birthDate.textContent = 'Birth Date: '+ prophets[i].birthdate;

        picture.setAttribute('src', prophets[i].imageurl);
        picture.setAttribute('alt', prophets[i].name + ' ' + prophets[i].lastname + '-' + i)

        card.appendChild(h2);
        card.appendChild(birthDate);
        card.appendChild(birthPlace);
        card.appendChild(picture);


        document.querySelector('div.cards').appendChild(card);
        }
    });
