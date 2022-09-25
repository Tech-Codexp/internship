

let pagebox = document.getElementById('imageoutbox');


const images = ["image1.JPG", "image5.JPG", "image3.JPG", "image4.JPG", "image6.jpg", "image5.JPG", "image3.JPG", "image4.JPG", "image6.jpg"];

let imagecounter = "", count = 0;

for (image of images) {
    imagecounter += `<img id="id` + count + `" class="image" src="` + image + `" alt="" onmouseover="handleClick(id)">`
    count++;
}

pagebox.innerHTML = imagecounter;

const viewer = document.getElementById('output');

const handleClick = (id) => {
    const elem = document.getElementById(id);
    viewer.src = elem.src;
}

let arr = [0, 1, 2, 3];

let increase = 0;

const prev = () => {


    if (increase === 0) {


        const elem = document.getElementById('id' + increase);
        viewer.src = elem.src;

        increase = images.length;
        --increase;
        console.log('id' + increase);
    } else {

        const elem = document.getElementById('id' + increase);
        viewer.src = elem.src;

        --increase;
        console.log('id' + increase);

    }
}

const next = () => {


    if (increase === images.length) {
        increase = 0;

        const elem = document.getElementById('id' + increase);
        viewer.src = elem.src;

        console.log('id' + increase);
        increase++;
    } else {

        const elem = document.getElementById('id' + increase);
        viewer.src = elem.src;

        console.log('id' + increase);
        increase++;
    }


}