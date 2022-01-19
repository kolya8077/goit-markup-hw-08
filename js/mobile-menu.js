(() => {
    const menuBtnOpn = document.querySelector("[data-menu-open]");
    const mobileMenuOpn = document.querySelector("[data-menu");

    menuBtnOpn.addEventListener("click", () => {
        const expanded =
            menuBtnOpn.getAttribute("aria-expanded") === "true" || false;
        menuBtnOpn.classList.toggle("menu__is-open");
        menuBtnOpn.setAttribute("aria-expanded", !expanded);

        mobileMenuOpn.classList.toggle("menu__is-open");
    })
})();
