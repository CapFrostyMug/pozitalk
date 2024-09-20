import * as React from 'react'
import './style.scss';
import Section from '../../components/Section';
import Button from '../../components/Button';
import Nav from '../../components/Nav';
import Icon from '../../components/Icon';
import KnowledgeItem from '../../components/KnowledgeItem';
import Copyright from '../../components/Copyright';
import Footer from '../../components/Footer';
export function Design() {
    return(
        <div className='design'>
            <Section id='banner'>
                <Nav></Nav>
            </Section>
            <Section id='knowledges'>
                <div className='knowledges-heading'>
                    <h1>База знаний</h1>
                    <p>Добро пожаловать в нашу базу знаний — место, где собраны богатые ресурсы для саморазвития, понимания психологии и улучшения эмоционального благополучия. Здесь вы найдете разнообразные материалы, которые помогут вам глубже понять себя и окружающий мир.</p>
                    <div className='searchItem'>
                        <div className='inputItem'>
                            <input type="text" placeholder='Найти знание'></input>
                        </div>
                        <Button><Icon src='/images/tests/search.svg'></Icon></Button>
                    </div>
                </div>
                <div className='knowledgeContainer'>
                    <KnowledgeItem
                    src='#'
                    heading='Понимание тревожных расстройств'
                    aboutTest='Обзор основных типов тревожных расстройст и эффективных методов их лечения'
                    time='15 минут'>
                    </KnowledgeItem>

                    <KnowledgeItem
                    src=''
                    heading='Эмоциональный интелект: ключ к успешной жизни'
                    aboutTest='Важность эмоционального интелекта и способы его развития для улучшения личных и профессиональных отношений'
                    time='25 минут'>
                    </KnowledgeItem>

                    <KnowledgeItem
                    src=''
                    heading='Техники управления стрессом'
                    aboutTest='Практические советы и упранения для снижения уровня стресса и повышения устойчивости к нему'
                    time='10 минут'
                    >
                    </KnowledgeItem>

                    <KnowledgeItem
                    src=''
                    heading='Арт-терапия: лечение через творчество'
                    aboutTest='Преимущества арт-терапии и примеры техник, используемых в работе с различными клиентами'
                    time='10 минут'>
                    </KnowledgeItem>

                    <KnowledgeItem
                    src=''
                    heading='Влияние детских травм на взрослую жизнь'
                    aboutTest='Как пережитые в детстве травмы могут повлиять на взрослую жизнь и способы их преодоления'
                    time='15 минут'>
                    </KnowledgeItem>

                    <KnowledgeItem
                    src=''
                    heading='Понимание тревожных расстройств'
                    aboutTest='Обзор основных типов тревожных расстройст и эффективных методов их лечения'
                    time='15 минут'>
                    </KnowledgeItem>

                    <KnowledgeItem
                    src=''
                    heading='Психология самооценки'
                    aboutTest='Исследование факторов, влияющих на самооценку, и стратегии для её повышения.'
                    time='10 минут'>
                    </KnowledgeItem>

                    <KnowledgeItem
                    src=''
                    heading='Понимание тревожных расстройств'
                    aboutTest='Обзор основных типов тревожных расстройст и эффективных методов их лечения'
                    time='15 минут'>
                    </KnowledgeItem>

                    <KnowledgeItem
                    src=''
                    heading='Эмоциональный интелект: ключ к успешной жизни'
                    aboutTest='Важность эмоционального интелекта и способы его развития для улучшения личных и профессиональных отношений'
                    time='25 минут'>
                    </KnowledgeItem>

                    <KnowledgeItem
                    src=''
                    heading='Техники управления стрессом'
                    aboutTest='Практические советы и упранения для снижения уровня стресса и повышения устойчивости к нему'
                    time='10 минут'>
                    </KnowledgeItem>

                    <KnowledgeItem
                    src=''
                    heading='Понимание тревожных расстройств'
                    aboutTest='Обзор основных типов тревожных расстройст и эффективных методов их лечения'
                    time='15 минут'>
                    </KnowledgeItem>

                    <KnowledgeItem
                    src=''
                    heading='Психология самооценки'
                    aboutTest='Исследование факторов, влияющих на самооценку, и стратегии для её повышения.'
                    time='10 минут'>
                    </KnowledgeItem>

                    <KnowledgeItem
                    src=''
                    heading='Влияние детских травм на взрослую жизнь'
                    aboutTest='Как пережитые в детстве травмы могут повлиять на взрослую жизнь и способы их преодоления'
                    time='15 минут'>
                    </KnowledgeItem>

                    <KnowledgeItem
                    src=''
                    heading='Арт-терапия: лечение через творчество'
                    aboutTest='Преимущества арт-терапии и примеры техник, используемых в работе с различными клиентами'
                    time='10 минут'>
                    </KnowledgeItem>

                    <KnowledgeItem
                    src=''
                    heading='Техники управления стрессом'
                    aboutTest='Практические советы и упранения для снижения уровня стресса и повышения устойчивости к нему'
                    time='10 минут'>
                    </KnowledgeItem>

                    <KnowledgeItem
                    src=''
                    heading='Эмоциональный интелект: ключ к успешной жизни'
                    aboutTest='Важность эмоционального интелекта и способы его развития для улучшения личных и профессиональных отношений'
                    time='25 минут'>
                    </KnowledgeItem>

                    <KnowledgeItem
                    src=''
                    heading='Понимание тревожных расстройств'
                    aboutTest='Обзор основных типов тревожных расстройст и эффективных методов их лечения'
                    time='15 минут'>
                    </KnowledgeItem>

                    <KnowledgeItem
                    src=''
                    heading='Психология самооценки'
                    aboutTest='Исследование факторов, влияющих на самооценку, и стратегии для её повышения.'
                    time='10 минут'
                    >
                    </KnowledgeItem>
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