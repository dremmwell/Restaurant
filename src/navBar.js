let navBarItemList = ['ABOUT', 'MENU', 'BOOKING','PRIVATE', 'CONTACT'];

function navBar(){
    const navBar = document.createElement('div');
    navBar.classList.add("navBar");
    const ul = document.createElement("ul");
    ul.classList.add("navList");
    navBarItemList.forEach(item => {
        let li = document.createElement("li");
        const a = document.createElement("a");
        a.innerText = item;
        li.appendChild(a);
        ul.appendChild(li);
    });  
    navBar.appendChild(ul);
    return navBar;
}


export {navBar};