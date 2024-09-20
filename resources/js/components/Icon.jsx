export default function Icon({ src, alt, className }) {
    return(
        <img src={src} draggable="false" alt={alt} style={{ userSelect: 'none' }} className={'icon' + (className == undefined ? '' : ' ' + className)} />
    );
}