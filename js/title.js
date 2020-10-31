/* Turns title into a little text input */

function init() {
  const normTitle = document.querySelector("#norm-title");
  const inputTitle = document.querySelector("#input-title");
  const input = document.querySelector("#title-input");

  document.querySelector(".title-wrap").addEventListener("click", function() {
    normTitle.hidden = !normTitle.hidden;
    inputTitle.hidden = !inputTitle.hidden;

    if(!inputTitle.hidden) {
        input.focus();
    }
  });
}

init();