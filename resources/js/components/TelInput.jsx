import { Dropdown } from "./Dropdown";
import Icon from "./Icon";

export default function TelInput() {
    return (
        <div className="telinput-container">
            <Dropdown chosen="+7" affectedElement=".telinput-container .telinput-field span">
                <div className="dropdown-option" aria-details="+7"><Icon src="/images/flags/ru.svg" alt=""></Icon></div>
                <div className="dropdown-option" aria-details="+77">Опция 2</div>
                <div className="dropdown-option" aria-details="+777">Опция 3</div>
            </Dropdown>
            <div className="telinput-field">
                <span>+7</span>
                <input type="tel" placeholder="999 999 99 99" maxLength={13} className="custom-input" />
            </div>
        </div>
    );
}