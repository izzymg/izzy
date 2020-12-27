const DARK_STORAGE_KEY = "isDark";
const DARK_CLASS = "dark";

/* Turns title into a little text input */
function titleInputInit() {
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

function getSwitchText(isDark) {
    return isDark ? "Light Mode" : "Dark Mode";
}

/** Persistent dark theme. */
function darkThemeInit() {
    let isDark = localStorage.getItem(DARK_STORAGE_KEY) ? true : false;

    const switchButton = document.querySelector("#dark-switch");
    if(!switchButton) {
        throw new Error("Failed to find dark switch button by ID");
    }

    function onUpdate() {
        switchButton.textContent = getSwitchText(isDark);

        if(isDark) {
            document.body.classList.add(DARK_CLASS);
            localStorage.setItem(DARK_STORAGE_KEY, "true");
            return;
        }
        document.body.classList.remove(DARK_CLASS);
        localStorage.removeItem(DARK_STORAGE_KEY);
    }

    switchButton.addEventListener("click", function() {
        isDark = !isDark;
        onUpdate();
    });

    onUpdate();
}

titleInputInit();
darkThemeInit();