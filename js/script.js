
let parentContainer =  document.querySelector('.parent-container');

let frameOne = document.querySelector('.frame-one');

let frameTwo = document.querySelector('.frame-two');

let frameThreeA = document.querySelector('.frame-three-a');

let frameThreeB = document.querySelector('.frame-three-b');

let frameThreeC = document.querySelector('.frame-three-c');

let frameFour = document.querySelector('.frame-four');

let greetingFrame = document.querySelector('.greeting-frame');


let allFrames = [
    frameOne, 
    frameTwo,
    frameThreeA,
    frameThreeB,
    frameThreeC,
    frameFour,
    greetingFrame
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


let options = [
  optionOne,
  optionTwo,
  optionThree,
  optionFour,
  optionFive,
  optionSix,
  optionSeven,
  optionEight,
  optionNine,
  optionTen,
  optionEleven,
  optionTwelve,
  optionThirteen,
  optionFourteen,
  optionFifteen,
  optionSixteen,
  optionSeventeen
]


function animateAll(){
    options.forEach(option => option.classList.add('scale-up-ver-bottom'));
}

let endCardFrame = document.querySelector('.end-card');

let newsletterFrame = document.querySelector('.newsletter-frame');

let defaultFrame = 0;
let currentFrame = defaultFrame;


function addBackground(frameIndex) {
  parentContainer.classList.add(allFrameStyles[frameIndex]);
  optionOne.classList.add('scale-up-ver-bottom')
  optionTwo.classList.add('scale-up-ver-bottom')
}

// add background to the current frame
(function() {
  addBackground(defaultFrame);
  currentFrame = currentFrame++;
})();




function activateNewsLetterFrame() {
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
    animateAll();
}

function activateFrameThreeA(){

     // deactivate current frame
    allFrames[currentFrame].style.display = "none";

    currentFrame++;
    console.log('current frame is' + currentFrame + 'from frame threeA');

    // activate next frame
    allFrames[currentFrame].style.display = "block";
    addBackground(currentFrame);
    animateAll();
}


function activateFrameThreeB(){

     // deactivate current frame
    allFrames[currentFrame].style.display = "none";

     currentFrame+=2;
     console.log('current frame is' + currentFrame + 'from frame threeB');

     // activate next frame
    allFrames[currentFrame].style.display = "block";
    addBackground(currentFrame - 1);
    animateAll();
}

function activateFrameThreeC(){

     // deactivate current frame
    allFrames[currentFrame].style.display = "none";

    currentFrame+=3;
    console.log('current frame is' + currentFrame + 'from frame threeC');

     // activate next frame
    allFrames[currentFrame].style.display = "block";
    addBackground(currentFrame - 2);
    animateAll();
}


function activateFrameFour(){

    // deactivate current frame
    allFrames[currentFrame].style.display = "none";

    currentFrame+=3;
    console.log('current frame is' + currentFrame + 'from frame four');

    // activate next frame
    allFrames[currentFrame].style.display = "block";
    addBackground(currentFrame - 2)
    animateAll();
}

function activateFrameFive(){

    // deactivate current frame
    allFrames[currentFrame].style.display = "none";

    currentFrame+=2;
    console.log('current frame is' + currentFrame + 'from frame five');

     // activate next frame
    allFrames[currentFrame].style.display = "block";
    addBackground(currentFrame - 2)
    animateAll();
}


function activateFrameFiveV2(){

    // deactivate current frame
    allFrames[currentFrame].style.display = "none";

    currentFrame+=1;
    console.log('current frame is' + currentFrame + 'from frame five');

     // activate next frame
    allFrames[currentFrame].style.display = "block";
    addBackground(currentFrame - 2)
    animateAll();
}

optionOne.addEventListener('click', () => {
    activateFrameTwo();
})

optionTwo.addEventListener('click', () => {
    activateNewsLetterFrame();
})

optionThree.addEventListener('click', () => {
    activateFrameThreeA();
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

const CONFIG = {
    BACKEND_URL: 'https://zabira-backend.onrender.com/api/ad-tracking/track',
    OPTION_MAPPING: {
        // Frame One
        'frame-one-option-one': 'STEP_1_LETS_GO',
        'frame-one-option-two': 'STEP_1_NOT_SURE_YET',

        // Frame Two
        'frame-two-option-one': 'STEP_2_EARN_FAST',
        'frame-two-option-two': 'STEP_2_INVEST_FUTURE',
        'frame-two-option-three': 'STEP_2_EXPLORING',

        // Frame Three A
        'frame-three-a-option-one': 'SHOW_ME_HOW_IT_WORKS',
        'frame-three-a-option-two': 'I_HAVE_QUESTIONS',
        'frame-three-a-option-three': 'EXPLORE',

        // Frame Three B
        'frame-three-b-option-one': 'STEP_3A_UP_TO_50',
        'frame-three-b-option-two': 'STEP_3A_UP_TO_500',
        'frame-three-b-option-three': 'STEP_3A_UP_TO_5000',
        'frame-three-b-option-four': 'STEP_3A_NO_CAPITAL',

        // Frame Three C
        'frame-three-c-option-one': 'STEP_3C_LEARN_ABOUT_ZABIRA',
        'frame-three-c-option-two': 'STEP_3C_LEARN_ABOUT_DIGITAL_ASSETS',
        'frame-three-c-option-three': 'STEP_3C_I_AM_NOT_INTERESTED',

        // Frame Four
        'frame-four-option-one': 'STEP_4_LEARN_MORE',
        'frame-four-option-two': 'STEP_4_TALK_TO_SUPPORT',
        'frame-four-option-three': 'STEP_4_YES_GET_THE_APP',

        // Newsletter
        'newsletter-option': 'EMAIL_SUBSCRIBE',

        //end Cards
        'learn-more': 'LEARN_MORE_CLICKED',
        'contact-support': 'CONTACT_SUPPORT_CLICKED',
        'app-store': 'APP_STORE_CLICKED',
        'play-store': 'PLAY_STORE_CLICKED'
    },
    REDIRECT_URLS: {
        'learn-more': 'https://app.zabira.com/sign-up?referralCode=CavaiSignUp',
        'contact-support': 'https://beacons.ai/zabirahelpdesk',
        'app-store': 'https://app.zabira.com/sign-up?referralCode=CavaiSignUp',
        'play-store': 'https://app.zabira.com/sign-up?referralCode=CavaiSignUp'
    },
    DIMENSION: {
        'DIMENSION_320_480' : 'DIMENSION_320_480',
        'DIMENSION_480_320' : 'DIMENSION_480_320',
        'DIMENSION_300_600' : 'DIMENSION_300_600',
        'DIMENSION_300_250' : 'DIMENSION_300_250'
    }
};

async function sendToBackend(interactionType, email) {
    try {
        const params = new URLSearchParams();
        params.append('interactionType', interactionType);
        params.append('dimension', `${CONFIG.DIMENSION.DIMENSION_320_480}`);
        if (email) params.append('email', email);

        const response = await fetch(`${CONFIG.BACKEND_URL}?${params.toString()}`, {
            method: 'POST',
            headers: { 'Accept': 'application/json' }
        });

        const data = await response.json();
        console.log('Backend response:', data);
        return data;
    } catch (error) {
        console.error('Error sending to backend:', error);
        throw error;
    }
}

async function handleOptionClick(optionId, email = null) {
    const interactionType = CONFIG.OPTION_MAPPING[optionId];
    if (!interactionType) {
        console.error('No interaction type defined for:', optionId);
        return;
    }
    try {
        await sendToBackend(interactionType, email);
    } catch (error) {
        console.error('Failed to track interaction:', error);
    }
}

async function trackAndRedirect(interactionType) {
    try {
        await handleOptionClick(interactionType);

        if (CONFIG.REDIRECT_URLS[interactionType]) {
            window.location.href = CONFIG.REDIRECT_URLS[interactionType];
        }
    } catch (error) {
        console.error('Error in trackAndRedirect:', error);
    }
}

function initEndCardListeners() {
    document.querySelector('.learn-more')?.addEventListener('click', async (e) => {
        e.preventDefault();
        await trackAndRedirect('learn-more');
    });

    document.querySelector('.contact-support')?.addEventListener('click', async (e) => {
        e.preventDefault();
        await trackAndRedirect('contact-support');
    });

    document.querySelector('.app-store-logo')?.addEventListener('click', async (e) => {
        e.preventDefault();
        await trackAndRedirect('app-store');
    });

    document.querySelector('.play-store-logo')?.addEventListener('click', async (e) => {
        e.preventDefault();
        await trackAndRedirect('play-store');
    });
}

function initEventListeners() {
    document.querySelectorAll('.options').forEach(option => {
        option.addEventListener('click', async (e) => {
            e.preventDefault();
            await handleOptionClick(option.id);
        });
    });

    const newsletterForm = document.querySelector('form.newsletter-form');
    const emailInput = document.querySelector('.newsletter-input');

    if (newsletterForm && emailInput) {
        newsletterForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = emailInput.value.trim();

            if (email) {
                const submittedEmail = email;
                newsletterFrame.style.display = 'none';
                greetingFrame.style.display = 'block';
                void greetingFrame.offsetWidth;
                greetingFrame.classList.add('visible');
                const waitForTransition = () => new Promise(resolve => {
                    greetingFrame.addEventListener('transitionend', resolve, { once: true });
                });

                await waitForTransition();

                emailInput.value = '';
                await handleOptionClick('newsletter-option', submittedEmail);

                for (const style of allFrameStyles) {
                    parentContainer.classList.remove(style);
                }
            }
        });
    }
    initEndCardListeners();
}

document.addEventListener('DOMContentLoaded', initEventListeners);