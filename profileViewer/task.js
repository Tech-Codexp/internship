const users = [
    {
        id: 1,
        name: "NARUTO",
        age: "25",
        mobile: 12345,
        pic: "naruto.png",
        address: {
            locality: "block-1",
            district: "area1",
            pincode: "123",
            state: "hidden leaf"
        }
    }, {
        id: 2,
        name: "HINATA",
        age: "22",
        mobile: 12345,
        pic: "hinata.jpg",
        address: {
            locality: "block-2",
            district: "area1",
            pincode: "123",
            state: "hidden leaf"
        }
    }, {
        id: 3,
        name: "JACK SPARROW",
        age: "30",
        mobile: 12345,
        pic: "jack sparrow.jpg",
        address: {
            locality: "block-3",
            district: "area3",
            pincode: "1234",
            state: "kentucky"
        }
    }, {
        id: 4,
        name: "LUFFY",
        age: "25",
        mobile: 12345,
        pic: "luffy.jpg",
        address: {
            locality: "block-4",
            district: "area4",
            pincode: "12342",
            state: "shibuya"
        }
    }, {
        id: 5,
        name: "NEZUKO",
        age: "20",
        mobile: 12345,
        pic: "nezuko.jpg",
        address: {
            locality: "block2",
            district: "area1",
            pincode: "123",
            state: "kyushu-okinawa"
        }
    }
];



const leftPanel = document.getElementById('left-panel');
const mainPanel = document.getElementById("main-panel");


const Defaultview = `
    <div class="pcard">
    <img src="`+ users[0].pic + `" alt="` + users[0].name + `" class="displayimage" style="border-radius:500px;" />

        <h4>Name: `+ users[0].name + `</h4>
        <h4>Age: `+ users[0].age + `</h4>
        <h4>Mobile: `+ users[0].mobile + `</h4>
        <h4>Address: `+ users[0].address.locality + `,<br> &nbsp &nbsp &nbsp ` + users[0].address.district + ` , ` + users[0].address.pincode + ` , ` + users[0].address.state + ` </h4>

    </div>
`
mainPanel.innerHTML = Defaultview;




let content = "", counter = 0;


for (let user of users) {
    content += `
    <span type="button" src="user[`+ counter + `]" onmouseover="displayDetails('` + counter + `')">
    <img src="`+ user.pic + `" alt="` + user.name + `" class="panel-img" />
    </span><br>`
    counter += 1;

}

leftPanel.innerHTML = content;

function displayDetails(index) {
    const user = users[index];
    const mainContent = `<div class="pcard">
    <img src="`+ user.pic + `" alt="` + user.name + `" class="displayimage" style="border-radius:500px;" />

        <h4>Name: `+ user.name + `</h4>
        <h4>Age: `+ user.age + `</h4>
        <h4>Mobile: `+ user.mobile + `</h4>
        <h4>Address: `+ user.address.locality + `,<br> &nbsp &nbsp &nbsp ` + user.address.district + ` , ` + user.address.pincode + ` , ` + user.address.state + ` </h4>

    </div>`;
    mainPanel.innerHTML = mainContent;
}