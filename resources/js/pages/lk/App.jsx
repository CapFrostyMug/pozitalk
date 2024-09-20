import * as React from 'react'
import ReactDOM from 'react-dom';
import '../../../sass/app.scss';
import Tabs from '../../../js/tabs';
import { DropdownLogic } from "../../../js/dropdownlogic";

// Importing design parts
import { Design } from './Design';
import anime from 'animejs';

// Content
import { Stage_SMS } from './content/Stages';
import { SmsTimerSpan } from './misc/SmsTimerSpan';
import { SmsResendButton } from './misc/SmsResendButton';
import { PhoneInput } from './misc/PhoneInput';
import { PersonalQuestions } from './misc/PersonalQuestions';

import SMS from '../../SMS';
import DateInput from '../../DateInput';

const appElement = document.getElementById('app');

function App() {
    return (
        <div className="__view__">
            <Design></Design>
        </div>
    );
}

export default App;
ReactDOM.render(<App />, appElement);

const tabContents = appElement.querySelectorAll('.lk-content .tab-content');
const tabsInst = new Tabs(appElement.querySelector('.tabs'), tabContents, false); // Instantiate Tabs
const tabsElements = appElement.querySelectorAll('.tabs .tab-item');
const tabsLines = appElement.querySelectorAll('.tabs .tab-line');

//#region STAGES CONTROLLER
const stageForward = (stageId, forward = true) => {
    tabsElements.forEach(element => {
        element.classList.remove('tab-behind');
    });
    if (forward) {
        anime({
            targets: tabContents[0],
            duration: 0,
            marginLeft: -50,
            opacity: 0
        });
        anime({
            targets: tabContents[0],
            duration: 500,
            marginLeft: 0,
            opacity: 1
        });
    } else {
        anime({
            targets: tabContents[0],
            duration: 0,
            marginLeft: 50,
            opacity: 0
        });
        anime({
            targets: tabContents[0],
            duration: 500,
            marginLeft: 0,
            opacity: 1
        });
    }
    switch (stageId) {
        case 0: // Phone entering stage
            ReactDOM.render(<PhoneInput />, tabContents[0], () => {
                const inputTelField = document.querySelector('.telinput-container .telinput-field input[type="tel"]');
                const inputTelCode = document.querySelector('.telinput-container .telinput-field span');

                //#region SMS INPUT
                document.querySelector('.sms-send-button').onclick = () =>  {
                    stageForward(1);
                }
                //#endregion
                //#region Real-time tel field formatting
                inputTelField.addEventListener('input', (e) => {
                    const pureInput = e.target.value.replace(/\s/g, '');
                    if (pureInput.length <= 3) {
                        e.target.value = pureInput;
                    }
                    if (pureInput.length > 3 && pureInput.length < 7) {
                        e.target.value = [pureInput.slice(0, 3), pureInput.slice(3)].join(' ');
                    }
                    if (pureInput.length > 6 && pureInput.length < 9) {
                        e.target.value = [pureInput.slice(0, 3), pureInput.slice(3, 6), pureInput.slice(6, 8)].join(' ');
                    }
                    if (pureInput.length > 8) {
                        e.target.value = [pureInput.slice(0, 3), pureInput.slice(3, 6), pureInput.slice(6, 8), pureInput.slice(8, 10)].join(' ');
                    }
                });
                //#endregion
                new DropdownLogic(document.querySelector('.dropdown'));
            });
            break;
        case 1: // SMS code entering page
            const inputTelField = document.querySelector('.telinput-container .telinput-field input[type="tel"]');
            const inputTelCode = document.querySelector('.telinput-container .telinput-field span');
                
            ReactDOM.render(<Stage_SMS tel={tabContents[0].children.length > 0 ? inputTelCode.textContent + ' ' + inputTelField.value : '?'} />, tabContents[0], () => {
                var _SMS_INST;
                const smsDigits = appElement.querySelectorAll('.sms-code-digit input[type="text"]');
                const smsTimerElement = appElement.querySelector('#smsTimerElement');
                appElement.querySelector('#authGotoPrevious').onclick = () => {
                    stageForward(0, false);
                }
                var smsAttempts = 1;
                const __SMS_INIT = () => {
                    // Probably backend has to be right here
                    _SMS_INST = new SMS('0'); // Instantiating SMS
                    ReactDOM.render(<SmsTimerSpan />, smsTimerElement, () => {
                        var smsTimer = 3 * smsAttempts;
                        const smsTimerDisplay = smsTimerElement.querySelector('.sms-code-timer');
                        smsTimerDisplay.textContent = smsTimer;
                        const smsTimerCountdown = setInterval(() => {
                            if (smsTimer > 0) {
                                smsTimer -= 1;
                                smsTimerDisplay.textContent = smsTimer;
                            } else {
                                ReactDOM.render(<SmsResendButton />, smsTimerElement, () => {
                                    const resendButton = smsTimerElement.querySelector('.sms-code-resend');
                                    resendButton.onclick = () => {
                                        smsAttempts += 1;
                                        __SMS_INIT();
                                    }
                                });
                                clearInterval(smsTimerCountdown);
                            }
                        }, 1000);
                    });
                }
                __SMS_INIT();

                smsDigits[0].focus();

                for (let index = 0; index < smsDigits.length; index++) {
                    smsDigits[index].classList.add('empty');
                    smsDigits[index].oninput = (event) => {
                        var SMS_CODE_INPUT_TOTAL = '';
                        var key = event.keyCode || event.charCode;
                        smsDigits[index].value = smsDigits[index].value.replace(/\D/g, '');
                        var isEmpty = smsDigits[index].value == "";
                        if (isEmpty) smsDigits[index].classList.add('empty');
                        else smsDigits[index].classList.remove('empty');
                        if (!isEmpty && key != 8 && key != 46) { // BACKSPACE / DEL detection
                            if (index < smsDigits.length - 1) {
                                if (smsDigits[index + 1].value == "") smsDigits[index + 1].focus();
                            }
                        }
                        smsDigits.forEach(input => {
                            SMS_CODE_INPUT_TOTAL += input.value;
                        });
                        if (SMS_CODE_INPUT_TOTAL == _SMS_INST.GENERATED_CODE) { // SMS code is right
                            stageForward(2);
                        }
                    }
                    smsDigits[index].onkeydown = (event) => {
                        var key = event.keyCode || event.charCode;
                        if (key == 8 || key == 46) { // BACKSPACE / DEL detection
                            if (index > 0) {
                                if (smsDigits[index].value == "") {
                                    smsDigits[index - 1].focus();
                                }
                            }
                        }
                    }
                }
            });
            break;
        case 2: // Personal questions
            ReactDOM.render(<></>, tabContents[0]);
            ReactDOM.render(<></>, tabContents[2]);
            tabsInst.updateTabs(1);
            tabsElements[0].classList.add('tab-behind');
            ReactDOM.render(<PersonalQuestions />, tabContents[1], () => {
                //#region Date field logic
                appElement.querySelectorAll('.input-date').forEach(field => {
                    new DateInput(field, true);
                });
                appElement.querySelectorAll('.discuss-list .discuss-option').forEach(option => {
                    option.onclick = () => {
                        option.toggleAttribute('active');
                    }
                });
            });
            break;
    }
}
//#endregion

stageForward(2); // Init

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
var W360 = false;
var W425 = false;

const updateElements = () => {
    if (!W768 && window.innerWidth <= 768) {
        W768 = true;
        wteUpdateElements();
    }
    if (W768 && window.innerWidth > 768) {
        W768 = false;
        wteUpdateElements();
    }
    if (!W510 && window.innerWidth <= 510) {
        W510 = true;
    }
    if (W510 && window.innerWidth > 510) {
        W510 = false;
    }
    if (!W360 && window.innerWidth <= 360) {
        W360 = true;
    }
    if (W360 && window.innerWidth > 360) {
        W360 = false;
    }
    if (!W425 && window.innerWidth <= 425) {
        W425 = true;
    }
    if (W425 && window.innerWidth > 425) {
        W425 = false;
    }
}

const wteUpdateElements = () => {
    if (W768) {
    } else {
        
    }
}

window.addEventListener('resize', () => {
    updateElements();
});

if (window.innerWidth <= 768) { W768 = false } else { W768 = true }
if (window.innerWidth <= 510) { W510 = false } else { W510 = true }
if (window.innerWidth <= 425) { W425 = false } else { W425 = true }
if (window.innerWidth <= 360) { W360 = false } else { W360 = true }

updateElements();
wteUpdateElements();