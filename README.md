# Project Overview

## Project Name

Yu-Gi-Duel:
https://oscarrios26.github.io/Yu-Gi-Duel/

## Project Description

An app game that allows two players to play and compared Yu-Gi-Oh cards. Will have two buttons, one for each player and it will render random cards, whichever card has more attack points wins and a reset buttom will also be displayed for resetting the page to empy. 

## API and Data Sample

URL : https://db.ygoprodeck.com/api-guide/ , it includes images, name and info.
``` "data": [
        {
            "id": 34541863,
            "name": "\"A\" Cell Breeding Device",
            "type": "Spell Card",
            "desc": "During each of your Standby Phases, put 1 A-Counter on 1 face-up monster your opponent controls.",
            "race": "Continuous",
            "archetype": "Alien",
            "card_sets": [
                {
                    "set_name": "Force of the Breaker",
                    "set_code": "FOTB-EN043",
                    "set_rarity": "Common",
                    "set_rarity_code": "(C)",
                    "set_price": "1.58"
                }
            ],
            "card_images": [
                {
                    "id": 34541863,
                    "image_url": "https://storage.googleapis.com/ygoprodeck.com/pics/34541863.jpg",
                    "image_url_small": "https://storage.googleapis.com/ygoprodeck.com/pics_small/34541863.jpg"
                }
            ],
            "card_prices": [
                {
                    "cardmarket_price": "0.17",
                    "tcgplayer_price": "0.25",
                    "ebay_price": "4.99",
                    "amazon_price": "3.94",
                    "coolstuffinc_price": "0.25"
                }
```

## Wireframes
<img width="1081" alt="Screen Shot 2021-11-15 at 9 30 50 AM" src="https://user-images.githubusercontent.com/92955104/141809334-d57d5565-4084-4670-98f4-cec93fe435ba.png">



![finalcrop](https://user-images.githubusercontent.com/92955104/141808157-cfd7d9f3-35a7-41cc-96e6-2f94d034b68d.png)





#### MVP 


- Use an api from YGOPRODeck to render data on the app. 
- Build event listeners for players input.
- Use flexbox for better alignment capabilities. 
- Work with Axios.
- Add responsive design for better user experience on mobile and computer.
- Give the app a clean style layout.




#### PostMVP  

- Add second API
- Add a link to another page where player can search for card name and get back the card info.
- Use local storage to save user favorite cards.


## Project Schedule


|  Day | Deliverable | Status
|---|---| ---|
|November 6-7| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|November 8| Project Approval/ HTML, Flex-box and CSS.| Complete
|November 9| Finish HTML and styling the webpage. | Complete
|November 10| Fetch  api, and sart placing data using DOM. | Complete
|November 11| Build functions and set three  event listeners for buttons.  | Complete
|November 12| Debugging and review MVP. | Complete
|November 15| Presentations | Complete

## Priority Matrix

https://whimsical.com/yu-gi-duel-B4BBTUEwA21zV5ZWx9Etny@2Ux7TurymNLTiGsu9A9t

## Timeframes



| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding HTML | H | 3.5hrs| 3.5hrs | 3.5hrs |
| Flexbox | H | 3hrs | 3.5hrs | 3.5hrs |
| Styling | H | 4hrs | 4hrs | 4hrs |
| Responsive Design | H | 3.5hrs | 3.5hrs | 3.5hrs |
| API | H | 4hrs| 4.5hrs | 4.5hrs |
| Setting up JavaScript | H | 4hrs | 4hrs | 4hrs |
| Making Functions | H | 4hrs | 4.5hrs | 4.5hrs |
| Appending | H | 3hrs | 3.5hrs | 3.5hrs |
| Final CSS and HTML touches | H | 4hrs | 4hrs | 4hrs |
| Debugging | H | 4hrs | 4hrs | 4hrs |
| Refactoring | H | 3hrs | 3hrs | 3hrs |
| Total | H | 40hrs| 42hrs | 42hrs |

## Code Snippet

``` newArr =[];

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

```



