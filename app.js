let icon = document.getElementById('menu-icon');
let menu = document.getElementById('menu');
let closeIcon = document.getElementById('close-icon');

function show() {
          menu.classList.toggle('show');
          closeIcon.classList.toggle('show');
}


let inputs = document.querySelectorAll('input[name="modal"]');

for (let input of inputs) {
          input.addEventListener('change', () => {
                    for (let input of inputs) {
                              if (input.checked === true) {
                                        input.parentElement.style.borderColor = "#3BB3AB";
                              } else {
                                        input.parentElement.style.borderColor = "rgba(122, 122, 122, 0.075)";
                              }

                    }
          })


}

