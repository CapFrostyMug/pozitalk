import { useState } from "react"
export default function Questions({totalNum, number, heading, defaultAnswer}){
    const [selectedAnswer, setSelectedAnswer] = useState(defaultAnswer);

    const handleAnswerChange = (event) => {
        setSelectedAnswer(event.target.value);
    }

    const getClassName = (value) => {
        return selectedAnswer === value ? "answer selected" : "answer";
    }
    return(
        <div className="question">
            <div className="header">
                <span>{number+1} / {totalNum}</span>
                <h3>{heading}</h3>
            </div>
            <div className={getClassName('1')}>
                <input type="radio" id={`never-${number}`} name={`question-${number}`} value={1} checked={selectedAnswer === '1'} onChange={handleAnswerChange}></input>
                <label  htmlFor={`never-${number}`}>Никогда</label>
            </div>
            <div className={getClassName('2')}>
                <input type="radio" id={`occasionally-${number}`} name={`question-${number}`} value={2} checked={selectedAnswer === '2'} onChange={handleAnswerChange}></input>
                <label  htmlFor={`occasionally-${number}`}>Изредка</label>
            </div>
            <div className={getClassName('3')}>
                <input type="radio" id={`sometimes-${number}`} name={`question-${number}`} value={3} checked={selectedAnswer === '3'} onChange={handleAnswerChange}></input>
                <label  htmlFor={`sometimes-${number}`}>Временами</label>
            </div>
            <div className={getClassName('4')}>
                <input type="radio" id={`often-${number}`} name={`question-${number}`} value={4} checked={selectedAnswer === '4'} onChange={handleAnswerChange}></input>
                <label  htmlFor={`often-${number}`}>Часто</label>
            </div>
            <div className={getClassName('5')}>
                <input type="radio" id={`constantly-${number}`} name={`question-${number}`} value={5} checked={selectedAnswer === '5'} onChange={handleAnswerChange}></input>
                <label  htmlFor={`constantly-${number}`}>Постоянно</label>
            </div>
        </div>
    )
}