let dropOne = document.getElementById('dropone');
let childOne = document.getElementById('childBottomOne');

let dropTwo = document.getElementById('drop-two');
let childTwo = document.getElementById('child-Bottom-two');

let dropThree = document.getElementById('drop-three');
let childThree = document.getElementById('child-Bottom-three')

let dropFour = document.getElementById('drop-four');
let childFour = document.getElementById('child-Bottom-four');

dropOne.addEventListener('click', () => {
    dropTwo.classList.remove('dropped')
    dropThree.classList.remove('dropped')
    dropFour.classList.remove('dropped')

    dropOne.classList.toggle('dropped');
    childOne.style.display = 'flex';

})



dropTwo.addEventListener('click', () => {
    dropOne.classList.remove('dropped')
    dropThree.classList.remove('dropped')
    dropFour.classList.remove('dropped')

    dropTwo.classList.toggle('dropped');
    childTwo.style.display = 'flex';
})


dropThree.addEventListener('click', () => {
    dropOne.classList.remove('dropped')
    dropTwo.classList.remove('dropped')
    dropFour.classList.remove('dropped')

    dropThree.classList.toggle('dropped');
    childThree.style.display = 'flex';
})




dropFour.addEventListener('click', () => {
    dropOne.classList.remove('dropped')
    dropTwo.classList.remove('dropped')
    dropThree.classList.remove('dropped')

    dropFour.classList.toggle('dropped');
    childFour.style.display = 'flex';
})