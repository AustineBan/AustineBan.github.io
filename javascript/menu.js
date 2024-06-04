menuBox = document.querySelector("#menu");
menuIcon = document.querySelector(".menu-icon-con");
isMenu = false;
menuIcon.addEventListener("click",() =>{
    if(isMenu)
    {
        closeMenu();
        isMenu = false;
    }else{
        openMenu();
        isMenu = true;
    }
})

function closeMenu(){
    menuBox.classList.remove("open-menu");
    menuIcon.classList.remove("menu-active");
}
function openMenu(){
    menuBox.classList.add("open-menu");
    menuIcon.classList.add("menu-active");
}