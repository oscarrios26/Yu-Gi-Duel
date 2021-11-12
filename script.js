
    
    let player1Btn = document.querySelector(".btn");
    let rightAside = document.querySelector(".right")
    
    
    newArr =[];

    function displayCards(images) {
        
        for (let i = 0; i < 50; i++){
            
            let imagesOfCards = images[i].card_images[0].image_url;
        
            newArr.push(imagesOfCards)
            setRandomCardLeft();
            setRandomCardRight();
           }
        };

        
        
        function setRandomCardLeft(){
        const randomItem = newArr[Math.floor(Math.random()*newArr.length)];
        console.log(randomItem);
        let img = document.querySelector("#leftCard");
        img.setAttribute("src", randomItem);
        };
            
        
        
            function setRandomCardRight(){
            const randomItemRight = newArr[Math.floor(Math.random()*newArr.length)];
            console.log(randomItemRight);
            let img = document.querySelector("#rightCard");
            img.setAttribute("src", randomItemRight);
            };

        

       
        
        
   
        // function setRandomCardRight(){
        
        //     let imgRight = document.createElement("img");
        //     imgRight.src = randomItem;
        //     rightAside.appendChild(imgRight);

        // }
            
            
        
      
        
      
       
    
    

    
    
    
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
