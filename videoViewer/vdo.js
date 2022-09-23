
const viewer = document.getElementById('viewer');

const images = ["https://www.youtube.com/embed/f2EqECiTBL8", "https://www.youtube.com/embed/dFBsSiEbyFE", "https://www.youtube.com/embed/qw--VYLpxG4", "https://www.youtube.com/embed/p3qvj9hO_Bo","https://www.youtube.com/embed/p1QU3kLFPdg"];
const TBnail = ["photo1.jpg","photo2..webp","photo3.jpg","photo4.jpg","photo5.jpg"];

const container = document.getElementById("thumbnail-container");
let content = "", counter = 1;

// this forloop will store the element inside the images[] array until the end one by one to the new image variable.
for(let image of images){
    content += `<source src="`+image+`" id="vdo`+counter+`">
    <img src="`+TBnail[counter-1]+`" alt="here" class="img" onclick="preview('vdo`+counter+`')" />`;
    counter += 1; 
}

container.innerHTML = content;
viewer.src = images[0];

function preview(id){
    const elem = document.getElementById(id);
    viewer.src = elem.src;
}

