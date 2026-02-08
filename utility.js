// Fetches a random dog image from the Dog API
async function getRandomDogImage() {
  const response = await fetch('https://dog.ceo/api/breeds/image/random');
  const data = await response.json();
  return data.message; // URL of the dog image
}

// Fetches a random cat image from The Cat API
async function getRandomCatImage() {
  const response = await fetch('https://api.thecatapi.com/v1/images/search');
  const data = await response.json();
  return data[0].url; // URL of the cat image
}