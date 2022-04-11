const iconsContainer = document.getElementsByClassName("card-social-icons");
const iconsButton = document.getElementsByClassName("dash-button");


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
    src: "./assets/images/person-3.png",
    name: "Anthony",
    job: "Project Manager",
  },
  {
    src: "./assets/images/person-1.png",
    name: "Anthony",
    job: "Project Manager",
  },
  {
    src: "./assets/images/person-4.png",
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
    src: "./assets/images/person-1.png",
    name: "Anthony",
    job: "Project Manager",
  },
  {
    src: "./assets/images/person-4.png",
    name: "Anthony",
    job: "Project Manager",
  },
  {
    src: "./assets/images/person-2.png",
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
console.log(personImage);
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
    defaultIndex = 0;
    carousels[carousels.length - 1].style.backgroundColor = "#979797";
  }
  carousels[defaultIndex].style.backgroundColor = "#b8f3ff";
  carousels[defaultIndex - 1].style.backgroundColor = "#979797";

  showPerson();
});

prevButton.addEventListener("click", () => {
  defaultIndex--;
  if (defaultIndex < 0) {
    defaultIndex = cardDetails.length - 1;
    carousels[carousels.length - 1].style.backgroundColor = "#b8f3ff";
  }
  carousels[defaultIndex].style.backgroundColor = "#b8f3ff";
  carousels[defaultIndex + 1].style.backgroundColor = "#979797";
  showPerson();
});
