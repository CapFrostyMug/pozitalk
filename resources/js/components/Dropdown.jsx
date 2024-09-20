import Icon from "./Icon";

export function Dropdown({ children, chosen, affectedElement, className }) {
    return (
        <div className={"dropdown" + (className != undefined ? ' ' + className : '')} chosen={chosen} affected-element={affectedElement}>
            <button><span></span> <Icon src="/images/dropdown_arrow.svg" alt="" className="dropdown-arrow"></Icon></button>
            <div className="dropdown-content">
                { children }
            </div>
        </div>
    );
}