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


window.addEventListener('load', () =>{

    const nav = document.querySelector('nav');
    nav.querySelectorAll('.nav-wrap a').forEach(element => {
        if (element.getAttribute('for-page') == window.location.pathname.slice(1)) {
            element.style.color = 'var(--accent)';
        }
    });

})