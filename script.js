const review = [
    {
        id: 1,
        name: "Natalie pacheco",
        job: 'Read Alliance',
        img: "#person-img",
        text:'I recommend Jazmin for this opportunity. She works hard and is great to work with. Shes one of the most genuine and supportive person I know, and is very smart and knows what she is doing',
    },
    {
        id: 2,
        name: "Gabriela Reyes",
        job: 'Tutor',
        img: '#',
        text: 'Jazmin is a very responsible and hard working person. She is collaborative and respectful to others. She has a friendly demeanor',
    },
    {
        id: 3,
        name: 'Esmelda Toribio',
        job: 'Guidance Counsler',
        img: '#',
        text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.',
    },
];

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const preBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentItem = 0;

//Load initail item//
window.addEventListener('DOMContentLoaded', function () {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
});

function showPerson(person){
    const item = review[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

nextBtn.addEventListener('click', function (){
    currentItem++;
    if(currentItem > review.length - 1){
        currentItem = 0;
    }
    showPerson(currentItem);
});

preBtn.addEventListener('click', function (){
    currentItem--;
    if (currentItem < 0){
        currentItem = review.length - 1;
    }
    showPerson(currentItem);
});







































// console.log("Hello World!");

//  //String has quotes/Number has no quotes//
//  let myTest = "123";
//  console.log(typeof myTest);

//  console.log(10 +" eggs");
//  console.log(10 + 8 + " eggs");
//  console.log("eggs " + 10 + 8);

//  //Both conditions need to be true //
//  console.log(7>3)&&(5>2);

//  //Only one condition must be true//
//  console.log(10>3)||(10>12);

//  //Logical not//
//  console.log(!5>3);

  function introduction(name,age){
      console.log("Hello, my name is " + name + " and I am "+ age + " years old.");
  }

  introduction("Jazmin", 16)

 const hour = new Date().getHours();
 let greeting ="";

 if (hour<12){
     greeting = "Good morning 🌞";
 }else if (hour>18){
     greeting = "Good afternoon🌙";
 }else{
     greeting= "Good Evening🌤️";
 }

 document.getElementById("greeting").innerText = greeting;