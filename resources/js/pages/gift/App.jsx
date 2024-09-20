import * as React from 'react'
import ReactDOM from 'react-dom';
import '../../../sass/app.scss';

// Importing design parts
import {Design} from './Design';
import Swiper from 'swiper';

const appElement = document.getElementById('app');

function App() {
    return (
        <div className="__view__">
            <Design></Design>
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

const design = document.querySelector(".design");

if (split_url.length > 1) {
    split_url = split_url[1].split("&");
    for (var i = 0; i < split_url.length; i ++) {
        var data = split_url[i];
    }
}

var W768 = false;
var W510 = false;
var W425 = false;
var W360 = false;

window.addEventListener('load', () =>{
    const swipers = document.querySelectorAll('.swiper');
    const swiperBlocks = [
        swipers[0].querySelectorAll('.sessionItem'),
        
    ]
    let swiper = null;



      

        const updateElements = () => {
            const currentWidth = window.innerWidth;
            let mobile = window.matchMedia('(min-width: 0px) and (max-width: 768px)');
        
            if (mobile.matches) {
                if(!W768){
                W768 = true;
                swiper = new Swiper(swipers[0], {
                    modules: [],
                    // Default parameters
                    slidesPerView: 1.2,
                    spaceBetween: 16,
                    // Responsive breakpoints
                    breakpoints: {
                        768: {
                            slidesPerView: 2.4,
                            spaceBetween: 16
                        },
                        425: {
                            slidesPerView: 1.05,
                            spaceBetween: 10
                        }
                    }
                });
            }} else{
                if (swiper){
                    swiper.destroy();
                    swiper = null;
                }
                W768 = false;
            } 
        

            if (!W510 && currentWidth <= 510) {
                W510 = true;
            }
            if (W510 && currentWidth > 510) {
                W510 = false;
            }
        

            if (!W360 && currentWidth <= 360) {
                W360 = true;
            }
             if (W360 && currentWidth > 360) {
                W360 = false;
            }
        }
        updateElements();

    window.addEventListener('resize', () => {
        updateElements();
    });


    const nav = document.querySelector('nav');
    nav.querySelectorAll('.nav-wrap a').forEach(element => {
        if (element.getAttribute('for-page') == window.location.pathname.slice(1)) {
            element.style.color = 'var(--accent)';
        }
    });

    updateElements();
})
