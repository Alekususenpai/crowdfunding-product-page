let icon = document.getElementById('menu-icon');
let menu = document.getElementById('menu');
let closeIcon = document.getElementById('close-icon');

function show() {
          menu.classList.toggle('show');
          closeIcon.classList.toggle('show');
}

function checker() {
          let inputs = document.getElementsByTagName('input');
          for (input of inputs) {
                    if (input.checked === true) {
                              console.log('lele')
                              input.parentElement.style.borderColor = "#3BB3AB";
                    } else {
                              input.parentElement.style.borderColor = "rgba(122, 122, 122, 0.075)";
                    }

          }
}
