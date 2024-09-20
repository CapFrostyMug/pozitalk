import * as React from 'react'
import './style.scss';
import Section from '../../components/Section';
import Button from '../../components/Button';
import Nav from '../../components/Nav';
import Icon from '../../components/Icon';
import TestItem from '../../components/TestItem';
import Footer from '../../components/Footer';
import Copyright from '../../components/Copyright';

export function Design() {
    return(
        <div className='design'>
            <Section id='banner'>
                <Nav></Nav>
            </Section>
            <Section id='tests'>
                <div className='tests-heading'>
                    <h1>Психологические тесты</h1>
                    <p>«В основе этих тестов — книги и научные публикации всемирно известных психологов. Результат теста не является диагнозом; его цель — помочь вам задать себе правильные вопросы, подтолкнуть к исследованию себя — самостоятельному или с помощью профессионального психолога»</p>
                    <div className='searchItem'>
                        <div className='inputItem'>
                            <input type="text" placeholder='Найти тест'></input>
                        </div>
                        <Button><Icon src='/images/tests/search.svg'></Icon></Button>
                    </div>
                </div>
                <div className='TestsContainer'>
                    <TestItem 
                    src='/images/tests/Интернет-зависимость.svg'
                    heading="Тест на интернет-зависимость"
                    aboutTest="Как экранное время влияет на ваше психологическое здоровье?"
                    questions="20 вопросов"
                    time="3 минуты">
                    </TestItem>
                    
                    <TestItem
                    src='/images/tests/Перфекционист.svg'
                    heading="Тест на перфекционизм"
                    aboutTest="Вы слишком строги к себе? Не идельные результаты расстраивают вас?"
                    questions="30 вопросов"
                    time="5 минут">
                    </TestItem>

                    <TestItem
                    src='/images/tests/стиль_привязанности 1.svg'
                    heading="Ваш стиль привязанности"
                    aboutTest="Беспокоит ли вас одиночество? Узнайте в тесте"
                    questions="30 вопросов"
                    time="5 минут">
                    </TestItem>

                    <TestItem
                    src='/images/tests/Frame 2131327969 1.svg'
                    heading="Самооценка психических состояний"
                    aboutTest="Узнайте, есть ли у Вас признаки пограничного расстройства личности. Пройдите тест"
                    questions="40 вопросов"
                    time="7 минут">
                    </TestItem>

                    <TestItem
                    src='/images/tests/Group 20873240 85.svg'
                    heading="Шкала депрессии Бека"
                    aboutTest="Устаете больше чем обычно? Может изменения аппетита или массы тела?"
                    questions="21 вопросов"
                    time="3 минуты">
                    </TestItem>

                    <TestItem
                    src='/images/tests/родит 1.svg'
                    heading="Тест на сепарацию от родителей"
                    aboutTest="Как с этим обстоят дела у вас? Результаты теста помогут понять"
                    questions="15 вопросов"
                    time="2 минуты">
                    </TestItem>

                    <TestItem
                    src='/images/tests/Group 2087324083 1.svg'
                    heading="Какой у Вас уровень самооценки?"
                    aboutTest="Чувствуете себя неуверенно в обществе и знакомстве с людьми? Резульаты теста помогут понять"
                    questions="32 вопроса"
                    time="5 минут">
                    </TestItem>

                    <TestItem
                    src='/images/tests/рац 1.svg'
                    heading="Тест на иррациональные установки"
                    aboutTest="Вы не терпеливы к некоторым вещам, которые делают ваши друзья или члены вашей семьи?"
                    questions="50 вопросов"
                    time="8 минут">
                    </TestItem>

                    <TestItem
                    src='/images/tests/8_цветов 1.svg'
                    heading="Восьмицветовой тест Люшера"
                    aboutTest="Методика используется для диагностики психофизиологического состояния человека"
                    questions="10 вопросов"
                    time="2 минуты">
                    </TestItem>

                    <TestItem
                    src='/images/tests/принять себя 1.svg'
                    heading="Куб в пустыне"
                    aboutTest="Хотите увидеть себя таким, каким Вы есть на самом деле? Тест позволит вам узнать себя лучше"
                    questions="56 вопросов"
                    time="9 минут">
                    </TestItem>

                    <TestItem
                    src='/images/tests/Group 2087324108.svg'
                    heading="Тест на пять травм"
                    aboutTest="У вас есть маска под которой скрыты ваши травмы? Тест позволит определить вашу главную травму"
                    questions="40 вопросов"
                    time="7 минут">
                    </TestItem>

                    <TestItem
                    src='/images/tests/Group 2087324109 1.svg'
                    heading='Тест на сепарацию от родителей "Барашек в бутылке"'
                    aboutTest="Ребенок отдаляется от вас? Пройдите тест чтобы узнать причину"
                    questions="6 вопросов"
                    time="10 минут">
                    </TestItem>

                    <TestItem
                    src='/images/tests/семейные 1.svg'
                    heading="Тест на семейные взаимоотношения"
                    aboutTest="Позволяет определить различные нарушения процесса воспитания"
                    questions="130 вопросов"
                    time="21 минут">
                    </TestItem>

                    <TestItem
                    src='/images/tests/стиль_привязанности 2.svg'
                    heading="Определение типа привязанности"
                    aboutTest="Беспокоит ли вас одиночество? Узнайте в тесте"
                    questions="30 вопросов"
                    time="5 минут">
                    </TestItem>

                    <TestItem
                    src='/images/tests/Frame 2131327997.svg'
                    heading="Госпитальная шкала тревоги и депрессии"
                    aboutTest="Чем депрессия отличается от тревоги? Пройдите тест чтобы узнать"
                    questions="14 вопросов"
                    time="2 минуты">
                    </TestItem>

                    <TestItem
                    src='/images/tests/шкала шамильтона 1.svg'
                    heading="Шкала Гамильтона для оценки тревоги"
                    aboutTest="Панические атаки? Беспокойство? Бессоница? Пройдите тест и узнайте почему"
                    questions="14 вопросов"
                    time="2 минуты">
                    </TestItem>

                    <TestItem
                    src='/images/tests/Frame 21313279972.svg'
                    heading="Висбаденский опросник"
                    aboutTest="Этот тест преднозначет для круга людей с проблемами характера"
                    questions="85 вопросов"
                    time="14 минут">
                    </TestItem>

                    <TestItem
                    src='/images/tests/Group 2087324086.svg'
                    heading="Шкала безнадёжности А.Бека"
                    aboutTest="Вы верите, что не достигните своих целей? Пройдите тест чтобы проверить это"
                    questions="20 вопросов"
                    time="3 минуты">
                    </TestItem>
                </div>
                <Button>Загрузить ещё</Button>
            </Section>
            <Section id='footer'>
                <Footer></Footer>
                <Copyright></Copyright>
            </Section>
        </div>
    )
}