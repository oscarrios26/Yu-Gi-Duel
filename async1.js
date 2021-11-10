
    
    
    
    
    
    
    
    
    async function fetchCards() {

    let cards = await axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php");
    
    console.log(cards);

    }

    fetchCards();
