
    
    
    function displayCards(card){
console.log(card);
    }
    
    
    
    
    
    async function fetchCards() {
    try {
    let cards = await axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php");
    
    console.log(cards);
    displayCards(cards.data);
    }catch (error) {
    console.log(error);
    }finally {
        console.log("DONE");
    }
}
    fetchCards();
