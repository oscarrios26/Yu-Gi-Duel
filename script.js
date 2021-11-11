
    
    let thumbnail = document.querySelector(".leftaside");
    let leftPlayer = document.querySelector(".resetbtn");
        
    function displayCards(images) {
        
        for (let i = 0; i < 50; i++){
            // console.log(images[i].card_images[0].image_url)
            let imagesOfCards = images[i].card_images[0].image_url;
            // console.log(imagesOfCards);
            allCards=[imagesOfCards];
            console.log(allCards);
        }
    };

    
     

    
    async function fetchCards() {
    try {
    let cards = await axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php");
    let images = cards.data.data;
    console.log(images);
    console.log(typeof images)
    displayCards(images);
    }catch (error) {
    console.log(error);
    }finally {
        console.log("DONE");
    }
}
    fetchCards();
