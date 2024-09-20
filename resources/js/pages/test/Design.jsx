import * as React from 'react'
import './style.scss';
import Section from '../../components/Section';
import Button from '../../components/Button';
import Nav from '../../components/Nav';
import Icon from '../../components/Icon';
import TestItem from '../../components/TestItem';
import Footer from '../../components/Footer';
import Copyright from '../../components/Copyright';
import TestMap from '../../components/TestMap';
import DescriptionTest from '../../components/DescriptionTest';
import Questions from '../../components/Questions';

export function Design() {
    const questions = [
        {heading: "Часто ли Вы замечаете, что проводите в интернете больше времени, чем намеревались?", defaultAnswer: "1"},
        {heading: "Часто ли Вы игнорируете домашние дела, чтобы провести больше времени в сети?", defaultAnswer: "1"},
        {heading: "Часто ли Вы предпочитаете разговор он-лайн личной встречи?", defaultAnswer: "1"},
        {heading: "Часто ли Вы заводите новые знакомства с пользователями Интернета?", defaultAnswer: "1"},
        {heading: "Часто ли окружающие интересуются количеством времени, которое Вы проводите в сети?", defaultAnswer: "1"},
        {heading: "Часто ли страдает ваша учёба или работа вследствие длительного пребывания в сети?", defaultAnswer: "1"},
        {heading: "Часто ли Вы проверяете электронную почту, прежде чем сделать что-либо другое, более необходимое?", defaultAnswer: "1"},
        {heading: "Часто ли страдает ваша производительность труда из-за увлечения Интернетом?", defaultAnswer: "1"},
        {heading: "Часто ли Вы занимаете оборонительную позицию и скрытничаете, когда Вас спрашивают, чем Вы занимаетесь в сети?", defaultAnswer: "1"},
        {heading: "Часто ли Вы отгоняете беспокоящие мысли о вашей реальной жизни утешительными мыслями об Интернете?", defaultAnswer: "1"},
        {heading: "Часто ли Вы предвкушаете, что скоро вновь окажетесь в Интернете?", defaultAnswer: "1"},
        {heading: "Часто ли Вы ощущаете, что жизнь без Интернета скучна, пуста и безрадостна?", defaultAnswer: "1"},
        {heading: "Часто ли Вы злитесь, ругаетесь, раздражаетесь или иным образом выражаете свою досаду, когда кто-то пытается отвлечь Вас от пребывания в Сети?", defaultAnswer: "1"},
        {heading: "Часто ли Вы пренебрегаете сном, засиживаясь в Интернете допоздна или ночью?", defaultAnswer: "1"},
        {heading: "Часто ли Вы думаете, чем займётесь в Интернете, будучи офф-лайн, или фантазируете о пребывании он-лайн?", defaultAnswer: "1"},
        {heading: "Часто ли Вы говорите себе: «Ещё минутку, ещё немного», находясь он-лайн?", defaultAnswer: "1"},
        {heading: "Часто ли терпите поражение в попытках сократить время, проводимое в сети?", defaultAnswer: "1"},
        {heading: "Часто ли пытаетесь скрыть количество времени, проводимого Вами в Сети?", defaultAnswer: "1"},
        {heading: "Часто ли Вы выбираете провести время в Интернете вместо того, чтобы выбраться куда-нибудь с друзьями?", defaultAnswer: "1"},
        {heading: "Часто ли Вы испытываете депрессию, подавленность или нервозность, будучи вне Сети, и отмечаете, что это состояние проходит, как только Вы оказываетесь он-лайн?", defaultAnswer: "1"}
    ]
    return(
        <div className='design'>
            <Section id="banner">
                <Nav></Nav>
                <TestMap
                test='Тест на интернет-зависимость'>
                </TestMap>

                <DescriptionTest
                src='/images/test/Интернет-зависимость2.svg'
                heading='Тест на интернет-зависимость'
                dtctext='Интернет-зависимость — навязчивое стремление использовать Интернет и избыточное пользование им, проведение большого количества времени в Сети. Интернет-зависимость не является психическим расстройством по медицинским критериям, однако в МКБ-11 включены зависимость от видеоигр и зависимость от азартных онлайн-игр'
                grades='На каждый вопрос проставьте вариант ответа, максимально точно подходящий, опираясь на эту шкалу: 1-никогда, 2-изредка, 3-временами, 4-часто, 5-постоянно.'
                questions='20 вопросов'
                time="3 минуты">
                </DescriptionTest>
            </Section>
            <Section id="test">
                <div className='testContainer'>
                    {questions.map((q, index) => (
                        <Questions
                        number={index}
                        totalNum={questions.length}
                        heading={q.heading}
                        defaultAnswer={q.defaultAnswer}>
                        </Questions>
                    ))}
                    <Button>Узнать результат</Button>
                </div>
            </Section>
            <Section id="footer">
                <Footer></Footer>
                <Copyright></Copyright>
            </Section>
        </div>
    )
}