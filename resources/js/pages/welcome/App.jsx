import * as React from 'react'
import ReactDOM from 'react-dom';
import '../../../sass/app.scss';

// Importing design parts
import { DesignA } from './DesignA';
import { DesignB } from './DesignB';
import Swiper from 'swiper';

const appElement = document.getElementById('app');

function App() {
    return (
        <div className="__view__">
            <DesignA></DesignA>
            <DesignB></DesignB>
        </div>
    );
}

export default App;

// DOM element
if (appElement) {
    ReactDOM.render(<App />, appElement);
}

var url = window.location.href.trimEnd("#");
var split_url = url.split("?");

const design_a = document.querySelector(".design__a");
const design_b = document.querySelector(".design__b");

if (split_url.length > 1) {
    split_url = split_url[1].split("&");
    for (var i = 0; i < split_url.length; i ++) {
        var data = split_url[i];
        if (data == "design=a") {
            design_b.style.display = "none";
        }
        if (data == "design=b") {
            design_a.style.display = "none";
        }
    }
}

var W768 = false;
var W510 = false;
var W425 = false;
var W360 = false;
window.addEventListener('load', () => {
    const swipers = document.querySelectorAll('.swiper');
    const swiperBlocks = [
        swipers[0].querySelectorAll('.thf-block'),
        swipers[1].querySelectorAll('.experts-block'),
        swipers[2].querySelectorAll('.ath-block'),
        swipers[3].querySelectorAll('.HTSC-block')
    ]

let swiper = null;
let swiper2 = null;
let swiper3 = null;
let swiper4 = null;



const updateElements = () => {
    let mobile = window.matchMedia('(max-width: 768px) and (min-width: 0px)');
    let phone = window.matchMedia('(max-width: 425px) and (min-width: 0px');

    if(mobile.matches){
        if(!W768){
            W768 = true;
            swiper = new Swiper(swipers[0], {
                modules: [],
                // Default parameters
                slidesPerView: 1.2,
                spaceBetween: 16,
                // Responsive breakpoints
                breakpoints: {
                    640: {
                        slidesPerView: 2.5,
                        spaceBetween: 16
                    },
            
                    500: {
                        slidesPerView: 2,
                        spaceBetween: 16
                    },
            
                    400: {
                        slidesPerView: 1.2,
                        spaceBetween: 16
                    }
                }
            });
            wteUpdateElements();
        }
    } else {
        if(swiper){
            swiper.destroy();
            swiper = null;
        }
        W768 = false;
        wteUpdateElements();
    }

    if(phone.matches){
        if(!W425){
            W425 = true;
            swiper2 = new Swiper(swipers[1], {
                modules: [],
                // Default parameters
                slidesPerView: 1.2,
                spaceBetween: 16,
                // Responsive breakpoints
                breakpoints: {
                    425: {
                        slidesPerView: 1.2,
                        spaceBetween: 16
                    },
                }
            });
            swiper3 = new Swiper(swipers[2], {
                modules: [],
                // Default parameters
                slidesPerView: 1.1,
                spaceBetween: 16,
                // Responsive breakpoints
                breakpoints: {
                    425: {
                        slidesPerView: 1.2,
                        spaceBetween: 16
                    },
                }
            });
            swiper4 = new Swiper(swipers[3], {
                modules: [],
                // Default parameters
                slidesPerView: 1.1,
                spaceBetween: 16,
                // Responsive breakpoints
                breakpoints: {
                    425: {
                        slidesPerView: 1.1,
                        spaceBetween: 16
                    },
                }
            })
        }
    } else{
        if(swiper2){
            swiper2.destroy();
            swiper2 = null;
        }
        if(swiper3){
            swiper3.destroy();
            swiper3 = null;
        }
        if(swiper4){
            swiper4.destroy();
            swiper4 = null;
        }
        W425 = false;
    }

}
document.querySelectorAll('[to-be-checked]').forEach(radio => {
    radio.setAttribute('checked', '');
});

const whatToExpect = document.querySelector('section[id="whatToExpect"]');
const wteSubItems = whatToExpect.querySelectorAll('.subscription-item');
const wteSubRadio = [
    whatToExpect.querySelector('input[id="toggle-thick_myself2"]'),
    whatToExpect.querySelector('input[id="toggle-thick_couple2"]')
];
wteSubRadio[0].onclick = () => {
    wteUpdateElements();
}
wteSubRadio[1].onclick = () => {
    wteUpdateElements();
}
const wteUpdateElements = () => {
    if (W768) {
        if (wteSubRadio[0].checked) {
            wteSubItems[0].removeAttribute('hidden');
            wteSubItems[1].setAttribute('hidden', '');
        }
        if (wteSubRadio[1].checked) {
            wteSubItems[1].removeAttribute('hidden');
            wteSubItems[0].setAttribute('hidden', '');
        }
    } else {
        wteSubItems[0].removeAttribute('hidden');
        wteSubItems[1].removeAttribute('hidden');
    }
}

window.addEventListener('resize', () =>
    updateElements()
);

// if (window.innerWidth <= 768) { W768 = false } else { W768 = true }
// if (window.innerWidth <= 510) { W510 = false } else { W510 = true }
// if (window.innerWidth <= 425) { W425 = false } else { W425 = true }
// if (window.innerWidth <= 360) { W360 = false } else { W360 = true }

updateElements();
wteUpdateElements();
})
