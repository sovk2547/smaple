// #region Common

document.onclick = () => {
    click_effect(event);
}

// Click Effect
function click_effect(e) {
    let ripple = document.createElement("div");

    ripple.className = "click-effect";
    document.body.appendChild(ripple);

    ripple.style.left = `${e.clientX}px`;
    ripple.style.top = `${e.clientY}px`;

    ripple.style.animation = "click-effect .5s linear";
    ripple.onanimationend = () => document.body.removeChild(ripple);

}

function accordion_toggle(e) {
    const target = e.currentTarget;
    const parent = target.parentNode;

    parent.classList.toggle("active");
}

// #endregion

// #region DashBoard

// Aside DropDown Toggle
function dashboard_aside_dropdown_toggle(e) {
    const target = e.currentTarget;
    const parent = target.parentNode;

    parent.classList.toggle("active");
}

// Nav Btn DropDown Toggle
function dashboard_nav_btn_dropdown_toggle(e) {
    const target = e.currentTarget;
    const parent = target.parentNode;
    const btn = document.querySelectorAll(".nav-btn-dropdown-item.active");

    btn.forEach((el) => {
        if (el != parent) {
            el.classList.remove("active");
        }
    });

    parent.classList.toggle("active");
}

// Nav Color Toggle
function dashboard_nav_btn_color_toggle(e, color_name) {
    const target = e.currentTarget;
    const btn = document.querySelectorAll(".nav-btn-color > div.active");

    btn.forEach((el) => {
        el.classList.remove("active");
    });

    target.classList.toggle("active");

    const dashboard = document.querySelector(".dashboard");
    dashboard.dataset.theme = color_name;
}

// Nav Lang Toggle
function dashboard_nav_btn_lang_toggle(e) {
    const target = e.currentTarget;
    const btn = document.querySelectorAll(".nav-btn-lang > div.active");

    btn.forEach((el) => {
        el.classList.remove("active");
    });

    target.classList.add("active");
}

// Nav Account DropDown Toggle
function dashboard_nav_account_dropdown_toggle(e) {
    const target = e.currentTarget;
    const parent = target.parentNode;

    parent.classList.toggle("active");
}

// #endregion