import anime from "animejs";

export default class Tabs {
    element: HTMLElement;
    content: NodeListOf<Element>;
    focusedTab: number;
    updateTabs: (targetId: number) => void;
    tabItems: NodeListOf<Element>;
    clickable: boolean;
    
    constructor(element: HTMLElement, content: NodeListOf<Element>, clickable?: boolean) {
        this.element = element;
        this.tabItems = this.element.querySelectorAll('.tab-item');
        this.content = content;
        this.focusedTab = 0;
        this.clickable = (clickable != undefined ? clickable : true);

        this.updateTabs = (targetId: number) => {
            anime({
                targets: this.content[this.focusedTab],
                duration: 1000,
                top: '-100%',
                opacity: 0,
            });

            this.content[this.focusedTab].classList.remove('tab-focused'); // Handling previous tab
            this.tabItems[this.focusedTab].classList.remove('tab-focused');
            this.focusedTab = targetId;

            anime({
                targets: this.content[this.focusedTab],
                duration: 1000,
                top: 0,
                opacity: 1,
            });

            this.content[this.focusedTab].classList.add('tab-focused'); // Handling now current tab
            this.tabItems[this.focusedTab].classList.add('tab-focused');
        }
        for (let index = 0; index < this.tabItems.length; index++) {
            const tab = this.tabItems[index];
            if (this.clickable) {
                tab.onclick = () => {
                    this.updateTabs(index);
                }
            }
        }

        this.updateTabs(this.focusedTab); // Update on load
    }
}