export default function Button({ children, hollow, className, id, style, xs}) {
    return(
        <div style={style} class={"custom-button" + (xs ? " cb-xs" : "") + (hollow ? " custom-button-hollow" : "") + (className == undefined ? '' : className)} id={id}>
            { children }
        </div>
    );
}