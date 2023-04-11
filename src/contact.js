
let contactText = ["CONTACT",
                "Restaurants Adress",
                "43 High Road",
                "London KN10 8LQ",
                "Phone: 01922-714854",
                "Email: contact@restaurant.co.uk",
                "Intagram: @restaurant",
                "Opening times:",
                "Tuesday – Saturday: 12pm – 2.15pm and 6pm – 10.15pm",
                "Newsletter: ",
                "Subscribe to receive occasional missives from us updating you on the latest news and events."              
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
 
    for (let i = 1; i < 7; i++){
        const p = document.createElement("p");
        p.innerText = text[i];
        content.appendChild(p);
    }

    const openningTimes = document.createElement("strong");
    openningTimes.innerText = text[7];
    content.appendChild(openningTimes);
    
    const openningHours = document.createElement("p");
    openningHours.innerText = text[8];
    content.appendChild(openningHours);

    const newsletter = document.createElement("strong");
    newsletter.innerText = text[9];
    content.appendChild(newsletter);

    const newsletterText = document.createElement("p");
    newsletterText.innerText = text[10];
    content.appendChild(newsletterText);

    const btnList = document.createElement("div"); 
    btnList.classList.add("button-list");
    const btnNewsletter = document.createElement("button");

    btnNewsletter.innerText = "SUBSCRIBE";

    btnList.appendChild(btnNewsletter);

    content.appendChild(btnList);

    sectionText.appendChild(content);

    return sectionText;
} 

function contactSection(){
    const contactSection = document.createElement("div");
    contactSection.classList.add("section"); 
    contactSection.id = "contact";  
 
    contactSection.appendChild(sectionImage());
    contactSection.appendChild(sectionText(contactText));

    return contactSection;
} 

export {contactSection};