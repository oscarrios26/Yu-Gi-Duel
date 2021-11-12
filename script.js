
    
    let leftbuttonn = document.querySelector("#leftbtn");
    let rightdiv = document.querySelector(".right");
    newArr =[];

    function displayCards(images) {
        
        for (let i = 0; i < 50; i++){
            //  console.log(images[i].card_images[0].image_url)
            let imagesOfCards = images[i].card_images[0].image_url;
        
            newArr.push(imagesOfCards)
            setRandomCards();
        }


    };

        function setRandomCards(){
        const randomItem = newArr[Math.floor(Math.random()*newArr.length)];
        console.log(randomItem);
        let img = document.querySelector("img");
        img.setAttribute("src", randomItem);
        };

    // displayCards(im)

        // leftbuttonn.addEventListener("submit", () => {
        //     console.log("sdsdsfdf");
        
        // });

       
      
        
      
       
    
    

    
    
    
    async function fetchCards() {
    try {
    let cards = await axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php");
    let images = cards.data.data;
    // console.log(images);
    // console.log(typeof images)
    displayCards(images);
    }catch (error) {
    console.log(error);
    }finally {
        console.log("DONE");
    }
}
    fetchCards();
