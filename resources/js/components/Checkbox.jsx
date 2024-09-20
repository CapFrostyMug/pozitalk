import Icon from "./Icon";

export default function Checkbox({ label, name, id, style }) {
    return (
        <div className="checkbox" style={style}>
            <label htmlFor={id}>
                <input type="checkbox" name={name} id={id} />
                <div className="checkbox-wrap">
                    <div className="checkbox-box"></div>
                    <div className="checkbox-cover">
                        <Icon src="/images/white-check.svg" className="checkbox-checkmark" alt="" />
                    </div>
                </div>
                {label != undefined ? <p>{ label }</p> : <></>}
            </label>
        </div>
    );
}