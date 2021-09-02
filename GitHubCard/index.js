/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
   

  // axios.get(`https://api.github.com/users/tetondan`)
  //   .then(resp => {
      
  //     document.querySelector('.cards').appendChild(cardMaker(resp.data));
  //     // document.body.appendChild(cardMaker(resp.data));
  //     console.log(cardMaker(resp.data));
  //     console.log(resp.data);
  //   })
  //   .catch(err => {
  //     const errorText = document.createElement('p');
  //     errorText.textContent = 'failed';
  //     document.body.appendChild(errorText);
  //     console.log(err);
  //   })
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const infoCard = document.querySelector('.cards');
const followersArray = [
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell'
];
followersArray.forEach(user =>{
  axios.get(`https://api.github.com/users/${user}`)
    .then(resp => {
      const profileCard = cardMaker(resp.data);
      infoCard.appendChild(profileCard)     
    })
})

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function cardMaker ({ avatar_url , name , login , location , html_url , followers , following , bio }) {
  const card = document.createElement('div')
  const image = document.createElement('img')
  const cardInfo = document.createElement('div')
  const personalName = document.createElement('h3')
  const userName = document.createElement('p')
  const place = document.createElement('p')
  const profile = document.createElement('p')
  const gitHub = document.createElement('a')
  const userFollowers = document.createElement('p')
  const userFollowing = document.createElement('p')
  const about = document.createElement('p')


//appending
card.appendChild(image)
card.appendChild(cardInfo)
cardInfo.appendChild(personalName)
cardInfo.appendChild(userName)
cardInfo.appendChild(place)

cardInfo.appendChild(profile)
cardInfo.appendChild(userFollowers)
cardInfo.appendChild(userFollowing)
cardInfo.appendChild(about)

// adding classes
card.classList.add('card')
cardInfo.classList.add('card-info')
personalName.classList.add('name')
userName.classList.add('username')
gitHub.href = `${html_url}`
//assigning 
place.textContent = `Location: ${location}`

image.src = avatar_url
personalName.textContent = `${name}`
userName.textContent = `${login}`
gitHub.innerHTML = `${html_url}`
// profile.innerHTML = `Profile: ${profile.innerHTML}`
profile.textContent = 'Profile: '
userFollowers.textContent = `Followers: ${followers}`
userFollowing.textContent = `Following: ${following}`
about.textContent = `Bio: ${bio}`
profile.appendChild(gitHub)


return card;
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
