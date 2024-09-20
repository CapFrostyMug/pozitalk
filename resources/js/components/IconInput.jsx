import Icon from "./Icon"

export default function IconInput({ icon, type, name, id, placeholder, className }) {
    return (
        <div className={'custom-icon-input' + (className == undefined ? '' : ' ' + className)}>
            <Icon src={"/images/" + icon} alt="" />
            <input type={type} name={name} id={id} placeholder={placeholder} />
        </div>
    );
}