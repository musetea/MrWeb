"use strict";
class ColorSwitcher {
    constructor() {
        const $themeToggler = document.querySelector(".theme-toggler");
        $themeToggler.addEventListener("click", (e) => {
            e.preventDefault();
            $themeToggler.classList.toggle("active");
            if ($themeToggler.classList.contains("active")) {
                document.body.classList.add("active");
            }
            else {
                document.body.classList.remove("active");
            }
        });
    }
}
;
new ColorSwitcher();
