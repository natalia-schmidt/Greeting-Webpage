const putMessage = (message) => {
    const getBody = document.body;
    const newElement = document.createElement("p");
    const newContent = document.createTextNode(message);

    newElement.appendChild(newContent);
    getBody.appendChild(newElement);

    newElement.setAttribute("class","welcome");
    newElement.style.cssText = "text-align: center; font-size: 60px; font-family: arial";

    if (message==="Good morning!"){
        getBody.style.cssText= "background-color:rgb(255, 209, 156);"
    } else if (message==="Good day!"){
        getBody.style.cssText= "background-color:rgb(255, 232, 156  );"
    }else if (message==="Good afternoon!"){
        getBody.style.cssText= "background-color:rgb(255, 209, 156);"
    } else if (message==="Good evening!"){
        getBody.style.cssText= "background-color:rgb(237, 197, 197);"
    } else if (message==="Good night!"){
        getBody.style.cssText= "background-color:rgb(197, 202, 237);"
    } else {
        getBody.style.cssText= "background-color:rgb(210, 156, 255);"
    }
}

const date = new Date();
const currentHour = date.getHours();

if(currentHour >= 4 && currentHour < 10) {
    putMessage("Good morning!");
} else if (currentHour >= 10 && currentHour < 12) {
    putMessage("Good day!");
} else if (currentHour >= 12 && currentHour < 18) {
    putMessage("Good afternoon!");
} else if (currentHour >= 18 && currentHour < 22) {
    putMessage("Good evening!")
} else if (currentHour >= 22 || currentHour < 4) {
    putMessage("Good night!");
} else {
    putMessage("Are you from a different planet? :o")
}
