
let aboutText = ["About",
                "- Logoden biniou degemer mat an penn ar bed paot itron vouezh ziskouez -",
                "An Alre pesketaer taol yaouank kontrol c’horn, bale kribañ diskar naontek ki sukr zo da c’hwi sell c’havr lien arat walc’h danvez soavon.",
                "Rosporden yalc’h fiziañs marc’had Plelann-Veur ha vuzell dienn aval ampart c’hoazh vatezh e digant eget skeudenn. Ganto Pask estreget  biken martolod troc’hañ bluenn rannañ warlene digarez kroaz tregont pa doñjer.",
                "Blot c’horn traoñ bouton, nijal diwezh plijout vuhez e antronoz huñvre pelec’h sivi don tasenn wern Mur dale razh plac’h, er gouriz komz merc’h kar nerzh gozh ouzh da koant kiger fuzuilh c’haier ouzhoc'h Tregastell e.",
                "Nann ma falc’hat e gwez anv Plouneour-Menez deñvalijenn prizius c’hoef gouest beajiñ ar Sant-Gwenole din sec’hed gomz warni, gallout an truez karrez da evañ Roazhon vrec’h pepr pennad Breizh anezhañ romant maez vatezh ha. nerzh saoz mevel blijadur Rosporden pleg bemnoz e seblantout evitañ itron war Abbarez gontell Naoned talvezout.",
                "Servijañ adaozañ bourc’h mignon kroaz c’henwerzh krouiñ Lokmikael (an-Traezh) stlakañ merc’h sklerijenn kregiñ vuoc’h enno dleout gallek dor tarv, stal aozañ muzul walc’h vuhez echu erc’h matezh miz diouzhtu egistomp drezomp gozh bluenn benn kennebeut, azezañ ganti ur neuiñ taer gwerenn chase eost endervezh gwech kambrig digor genou rimiañ war golo.",
                "Moel Gwengamp huñvre pesketa c’hontadenn c’hardeur aozañ Muzilheg Sant-Gwenole met gantañ honnont mall flamm dour c’hleñved meur pevarzek, genver merc’her davet  skolaer skeudenn pad digalon bouzar he taol da kennebeut eno penn diwall Orient, oabl un rak  pegañ ifern c’houlz goude war moc’h perc’henn loen vandenn deskiñ frouezh dimeurzh sukr."
];

function sectionImage(){
    const sectionContent = document.createElement("div");
    sectionContent.classList.add("sectionContent","images");

    const sectionImage0 = document.createElement("div");
    sectionImage0.classList.add("sectionImage","landscape");
    sectionImage0.style.backgroundImage = "url('https://picsum.photos/1920/1080')";

    const sectionImage1 = document.createElement("div");
    sectionImage1.classList.add("sectionImage","portrait");
    sectionImage1.style.backgroundImage =  "url('https://picsum.photos/1920/1081')";
    
    const sectionImage2 = document.createElement("div");
    sectionImage2.classList.add("sectionImage","portrait");
    sectionImage2.style.backgroundImage =  "url('https://picsum.photos/1920/1082')";

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
    title.style.textAlign = "center";
    content.appendChild(title);
 
    const subtitle = document.createElement("em"); 
    subtitle.innerText = text[1]; 
    subtitle.style.textAlign = "center";
    content.appendChild(subtitle);

    sectionText.appendChild(content);

    for (let i = 2; i < text.length; i++){
        const p = document.createElement("p");
        p.innerText = text[i];
        content.appendChild(p);
    }

    return sectionText;
} 

function aboutSection(){
    const aboutSection = document.createElement("div");
    aboutSection.classList.add("section"); 
    aboutSection.id = "about";  
 
    aboutSection.appendChild(sectionImage());
    aboutSection.appendChild(sectionText(aboutText));

    return aboutSection;
} 

export {aboutSection};