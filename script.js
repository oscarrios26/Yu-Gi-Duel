



    newArr =[];

function displayCards(images) {

    for (let i = 0; i < 320; i++){

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


function reset(){

    let imgLeft = document.querySelector("#leftCard");
    imgLeft.style.visibility= "hidden";
    let imgRight= document.querySelector("#rightCard");
    imgRight.style.visibility= "hidden";
    };




function resume(){

    let imgLeft = document.querySelector("#leftCard");
    imgLeft.style.visibility= "visible";
    let imgRight= document.querySelector("#rightCard");
    imgRight.style.visibility= "visible";
    };







        
        

        
        

async function fetchCards() {
    try {
    let cards = await axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php");
    let images = cards.data.data;
    console.log(images);
    displayCards(images);
    }catch (error) {
    console.log(error);
    }finally {
        console.log("DONE");
    }
    }
    fetchCards();
