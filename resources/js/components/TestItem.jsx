export default function TestItem({src, heading, aboutTest, questions, time}){
    return(
        <a href="#">
            <div className="testItem">
                <img src={src}></img>
                <div className="TIText">
                    <h3>{heading}</h3>
                    <p>{aboutTest}</p>
                    <div className="info">
                        <span className="questionsCount"><img src="/images/tests/circle-question.svg"></img>{questions}</span>
                        <span className="time"><img src="/images/tests/icon.svg"></img>{time}</span>
                    </div>
                </div>
            </div>
        </a>
    )
}