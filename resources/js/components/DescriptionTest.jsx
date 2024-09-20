export default function DescriptionTest({src, heading, dtctext, grades, questions, time}){
    return(
        <div className="description-container">
            <img src={src}></img>
            <div className="DTContainer">
                <h2>{heading}</h2>
                <p className="DTCText">{dtctext}</p>
                <p className="grades">{grades}</p>
                <p className="attention">Результат теста не является диагнозом!</p>
                <div className="info">
                        <span className="questionsCount"><img src="/images/tests/circle-question.svg"></img>{questions}</span>
                        <span className="time"><img src="/images/tests/icon.svg"></img>{time}</span>
                    </div>
            </div>
        </div>
    )
}