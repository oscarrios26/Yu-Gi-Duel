
    
    let player1Btn = document.querySelector(".btn");
    let rightAside = document.querySelector(".rigth")
    
    
    newArr =[];

    function displayCards(images) {
        
        for (let i = 0; i < 50; i++){
            
            let imagesOfCards = images[i].card_images[0].image_url;
        
            newArr.push(imagesOfCards)
            setRandomCardLeft();
           
        }


    };

        function setRandomCardLeft(){
        const randomItem = newArr[Math.floor(Math.random()*newArr.length)];
        console.log(randomItem);
        let img = document.querySelector("img");
        img.setAttribute("src", randomItem);
        


         
        };
        

        

       
        
        
   
        function setRandomCardRight(){
        
            let imgRight = document.createElement("img");
            imgRight.src = randomItem;
            rightAside.appendChild(imgRight);

        }
            
            
        //     let img1 = document.querySelector(".righcard");
        //     img1.setAttribute("src", randomItem);
        //     };
             
            

       
      
        
      
       
    
    

    
    
    
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
