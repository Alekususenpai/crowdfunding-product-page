let openIcon = document.getElementById('menu-icon');
let menu = document.getElementById('menu');
let closeIcon = document.getElementById('close-icon');


openIcon.addEventListener('click', () => {
          menu.style.display = 'block';
          closeIcon.style.display = 'block';
          openIcon.style.display = 'none';
})

closeIcon.addEventListener('click', () => {
          menu.style.display = 'none';
          closeIcon.style.display = 'none';
          openIcon.style.display = 'block';
});


let pledge = document.querySelector('.pledge');
let inputs = document.querySelectorAll('input[name="modal"]');
let cards = document.querySelectorAll(".cards");

//for card[input]//

for (let input of inputs) {

          input.addEventListener('change', () => {
                    let parent = input.closest(".card");
                    if (parent.contains(pledge)) {
                              pledge.style.display = 'flex';
                    } else {
                              pledge.style.display = 'none';
                    }
                    for (let input of inputs) {
                              let parent = input.closest(".card");
                              if (input.checked === true) {
                                        parent.style.borderColor = "#3BB3AB";
                              } else {
                                        parent.style.borderColor = "rgba(122, 122, 122, 0.075)";
                              }

                    }
          })


}

let backPrjBtn = document.getElementById('backPrjBtn');

let modalSelection = document.getElementById('modalSelection');

let modalCloseBtn = document.getElementById('modalCloseBtn');

let tyModal = document.getElementById('tyModal');

let tyBtn = document.getElementById('tyBtn');


backPrjBtn.addEventListener('click', () => {
          modalSelection.style.display = 'block';;
})

modalCloseBtn.addEventListener('click', () => {
          modalSelection.style.display = 'none';
})


tyBtn.addEventListener('click', () => {
          tyModal.style.display = 'none';
})