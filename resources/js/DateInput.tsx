import ReactDOM from 'react-dom';
import { Dropdown } from './components/Dropdown';
import { getAllSundays } from './ExtraQuirks';
import React from 'react';
import Icon from './components/Icon';
import { DropdownLogic } from './dropdownlogic';

export default class DateInput {
    element: HTMLElement | Element;
    preventAhead: boolean;
    chosenDate: Date | null;
    selectDate: (datestr: Date) => void

    constructor(element: HTMLElement | Element, preventAhead?: boolean, customDateStr?: string) {
        const displayDate = new Date();
        const currentDate = new Date();

        const yearsRange = [1900, this.preventAhead ? displayDate.getFullYear() : displayDate.getFullYear() + 10];
        const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
        const weekdays = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

        this.element = element;
        const dateBox = this.element.querySelector('.inpd-date-box')!;
        dateBox.setAttribute('hidden', '');
        this.preventAhead = (preventAhead != undefined ? preventAhead : false);
        this.chosenDate = (customDateStr != undefined ? new Date(customDateStr) : null);
        
        const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('.date-result');

        const getMaxDays = (date: Date) => {
            let maxDays = 31;
            if (date.getMonth() % 2 > 0) {
                maxDays = 31;
            }
            if (date.getMonth() % 2 == 0) {
                maxDays = 30;
            }
            if (date.getMonth() == 12) {
                maxDays = 31;
            }
            if (date.getMonth() == 1) {
                const year = date.getFullYear();
                maxDays = (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) ? 29 : 28;
            }
            return maxDays;
        }

        const currentMaxDays = getMaxDays(currentDate);;

        this.selectDate = (datestr: Date) => {
            this.chosenDate = datestr;
            inputs[0].value = this.chosenDate.getDate() < 10 ? `0${this.chosenDate.getDate()}` : `${this.chosenDate.getDate()}`;
            inputs[1].value = this.chosenDate.getMonth()+1 < 10 ? `0${this.chosenDate.getMonth()+1}` : `${this.chosenDate.getMonth()+1}`;
            inputs[2].value = `${this.chosenDate.getFullYear()}`;
            updateDaySheet(displayDate);
        }

        //#region Handling the input fields
        const checkDateInputs = () => {
            if (
                inputs[0].value.length > 0 || // Day
                inputs[1].value.length > 0 || // Month
                inputs[2].value.length > 0    // Year
            ) {
                const inputDate = new Date(`${inputs[1].value.length > 0 ? inputs[1].value : currentDate.getMonth()+1}-${inputs[0].value.length > 0 ? inputs[0].value : currentDate.getDate()}-${(inputs[2].value.length > 0 ? inputs[2].value : currentDate.getFullYear())}`);
                if (inputDate.toString() != "Invalid Date") {
                    if (this.preventAhead) {
                        if (!(
                            (inputDate.getMonth() > currentDate.getMonth() && inputDate.getFullYear() == currentDate.getFullYear()) ||
                            inputDate.getFullYear() > currentDate.getFullYear() ||
                            inputDate.getMonth() == currentDate.getMonth() && inputDate.getFullYear() == currentDate.getFullYear() && inputDate.getDate() > currentDate.getDate()
                        )) {
                            this.chosenDate = inputDate;
                        } else {
                            this.chosenDate = null;
                        }
                    }
                    updateDaySheet(inputDate);
                } else {
                    this.chosenDate = null;
                    updateDaySheet(currentDate);
                }
            } else {
                this.chosenDate = null;
                updateDaySheet(currentDate);
            }
        }
        for (let index = 0; index < inputs.length; index++) {
            let lastVal = ['', '', ''];
            inputs[index].oninput = (event) => {
                var key = event.keyCode || event.charCode;
                var isEmpty = inputs[index].value == "";
                inputs[index].value = inputs[index].value.replace(/\D/g, '');
                if (!isEmpty && key != 8 && key != 46) { // BACKSPACE / DEL detection
                    if (index < inputs.length - 1) {
                        if (inputs[index + 1].value == "" && inputs[index].value.length == 2) inputs[index + 1].focus();
                    }
                }
                if (
                    inputs[0].value.length > 0 ||
                    inputs[1].value.length > 0 ||
                    inputs[2].value.length > 0
                ) {
                    lastVal[index] = `${lastVal[index]}${inputs[index].value}`;

                    if (index == 0) {
                        if (parseInt(lastVal[index]) > currentMaxDays || lastVal[index].length > 2) {
                            lastVal[index] = inputs[index].value;
                        }
                    }

                    if (index == 1) {
                        if (parseInt(lastVal[index]) > months.length || lastVal[index].length > 2) {
                            lastVal[index] = inputs[index].value;
                        }
                    }

                    if (index == 2) {
                        if ((parseInt(lastVal[index]) > yearsRange[1] && this.preventAhead) || lastVal[index].length > 3) {
                            lastVal[index] = inputs[index].value;
                        }
                    }

                    if (lastVal[index].length > 0) {
                        if (index != 2) {
                            inputs[index].value = `${lastVal[index].length < 2 ? '0' : ''}${lastVal[index]}`;
                        } else {
                            inputs[index].value = `${currentDate.getFullYear().toString()[0]}${lastVal[index].length < 4 ? '0'.repeat(3 - lastVal[index].length) : ''}${lastVal[index]}`;
                        }
                    }

                    inputs[index].select();

                    if (lastVal[index].length > 1) {
                        if (index < inputs.length - 1) {
                            inputs[index+1].focus();
                        }
                    }

                    checkDateInputs();
                }
            }
            inputs[index].onclick = () => {
                inputs[index].select();
            }
            inputs[index].onkeydown = (event) => {
                var key = event.keyCode || event.charCode;
                if (key == 8 || key == 46) { // BACKSPACE / DEL detection
                    if (index > 0) {
                        if (inputs[index].value == "") {
                            inputs[index - 1].focus();
                        } else {
                            inputs[index].value = "";
                        }
                        setTimeout(() => {
                            lastVal[index] = '';
                            checkDateInputs();
                        }, 0);
                    }
                }
                if (key === 13) { // ENTER detection
                    inputs[index].blur();
                    checkDateInputs();
                }
            }
            inputs[index].onfocus = () => {
                lastVal = ['', '', ''];
                if (dateBox.getAttribute('hidden') != null) dateBox.removeAttribute('hidden');
                inputs[index].select();
            }
        }

        //#region Setting up the top (month) wrapper
        const dbxTop = document.createElement('div');
        dbxTop.classList.add('inpd-dbx-wrapper', 'dbx-month-wrap');
        // A container where to put all the months
        const dbxMonthsContent = document.createElement('div');
        dbxMonthsContent.classList.add('inpd-dbx-wrapper', 'dbx-months-list');

        // Setting up control arrows
        const dbxControlArrows = [document.createElement('div'), document.createElement('div')];
        dbxControlArrows[0].classList.add('inpd-dbx-control-arrow', 'dbx-arrow-left');
        dbxControlArrows[0].append(document.createElement('div'));
        dbxControlArrows[1].classList.add('inpd-dbx-control-arrow', 'dbx-arrow-right');
        dbxControlArrows[1].append(document.createElement('div'));
        dbxControlArrows[0].onclick = () => {
            // Move to previous day
            const tempDate = new Date(displayDate);
            tempDate.setMonth(tempDate.getMonth() - 1);
            updateDaySheet(tempDate);
        }
        dbxControlArrows[1].onclick = () => {
            // Move to previous day
            const tempDate = new Date(displayDate);
            tempDate.setMonth(tempDate.getMonth() + 1);
            updateDaySheet(tempDate);
        }
        dbxTop.append(dbxControlArrows[0], dbxMonthsContent, dbxControlArrows[1]);
        //#endregion

        //#region Setting up the bottom (day) wrapper
        const dbxBottom = document.createElement('div');
        dbxBottom.classList.add('inpd-dbx-wrapper', 'dbx-day-wrap');
        // Setting up the day table
        const dbxDayTable = document.createElement('table');
        dbxDayTable.classList.add('dbx-weekdays');
        const dbxDayTableTrCellA = document.createElement('tr');
        weekdays.forEach(wd => {
            const th = document.createElement('th');
            th.textContent = wd;
            dbxDayTableTrCellA.append(th);
        });
        
        const updateDaySheet = (targetDate: Date) => {
            var monthddinst: DropdownLogic;
            var yearddinst: DropdownLogic;

            if (this.preventAhead) {
                if (
                    (targetDate.getMonth() > currentDate.getMonth() && targetDate.getFullYear() == currentDate.getFullYear()) ||
                    targetDate.getFullYear() > currentDate.getFullYear()
                ) {
                    return false;
                }
            }

            displayDate.setDate(targetDate.getDate());
            displayDate.setMonth(targetDate.getMonth());
            displayDate.setFullYear(targetDate.getFullYear());

            dbxDayTable.innerHTML = '';
            dbxDayTable.append(dbxDayTableTrCellA);
            dbxBottom.append(dbxDayTable);
            dbxMonthsContent.innerHTML = '';

            const maxDays = getMaxDays(displayDate);

            // Month dropdown
            const monthDropdown = document.createElement('div');
            const monthElements: React.JSX.Element[] = [];
            for (let index = 0; index < months.length; index++) {
                monthElements.push(<div className="dropdown-option" aria-details={`${index}`} onClick={(e) => {
                    const prevData = displayDate.getMonth();
                    if (!updateDaySheet(new Date(`${displayDate.getFullYear()}-${index+1}-${currentDate.getDate()}`))) {
                        monthddinst.updateSelection(`${prevData}`);
                    }
                }}>{months[index]}</div>);
            }
            const monthDropdownJSX = <Dropdown className="dbx-months-dropdown" chosen={displayDate.getMonth()} affectedElement={undefined}>
                {monthElements}
            </Dropdown>;
            
            ReactDOM.render(monthDropdownJSX, monthDropdown);
            dbxMonthsContent.append(monthDropdown);

            // Separator
            dbxMonthsContent.append('·');

            // Year dropdown
            const yearDropdown = document.createElement('div');
            const yearElements: React.JSX.Element[] = [];
            for (let index = yearsRange[1]; index > yearsRange[0] - 1; index--) {
                yearElements.push(<div className="dropdown-option" aria-details={`${index}`} onClick={() => {
                    const prevData = displayDate.getFullYear();
                    if (!updateDaySheet(new Date(`${index}-${displayDate.getMonth()+1}-${currentDate.getDate()}`))) {
                        yearddinst.updateSelection(`${prevData}`);
                    }
                }}>{index}</div>);
            }
            const dayDropdownJSX = <Dropdown className="dbx-years-dropdown" chosen={displayDate.getFullYear()} affectedElement={undefined}>
                {yearElements}
            </Dropdown>;
            
            ReactDOM.render(dayDropdownJSX, yearDropdown);
            dbxMonthsContent.append(yearDropdown);

            const sundays = getAllSundays(
                new Date(`${displayDate.getFullYear()}-${displayDate.getMonth()+1}-1`),
                new Date(`${displayDate.getFullYear()}-${displayDate.getMonth()+1}-${maxDays}`)
            );

            var iterDate = new Date(`${displayDate.getFullYear()}-${displayDate.getMonth()+1}-${sundays[0]}`);
            if (sundays[0] > 1) {
                iterDate.setDate(iterDate.getDate() - 1);
                while (iterDate.getDay() > 0) {
                    iterDate.setDate(iterDate.getDate() - 1);
                }
            }
            for (let i = 0; i < 6; i++) {
                const dbxDayTableTrCellB = document.createElement('tr');
                for (let j = 0; j < weekdays.length; j++) {
                    const currentIterDate = [iterDate.getDate(), iterDate.getMonth(), iterDate.getFullYear()];
                    const td = document.createElement('td');
                    td.textContent = `${iterDate.getDate()}`;
                    if (this.preventAhead) {
                        if (
                            (iterDate.getMonth() > currentDate.getMonth() && iterDate.getFullYear() == currentDate.getFullYear()) ||
                            iterDate.getFullYear() > currentDate.getFullYear() ||
                            iterDate.getMonth() == currentDate.getMonth() && iterDate.getFullYear() == currentDate.getFullYear() && iterDate.getDate() > currentDate.getDate()
                        ) {
                            td.classList.add('passed');
                        }
                    }
                    if (
                        this.chosenDate?.getDate() == iterDate.getDate() &&
                        this.chosenDate?.getMonth() == iterDate.getMonth() &&
                        this.chosenDate?.getFullYear() == iterDate.getFullYear()
                    ) {
                        td.classList.add('selected');
                    }
                    td.onclick = () => {
                        dbxDayTable.querySelectorAll('td').forEach(_ => {
                            if (_.classList.contains('selected')) {
                                _.classList.remove('selected');
                            }
                        });
                        const pointDate = new Date(`${currentIterDate[1]+1}-${currentIterDate[0]}-${currentIterDate[2]}`);
                        this.selectDate(pointDate);
                        td.classList.add('selected');
                    }
                    dbxDayTableTrCellB.append(td);
                    iterDate.setDate(iterDate.getDate() + 1);
                }
                dbxDayTable.append(dbxDayTableTrCellB);
            }

            setTimeout(() => {
                monthddinst = new DropdownLogic(monthDropdown.querySelector('.dropdown')!);
                yearddinst = new DropdownLogic(yearDropdown.querySelector('.dropdown')!);
            }, 0);

            return true;
        }
        updateDaySheet(currentDate);
        //#endregion
        
        dateBox.append(dbxTop, dbxBottom);

        window.addEventListener('click', (e) => {
            if (!e.target.matches('html') ) {
                if (!(
                    e.target.parentElement.classList.contains('dbx-weekdays') ||
                    e.target.parentElement.classList.contains('dbx-day-wrap') ||
                    e.target.parentElement.classList.contains('input-date') ||
                    e.target.classList.contains('input-date') ||
                    e.target.parentElement.classList.contains('inpd-date-box') ||
                    e.target.parentElement.classList.contains('inpd-display') ||
                    e.target.parentElement.classList.contains('dbx-month-wrap') ||
                    e.target.parentElement.classList.contains('dbx-months-dropdown') ||
                    e.target.parentElement.classList.contains('dbx-years-dropdown') ||
                    e.target.parentElement.classList.contains('inpd-dbx-wrapper') ||
                    e.target.parentElement.classList.contains('dropdown-option') ||
                    e.target.parentElement.classList.contains('dropdown-content') ||
                    e.target.parentElement.matches('tr') ||
                    e.target.parentElement.matches('td') ||
                    e.target.parentElement.matches('th')
                )) {
                    dateBox.setAttribute('hidden', '');
                }
            } else {
                dateBox.setAttribute('hidden', '');
            }
        });
    }
}