const randomName = [
  "Tigger",
  "Tiger",
  "Max",
  "Smokey",
  "Sam",
  "Kitty",
  "Sassy",
  "Shadow",
  "Simba",
  "Patch",
  "Lucky",
  "Misty",
  "Sammy",
  "Princess",
  "Oreo",
  "Samantha",
  "Charlie",
  "Boots",
  "Oliver",
  "Lucy",
  "Precious",
  "Missy",
  "Oscar",
  "Fluffy",
  "Whiskers",
  "Gizmo",
  "Taz",
  "Molly",
  "Midnight",
  "Buddy",
  "Baby",
  "Toby",
  "Spike",
  "Sophie",
  "Rusty",
  "Pumpkin",
  "Jake",
  "Alex",
  "Maggie",
  "Callie",
  "Buster",
  "Sylvester",
  "Rocky",
  "Pepper",
  "Milo",
  "Daisy",
  "Cleo",
  "Chloe",
  "Angel",
  "Dusty"
];

const randomBreed = [
  "tux",
  "ginger",
  "calico",
  "black",
  "tabby",
  "British Shorthair",
  "Persian",
  "Siamese",
  "Maine Coon",
  "Ragdoll",
  "Sphynx",
  "Bengal",
  "Abyssinain",
  "Russian Blue",
  "Unknown",
  "Birman",
  "Burmese",
  "Scottish Fold",
  "Norwegian Forest",
  "Siberian"
]

const randomCat = () => {
  const name = randomName[Math.floor(Math.random() * randomName.length)];
  const age = Math.ceiling(Math.random() * 16);
  const breed = randomBreed[Math.floor(Math.random() * randomBreed.length)];
  const newCat = {
    name: name,
    age: age,
    breed: breed
  };
  return newCat;
};


module.exports = {
  randomCat
}