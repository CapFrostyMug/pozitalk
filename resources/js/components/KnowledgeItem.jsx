export default function KnowledgeItem({src, heading, aboutTest, time}){
    return(
        <a href="#">
            <div className="knowledgeItem">
                <img src={src}></img>
                <div className="TIText">
                    <h3>{heading}</h3>
                    <p>{aboutTest}</p>
                    <div className="info">
                        <span className="time"><img src="/images/tests/icon.svg"></img>{time}</span>
                    </div>
                </div>
            </div>
        </a>
    )
}