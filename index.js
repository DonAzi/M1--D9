
        var cardBoardNode = document.getElementById("CardsBoard");
         for (let i =1; i<=76; i++){
            let newDiv = document.createElement("div");
         cardBoardNode.appendChild(newDiv);
            newDiv.classList.add("divStyle");
        newDiv.innerHTML = i

        }
    var buttonCase = document.getElementById("buttonLar").addEventListener("click", function() { 
            var randomNumber = Math.floor(Math.random() * 76 ) +1
            var cellCell = document.querySelectorAll(".divStyle")
            cellCell[randomNumber - 1 ].classList.add("activeColor")
            console.log(randomNumber)
    }) 
        
