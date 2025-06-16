
// all frames

let parentContainer =  document.querySelector('.parent-container');

let frameOne = document.querySelector('.frame-one');

let frameTwo = document.querySelector('.frame-two');

let frameThreeA = document.querySelector('.frame-three-a');

let frameThreeB = document.querySelector('.frame-three-b');

let frameThreeC = document.querySelector('.frame-three-c');

let frameFour = document.querySelector('.frame-four');


let allFrames = [
    frameOne, 
    frameTwo,
    frameThreeA,
    frameThreeB,
    frameThreeC,
    frameFour
];

let allFrameStyles = [
    'frame-one-background',
    'frame-two-background',
    'frame-three-background', 
    'frame-four-background'
];

//header
let header = document.querySelector('.header');


// all options
// frame one options
let optionOne = document.querySelector('#frame-one-option-one');
let optionTwo = document.querySelector('#frame-one-option-two');

// frame two options
let optionThree = document.querySelector('#frame-two-option-one');
let optionFour = document.querySelector('#frame-two-option-two');
let optionFive = document.querySelector('#frame-two-option-three');

// frame three options 
// (3a)
let optionSix = document.querySelector("#frame-three-a-option-one");
let optionSeven = document.querySelector('#frame-three-a-option-two');

// (3b)
let optionEight = document.querySelector('#frame-three-b-option-one');
let optionNine = document.querySelector('#frame-three-b-option-two');
let optionTen = document.querySelector('#frame-three-b-option-three');
let optionEleven = document.querySelector('#frame-three-b-option-four');

// (3c)
let optionTwelve = document.querySelector('#frame-three-c-option-one');
let optionThirteen = document.querySelector('#frame-three-c-option-two');
let optionFourteen = document.querySelector('#frame-three-c-option-three');


// frame four option
let optionFifteen = document.querySelector('#frame-four-option-one');
let optionSixteen = document.querySelector('#frame-four-option-two');
let optionSeventeen = document.querySelector('#frame-four-option-three');


// end card
let appStoreLogo = document.querySelector('.app-store-logo');
let playStoreLogo = document.querySelector('.play-store-logo');
let learnMore = document.querySelector('.learn-more');
let contactSupport = document.querySelector('.contact-support');
let endCardFrame = document.querySelector('.end-card');

// news letter frame
let newsletterFrame = document.querySelector('.newsletter-frame');



let defaultFrame = 0;
let currentFrame = defaultFrame;


function addBackground(frameIndex) {
  parentContainer.classList.add(allFrameStyles[frameIndex]);
}

// add background to the current frame
(function() {
  addBackground(defaultFrame);
  currentFrame = currentFrame++;
})();




function activateNewsLetterFrame() {
    // deactivate current frame
    allFrames[currentFrame].style.display = "none";

    newsletterFrame.style.display = 'block';

    for (const style of allFrameStyles) {
        parentContainer.classList.remove(style);
    }
}


function activateEndFrame(){
    
    allFrames[currentFrame].style.display = "none";

    endCardFrame.style.display = 'block';
    header.style.display = "none";

    for (const style of allFrameStyles) {
        parentContainer.classList.remove(style);
    }
}


function activateFrameTwo(){

    // deactivate current frame
    allFrames[currentFrame].style.display = "none";

    currentFrame++;
    console.log('current frame is' + currentFrame + 'from frame two');
    

    // activate next frame
    allFrames[currentFrame].style.display = "block";
    addBackground(currentFrame);
}

function activateFrameThreeA(){

     // deactivate current frame
    allFrames[currentFrame].style.display = "none";

    currentFrame++;
    console.log('current frame is' + currentFrame + 'from frame threeA');

    // activate next frame
    allFrames[currentFrame].style.display = "block";
    addBackground(currentFrame);
}


function activateFrameThreeB(){

     // deactivate current frame
    allFrames[currentFrame].style.display = "none";

     currentFrame+=2;
     console.log('current frame is' + currentFrame + 'from frame threeB');

     // activate next frame
    allFrames[currentFrame].style.display = "block";
    addBackground(currentFrame - 1);
}

function activateFrameThreeC(){

     // deactivate current frame
    allFrames[currentFrame].style.display = "none";

    currentFrame+=3;
    console.log('current frame is' + currentFrame + 'from frame threeC');

     // activate next frame
    allFrames[currentFrame].style.display = "block";
    addBackground(currentFrame - 2);

}


function activateFrameFour(){

    // deactivate current frame
    allFrames[currentFrame].style.display = "none";

    currentFrame+=3;
    console.log('current frame is' + currentFrame + 'from frame four');

    // activate next frame
    allFrames[currentFrame].style.display = "block";
    addBackground(currentFrame - 2)

}

function activateFrameFive(){

    // deactivate current frame
    allFrames[currentFrame].style.display = "none";

    currentFrame+=2;
    console.log('current frame is' + currentFrame + 'from frame five');

     // activate next frame
    allFrames[currentFrame].style.display = "block";
    addBackground(currentFrame - 2)

}


function activateFrameFiveV2(){

    // deactivate current frame
    allFrames[currentFrame].style.display = "none";

    currentFrame+=1;
    console.log('current frame is' + currentFrame + 'from frame five');

     // activate next frame
    allFrames[currentFrame].style.display = "block";
    addBackground(currentFrame - 2)

}




optionOne.addEventListener('click', () => {
    activateFrameTwo();
})

optionTwo.addEventListener('click', () => {
    activateNewsLetterFrame();
})

optionThree.addEventListener('click', () => {
    activateFrameThreeA()
})

optionFour.addEventListener('click', () => {
    activateFrameThreeB();
})

optionFive.addEventListener('click', () => {
    activateFrameThreeC();
})

optionSix.addEventListener('click', () => {
    activateFrameFour();
})

optionSeven.addEventListener('click', () => {
    activateNewsLetterFrame();
})

optionEight.addEventListener('click', () => {
    activateFrameFive();
})

optionNine.addEventListener('click', () => {
    activateFrameFive();
})

optionTen.addEventListener('click', () => {
    activateFrameFive();
})

optionEleven.addEventListener('click', () => {
    activateNewsLetterFrame();
})

optionTwelve.addEventListener('click', () => {
    activateFrameFiveV2();
})

optionThirteen.addEventListener('click', () => {
    activateFrameFiveV2();
})


optionFourteen.addEventListener('click', () => {
    activateNewsLetterFrame();
})

optionFifteen.addEventListener('click', () => {
    activateEndFrame();
})

optionSixteen.addEventListener('click', () => {
    activateEndFrame();
})


optionSeventeen.addEventListener('click', () => {
    activateEndFrame();
})