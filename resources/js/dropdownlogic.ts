import anime from "animejs";

//#region Dropdown logic
export class DropdownLogic {
    element: Element | HTMLElement;
    updateSelection: (id: string | null) => void;

    constructor(element: Element | HTMLElement) {
        this.element = element;
        var dd_content: Element | HTMLElement;
        this.updateSelection = (id: string | null) => {
            if (id == null) return;
            dd_content.querySelectorAll('.dropdown-option').forEach(dd_option => {
                if (dd_option.getAttribute('aria-details') == id) {
                    const affectedElement = this.element.getAttribute('affected-element');
                    this.element.setAttribute('chosen', dd_option.getAttribute('aria-details')!);
                    dd.querySelector('span')!.innerHTML = dd_option.innerHTML;
                    if (affectedElement != undefined || affectedElement != null) {
                        document.querySelector(affectedElement)!.textContent = dd_option.getAttribute('aria-details');
                    }
                }
            });
        }

        const dd = this.element.querySelector('button')!;
        dd_content = this.element.querySelector('.dropdown-content')!;
        dd_content.querySelectorAll('.dropdown-option').forEach(dd_option => {
            dd_option.onclick = () => {
                this.updateSelection(dd_option.getAttribute('aria-details'));
            }
            this.updateSelection(this.element.getAttribute('chosen'));
        });
        dd.onclick = () => {
            this.element.classList.toggle('show');
            if (this.element.classList.contains('show')) {
                
            }
            if (this.element.classList.contains('show')) {
                dd_content.style = 'top: 80%; opacity: 0';
                anime({
                    targets: dd_content,
                    top: '100%',
                    duration: 500,
                    opacity: 1
                });
            }
            setTimeout(() => {
                document.querySelectorAll('.dropdown').forEach(d => {
                    if (d.isEqualNode(this.element)) return;
                    if (d.classList.contains('show')) {
                        d.classList.remove('show');
                    }
                });
            }, 0);
        }
    }
}

// Закрыть выпадающий список, если кликнуть вне его
window.addEventListener('click', (e) => {
    document.querySelectorAll('.dropdown').forEach(dd => {
        if (!e.target.matches('button')) {
            if (dd.classList.contains('show')) {
                dd.classList.remove('show');
            }
        }
    });
});
//#endregion