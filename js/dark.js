/* Persistent dark theme. IzzyMG */

const DARK_STORAGE_KEY = "isDark";
const DARK_CLASS = "dark";

function getSwitchText(isDark) {
    return isDark ? "Light Mode" : "Dark Mode";
}

function init() {
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

init();