

const contentDiv = document.getElementById('content');

let navBarItemList = ['ABOUT', 'MENU', 'BOOKING','PRIVATE', 'CONTACT'];

function navBar(list){
    const navBar = document.createElement('div');
    list.forEach(item => {
        let li = document.createElement("li")
        const a = document.createElement("a");
        a.innerText = item;
        li.appendChild(a);
        navBar.appendChild(li);
    });
    return navBar;
}

contentDiv.appendChild(navBar(navBarItemList));