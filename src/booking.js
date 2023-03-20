
let bookingText = ["BOOKING",
                "Nann ma falc’hat e gwez anv Plouneour-Menez deñvalijenn prizius c’hoef gouest beajiñ ar Sant-Gwenole din sec’hed gomz warni, gallout an truez karrez da evañ Roazhon vrec’h pepr pennad Breizh anezhañ romant maez vatezh ha. nerzh saoz mevel blijadur Rosporden pleg bemnoz e seblantout evitañ itron war Abbarez gontell Naoned talvezout.",
                "Blot c’horn traoñ bouton, nijal diwezh plijout vuhez e antronoz huñvre pelec’h sivi don tasenn wern Mur dale razh plac’h, er gouriz komz merc’h kar nerzh gozh ouzh da koant kiger fuzuilh c’haier ouzhoc'h Tregastell e.",
                "Private Room",
                "Rosporden yalc’h fiziañs marc’had Plelann-Veur ha vuzell dienn aval ampart c’hoazh vatezh e digant eget skeudenn. Ganto Pask estreget  biken martolod troc’hañ bluenn rannañ warlene digarez kroaz tregont pa doñjer.",

            
                
];

function sectionImage(){
    const sectionContent = document.createElement("div");
    sectionContent.classList.add("sectionContent","images");

    const sectionImage0 = document.createElement("div");
    sectionImage0.classList.add("sectionImage","landscape");
    sectionImage0.style.backgroundImage = "url('https://picsum.photos/1921/1081')";

    const sectionImage1 = document.createElement("div");
    sectionImage1.classList.add("sectionImage","portrait");
    sectionImage1.style.backgroundImage =  "url('https://picsum.photos/1922/1082')";
    
    const sectionImage2 = document.createElement("div");
    sectionImage2.classList.add("sectionImage","portrait");
    sectionImage2.style.backgroundImage =  "url('https://picsum.photos/1923/1083')";

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

    const subtitleBooking = document.createElement("p"); 
    subtitleBooking.innerText = text[2]; 
    content.appendChild(subtitleBooking);

    const titlePrivate = document.createElement("strong");
    titlePrivate.innerText = text[3];
    content.appendChild(titlePrivate);

    const subtitlePrivate = document.createElement("p"); 
    subtitlePrivate.innerText = text[2]; 
    content.appendChild(subtitlePrivate);

    const btnList = document.createElement("div");
    btnList.classList.add("button-list");
    const btnCarte = document.createElement("button");

    btnCarte.innerText = "BOOK A TABLE";

    btnList.appendChild(btnCarte);
    content.appendChild(btnList);
    sectionText.appendChild(content);

    return sectionText;
} 

function bookingSection(){
    const bookingSection = document.createElement("div");
    bookingSection.classList.add("section"); 
    bookingSection.id = "booking";  
 
    bookingSection.appendChild(sectionImage());
    bookingSection.appendChild(sectionText(bookingText));

    return bookingSection;
} 

export {bookingSection};