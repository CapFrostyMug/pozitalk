import * as React from 'react'
import '../../../sass/style_b.scss';
import Section from '../../components/Section';
import Button from '../../components/Button'
import Footer from '../../components/Footer';
import Copyright from '../../components/Copyright';

export function DesignB() {
    return(
        <div className='design__b'>
            <Section id="HowToStart">
                <h2>Как начать психотерапию</h2>
                <div className='swiper'>
                    <div className='swiper-wrapper HTSContainer'>
                            <div className='swiper-slide HTSC-block LSContent'>
                                <img src='/images/HowToStart/Rectangle 111001753.svg'></img>
                                <img src='/images/HowToStart/Frame 2131328008.svg' className='firstImg'></img>
                                <div className='LSCText'>
                                    <h3>Пройдите быструю регистрацию</h3>
                                    <p>Напишите, что Вас беспокоит и выберите удобное время для сессии. Вы можете также указать определённые характеристики психолога (возраст, пол и т.д.)</p>
                                </div>
                            </div>
                            <div className='swiper-slide HTSC-block RSContent'>
                                <img src="/images/HowToStart/Union.svg" alt="" />
                                <img src="/images/HowToStart/Frame 2131328009.svg" alt="" className='secondImg'/>
                                <div className='RSCText'>
                                    <h3>Выберите психолога</h3>
                                    <p>Основываясь на Вашей анкете, система предложит специалистов, которые Вам подходят на 100 процентов</p>
                                </div>
                            </div>
                            <div className='swiper-slide HTSC-block SLSContent'>
                                <img src="/images/HowToStart/Rectangle 111001748.svg" alt="" />
                                <img src="/images/HowToStart/Frame 2131327962.svg" alt="" className='thirdImg'/>
                                <div className='SLSCText'>
                                    <h3>Начните психотерапию</h3>
                                    <p>Выберите дату и время первой сессии. За сутки мы пришлём напоминание и гайд для новых пользователей</p>
                                </div>
                            </div>
                            <div className='swiper-slide HTSC-block SRSContent'>
                                <img src='/images/HowToStart/Frame 2131327961.svg' className='fourthImg'></img>
                                <div className='SRSCText'>
                                    <h3>Назначайте сессии в удобное время</h3>
                                    <p>Управляйте консультациями в личном кабинете.</p>
                                </div>
                            </div>
                    </div>
                </div>
            </Section>
            <Section id="FAQ">
                <h2>ответы на частые вопросы</h2>
                <div className='questions'>
                    <details>
                        <summary><span>В чём разница между психологом, психотерапевтом и психиатром?</span><span className='arrow'>></span></summary>
                        <p>Психиатр имеет медицинское образование и может прописывать лекарства. Психолог - человек, у которого есть высшее психологическое образование или диплом о переквалификации. Если опираться строго на российское законодательство, то психотерапевт - это врач, который имеет психотерапевтическую специализацию. Однако и мы и многие наши коллеги используем слова "психолог" и "психотерапевт" как синонимы, подразумевая под ними немедецинских специалистов, которые получили высшее психологическое + дополнительное образование в одном из психотерапевтических направлений (психоанализ, когнитивно-поведенческая терапия, гештальт-терапия и так далее).</p>
                    </details>
                    <details>
                        <summary><span>Я могу доверять Вашим психологам?</span><span className='arrow'>></span></summary>
                        <p></p>
                    </details>
                    <details>
                        <summary><span>Что делать, если мне не понравится психолог?</span><span className='arrow'>></span></summary>
                        <p></p>
                    </details>
                    <details>
                        <summary><span>Сколько длится одна сессия?</span><span className='arrow'>></span></summary>
                        <p></p>
                    </details>
                    <details>
                        <summary><span>С какого возраста можно работать с психологом на Вашем сайте?</span><span className='arrow'>></span></summary>
                        <p></p>
                    </details>
                    <details>
                        <summary><span>Забыл заранее перенести сессию. Что делать?</span><span className='arrow'> > </span></summary>
                        <p></p>
                    </details>
                    <details>
                        <summary><span>Как выбрать психолога, который подойдёт?</span><span className='arrow'>></span></summary>
                        <p></p>
                    </details>
                    <details>
                        <summary><span>Не хочу общаться лично с психологом. Есть другие варианты?</span><span className='arrow'>></span></summary>
                        <p></p>
                    </details>
                    <details>
                        <summary><span>Как оформить подписку "Самопомощь"?</span><span className='arrow'>></span></summary>
                        <p></p>
                    </details>
                    <details>
                        <summary><span>Хочу помочь близкому человеку. Как мне это сделать?</span><span className='arrow'>></span></summary>
                        <p></p>
                    </details>
                </div>
            </Section>
            <Section id="moreQuestions">
                <h2>Остались вопросы?</h2>
                <div className='SocialMediaContainer'>
                    <div className='SMCItem'>
                        <div className='imageContainer'>
                            <a href='#'><img src="/images/PozitalkLogo.svg"></img></a>
                        </div>
                        <h3>Чат с позитолк</h3>
                        <a className='text-link' href='#'>Перейти</a>
                    </div>
                    <div className='SMCItem'>
                        <div className='imageContainer'>
                            <a href='#'><img src="/images/TelegramLogo.svg"></img></a>
                        </div>
                        <h3>Telegram канал</h3>
                        <a className='text-link' href='#'>Перейти</a>
                    </div>
                    <div className='SMCItem'>
                        <div className='imageContainer'>
                            <a href="#"><img src="/images/VKLogo.svg"></img></a>
                        </div>
                        <h3>Группа ВК</h3>
                        <a className='text-link' href='#'>Перейти</a>
                    </div>
                    <div className='SMCItem'>
                        <div className='imageContainer'>
                            <a href="#"><img src="/images/YoutubeLogo.svg"></img></a>
                        </div>
                        <h3>YouTube канал</h3>
                        <a className='text-link' href='#'>Перейти</a>
                    </div>
                    <div className='SMCItem'>
                        <div className='imageContainer'>
                            <a href="#"><img src="/images/YandexDzenLogo.svg"></img></a>
                        </div>
                        <h3>Яндекс Дзен</h3>
                        <a className='text-link' href='#'>Перейти</a>
                    </div>
                    <div className='SMCItem'>
                        <div className='imageContainer'>
                            <a href="#"><img src="/images/LinkedInLogo.svg"></img></a>
                        </div>
                        <h3>LinkedIn</h3>
                        <a className='text-link' href='#'>Перейти</a>
                    </div>
                </div>
            </Section>
            <Section id="findPsychologist">
                <div className='backgroundImage'>
                    <img src='/images/backgroundImage.svg'></img>
                    <div className='btn-container'>
                        <h2>Помогаем строить гармоничные отношения с собой и окружающими</h2>
                        <Button>Подобрать психолога</Button>
                    </div>
                </div>
                
            </Section>
            <Section id="extraHelp">
                <div className='helpMainContent'>
                    <div className='helpLeftSide'>
                        <h2>Экстренная помощь</h2>
                        <p>Если вам требуется экстренная помощь + чат поддержки с психологами, в котором каждый зарегистрированный психолог может отвечать</p>
                    </div>
                    <div className='helpMiddleSide'>
                        <div className='ContactItem'>
                            <h3>+7 495 989-50-50</h3>
                            <p>Телефон горячей линии психологической помощи МЧС России</p>
                        </div>
                        <div className='ContactItem'>
                            <h3>+7 495 625-06-20</h3>
                            <p>Независимая психитатрическая ассоциация России</p>
                        </div>
                    </div>
                    <div className='helpRightSide'>
                    <div className='ContactItem'>
                            <h3>+7 499 173-09-09</h3>
                            <p>Мoсковская служба психологической помощи населению</p>
                        </div>
                    <div className='ContactItem'>
                        <h3>+7 800 200-01-22</h3>
                        <p>Детский телефон доверия МГППУ</p>
                    </div>
                    </div>
                </div>
            </Section>
            <Section id="footer">
                <Footer></Footer>
                <Copyright></Copyright>
            </Section>
        </div>
    );
}