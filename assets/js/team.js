const setupTeam = () => {
  const iconsContainer = document.getElementsByClassName("card-social-icons");
const iconsButton = document.getElementsByClassName("dash-button");
const navButton = document.getElementById("nav-menu");
const sideBarMenu = document.querySelector(".sidebar-menu");
const closeBtn = document.getElementById("close-btn");

function changeButton(button) {
  if (button.innerText === "-") {
    button.innerText = "+";
  } else {
    button.innerText = "-";
  }
}

for (let i = 0; i < iconsButton.length; i++) {
  iconsButton[i].addEventListener("click", () => {
    changeButton(iconsButton[i]);
    iconsContainer[i].classList.toggle("visible");
  });
}

// Slider

const cardDetails = [
  {
    src: "./assets/images/person-1.png",
    name: "Anthony",
    job: "Project Manager",
  },
  {
    src: "./assets/images/person-2.png",
    name: "Anthony",
    job: "Project Manager",
  },
  {
    src: "./assets/images/person-3.png",
    name: "Anthony",
    job: "Project Manager",
  },
  {
    src: "./assets/images/person-4.png",
    name: "Anthony",
    job: "Project Manager",
  },
  {
    src: "./assets/images/person-5.png",
    name: "Anthony",
    job: "Project Manager",
  },
  {
    src: "./assets/images/person-6.png",
    name: "Anthony",
    job: "Project Manager",
  },
  {
    src: "./assets/images/person-7.png",
    name: "Anthony",
    job: "Project Manager",
  },
  {
    src: "./assets/images/person-8.png",
    name: "Anthony",
    job: "Project Manager",
  },
];

const cards = document.getElementsByClassName("single-card");
const nextButton = document.getElementById("next-arrow");
const prevButton = document.getElementById("prev-arrow");
const carousels = document.getElementsByClassName("card-carousel");
const personName = document.querySelector(".person-name");
const personJob = document.querySelector(".person-job");
const personImage = document.querySelector(".card-image");
let defaultIndex = 0;

function showPerson() {
  let person = cardDetails[defaultIndex];
  personImage.src = person.src;
  personJob.textContent = person.job;
  personName.textContent = person.name;
}

nextButton.addEventListener("click", () => {
  defaultIndex++;
  if (defaultIndex >= cardDetails.length) {
    carousels[carousels.length - 1].style.backgroundColor = "#979797";
    defaultIndex = 0;
  }
  carousels[defaultIndex].style.backgroundColor = "#b8f3ff";
  carousels[defaultIndex - 1].style.backgroundColor = "#979797";

  showPerson();
});

prevButton.addEventListener("click", () => {
  defaultIndex--;
  if (defaultIndex < 0) {
    carousels[0].style.backgroundColor = "#979797";
    carousels[carousels.length - 1].style.backgroundColor = "#979797";
    defaultIndex = cardDetails.length - 1;
  }
  carousels[defaultIndex].style.backgroundColor = "#b8f3ff";
  carousels[defaultIndex + 1].style.backgroundColor = "#979797";
  showPerson();
});

///Clients Comments Section
const clientName = document.getElementById("client-name");
const clientComment = document.querySelector(".client-comment");
const clientImage = document.getElementById("client-pic");
const clientCompany = document.querySelector(".client-company");
const teamNextIcon = document.querySelector(".team-next-icon");
const teamPrevIcon = document.querySelector(".team-prev-icon");
let clientCount = 0;
const clients = [
  {
    comment:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe qui quod esse rerum similique nobis?",
    name: "John Peter",
    image: "./assets/images/client-1.png",
    company: "CEO, Card Center",
  },
  {
    comment:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe qui quod esse rerum similique nobis?",
    name: "John Peter",
    image: "./assets/images/client-2.png",
    company: "CEO, Card Center",
  },
  {
    comment:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe qui quod esse rerum similique nobis?",
    name: "John Peter",
    image: "./assets/images/client-3.png",
    company: "CEO, Card Center",
  },
  {
    comment:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe qui quod esse rerum similique nobis?",
    name: "John Peter",
    image: "./assets/images/client-1.png",
    company: "CEO, Card Center",
  },
  {
    comment:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe qui quod esse rerum similique nobis?",
    name: "John Peter",
    image: "./assets/images/client-2.png",
    company: "CEO, Card Center",
  },
  {
    comment:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe qui quod esse rerum similique nobis?",
    name: "John Peter",
    image: "./assets/images/client-3.png",
    company: "CEO, Card Center",
  },
];

function changeClient() {
  const client = clients[clientCount];
  clientName.textContent = client.name;
  clientComment.textContent = client.comment;
  clientCompany.textContent = client.company;
  clientImage.src = client.image;
}

teamNextIcon.addEventListener("click", () => {
  clientCount++;
  if (clientCount >= clients.length) {
    clientCount = 0;
    s;
  }
  changeClient();
});
teamPrevIcon.addEventListener("click", () => {
  clientCount--;
  if (clientCount <= 0) {
    clientCount = clients.length - 1;
  }
  changeClient();
});
}

try {
  setupTeam();
} catch (error) {
  console.log(error);
  
}