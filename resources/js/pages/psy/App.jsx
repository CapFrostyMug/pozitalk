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
        swipers[0].querySelectorAll('.experts-block'),
        swipers[1].querySelectorAll('.RCitem'),
        swipers[2].querySelectorAll('.gridContainer')
    ]
    

    let swiper = null;
    let swiper3 = null;

    const swiper2 = new Swiper(swipers[1], {
        modules: [],
        // Default parameters
        slidesPerView: 1.1,
        spaceBetween: 16,
        // Responsive breakpoints
        breakpoints: {
            1920: {
                slidesPerView: 3.5,
                spaceBetween: 16
            },
            768: {
                slidesPerView: 2.39,
                spaceBetween: 16
            },
            425: {
                slidesPerView: 1.43,
                spaceBetween: 16 
            }
        }
    });
    
    
    
        const updateElements = () => {
            let phone = window.matchMedia('(max-width: 425px) and (min-width: 0px)');
        

            if(phone.matches){
                if(!W510){
                    W510 = true;
                    swiper = new Swiper(swipers[0], {
                        modules: [],
                        // Default parameters
                        slidesPerView: 1.2,
                        spaceBetween: 16,
                        // Responsive breakpoints
                        breakpoints: {
                            320: {
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
                                slidesPerView: 1.43,
                                spaceBetween: 16 
                            }
                        }
                    });
                }
            } else{
                if(swiper){
                    swiper.destroy();
                    swiper = null;
                }
                if(swiper3){
                    swiper3.destroy();
                    swiper3 = null;
                }
                W510 = false;
            }

        }
    
    
    window.addEventListener('resize', () => {
        updateElements();
    });
    
    // if (window.innerWidth <= 768) { W768 = false } else { W768 = true }
    // if (window.innerWidth <= 510) { W510 = false } else { W510 = true }
    // if (window.innerWidth <= 425) { W425 = false } else { W425 = true }
    // if (window.innerWidth <= 360) { W360 = false } else { W360 = true }
    
    
    const nav = document.querySelector('nav');
    nav.querySelectorAll('.nav-wrap a').forEach(element => {
        if (element.getAttribute('for-page') == window.location.pathname.slice(1)) {
            element.style.color = 'var(--accent)';
        }
    });
    
    updateElements();
    
})
