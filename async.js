const cardImageLeft = document.querySelector(".left");
const cardImageRight = document.querySelector(".right");




function displayCards(cards) {
console.log(cards);

let thumbnail = document.createElement("img");
thumbnail.setAttribute("src", cards.data[0].card_images[0].image_url);
cardImageLeft.appendChild(thumbnail);

let thumbnail2 = document.createElement("img");
thumbnail2.setAttribute("src", cards.data[0].card_images[0].image_url);
cardImageRight.appendChild(thumbnail2);


};






async function fetchcards() {
    try {
    let yougi = await axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php");
    let cards = yougi.data;
    
    console.log(cards);
    displayCards(cards);
    } catch (error) {
        console.log(error);
   } finally {
    console.log("DONE");
   }
}

fetchcards();