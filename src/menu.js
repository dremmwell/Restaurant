
let menuText = ["MENUS",
                "We offer an A La Carte Menu and a Tasting Menu.",
                "A la Carte",
                "Our A La Carte menu is £49 for 3 courses at lunch and £75 for 3 courses at dinner.",
                "Tasting Menu",
                "Rosporden yalc’h fiziañs marc’had Plelann-Veur ha vuzell dienn aval ampart c’hoazh vatezh e digant eget skeudenn. Ganto Pask estreget  biken martolod troc’hañ bluenn rannañ warlene digarez kroaz tregont pa doñjer.",
                "Blot c’horn traoñ bouton, nijal diwezh plijout vuhez e antronoz huñvre pelec’h sivi don tasenn wern Mur dale razh plac’h, er gouriz komz merc’h kar nerzh gozh ouzh da koant kiger fuzuilh c’haier ouzhoc'h Tregastell e.",
                "Nann ma falc’hat e gwez anv Plouneour-Menez deñvalijenn prizius c’hoef gouest beajiñ ar Sant-Gwenole din sec’hed gomz warni, gallout an truez karrez da evañ Roazhon vrec’h pepr pennad Breizh anezhañ romant maez vatezh ha. nerzh saoz mevel blijadur Rosporden pleg bemnoz e seblantout evitañ itron war Abbarez gontell Naoned talvezout."
                
];

function sectionImage(){
    const sectionContent = document.createElement("div");
    sectionContent.classList.add("sectionContent","images");

    const sectionImage0 = document.createElement("div");
    sectionImage0.classList.add("sectionImage","landscape");
    sectionImage0.style.backgroundImage = "url('https://picsum.photos/1921/1080')";

    const sectionImage1 = document.createElement("div");
    sectionImage1.classList.add("sectionImage","portrait");
    sectionImage1.style.backgroundImage =  "url('https://picsum.photos/1922/1081')";
    
    const sectionImage2 = document.createElement("div");
    sectionImage2.classList.add("sectionImage","portrait");
    sectionImage2.style.backgroundImage =  "url('https://picsum.photos/1923/1082')";

    sectionContent.append(sectionImage0,sectionImage1,sectionImage2);
    
    return sectionContent;
} 

function sectionText(text) {
    const sectionText = document.createElement("div");
    sectionText.classList.add("sectionContent","sectionText");

    const content = document.createElement("div");
    content.classList.add("content");

    const title = document.createElement("h1");
    title.innerText = text[0];
    content.appendChild(title);
 
    const subtitle = document.createElement("p"); 
    subtitle.innerText = text[1]; 
    content.appendChild(subtitle);

    const titleCarte = document.createElement("strong");
    titleCarte.innerText = text[2];
    content.appendChild(titleCarte);

    const subtitleCarte = document.createElement("p"); 
    subtitleCarte.innerText = text[3]; 
    content.appendChild(subtitleCarte);

    const titleTasting = document.createElement("strong");
    titleTasting.innerText = text[4];
    content.appendChild(titleTasting);

    for (let i = 5; i < text.length; i++){
        const p = document.createElement("p");
        p.innerText = text[i];
        content.appendChild(p);
    }

    const btnList = document.createElement("div");
    btnList.classList.add("button-list");
    const btnCarte = document.createElement("button");
    const btnTasting = document.createElement("button");

    btnCarte.innerText = "A LA CARTE";
    btnTasting.innerText = "TASTING";

    btnList.appendChild(btnCarte);
    btnList.appendChild(btnTasting);

    content.appendChild(btnList);

    sectionText.appendChild(content);

    return sectionText;
} 

function menuSection(){
    const menuSection = document.createElement("div");
    menuSection.classList.add("section"); 
    menuSection.id = "about";  
 
    menuSection.appendChild(sectionImage());
    menuSection.appendChild(sectionText(menuText));

    return menuSection;
} 

export {menuSection};