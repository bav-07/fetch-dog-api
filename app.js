console.log("Hello dogs!");

// Function for fetching the dog
const fetchDog = async () => {
    console.log("dog button pressed!");
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const jsonData = await response.json();
    const image = document.querySelector("img");
    image.src = jsonData.message;

    const breedResponse = await fetch("https://dog.ceo/api/breed/corgi/images");
    const breedJsonData = await breedResponse.json();
    
    const imagesContainer = document.createElement("div");

    breedJsonData.message.forEach((dogImageUrl) => {
        const dogImage = document.createElement("img");
        dogImage.src = dogImageUrl;
        dogImage.alt = "Image of a dog";
        imagesContainer.appendChild(dogImage);
    });

    document.querySelector("body").appendChild(imagesContainer);
    
    console.log(breedJsonData);

    // fetch("https://dog.ceo/api/breeds/image/random")
    // .then((response) => {
    //     // do stuff here
    //     // validate whatever
    //     return response.json();
    // })
    // .then((jsonData) => {
    //     // sort data
    //     // modify data
    //     console.log(jsonData);
    //     const image = document.querySelector("img");
    //     image.src = jsonData.message;
    // })
}

//// ANOTHER way to write the above 2 .then methods
// .then(response => response.json)
// .then(jsonData => document.querySelector("img").src = jsonData.message)

// Grab the button with query selector
const button = document.querySelector("button");

// Call the function when the button is clicked
button.addEventListener("click", fetchDog);