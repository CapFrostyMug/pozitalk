import * as React from 'react'
import './style.scss';
import Section from '../../components/Section';
import Button from '../../components/Button';
import Nav from '../../components/Nav';
import Icon from '../../components/Icon';
import Footer from '../../components/Footer';
import Copyright from '../../components/Copyright';

export function Design() {
    return(
        <div className='design'>
            <Section id="banner">
                <Nav></Nav>
                <div class="banner-part">
                    <div className='banner-text'>
                        <h1>самый важный подарок</h1>
                        <p>Нам часто нужна помощь, но иногда сложно ее попросить.</p>
                        <p>Позаботьтесь о близком человеке - подарите ему сессию с психологом.</p>
                    </div>
                    <div className="toggle-thick">
                        <input to-be-checked="" type="radio" id="toggle-thick_myself" name="toggle-thick-value" value="sub_myself" />
                        <input type="radio" id="toggle-thick_couple" name="toggle-thick-value" value="sub_couple" />
                        <div className="toggle-thumb"></div>
                        <label className="toggle-section" htmlFor="toggle-thick_myself">
                            <div>
                                <Icon src="/images/UserSingle.svg"/>
                            </div>
                            <div>
                                <h1>Для себя</h1>
                                <p>от 2000 ₽ ~ 50 минут</p>
                            </div>
                        </label>
                        <label className="toggle-section" htmlFor="toggle-thick_couple">
                            <div>
                                <Icon src="/images/UsersCouple.svg" />
                            </div>
                            <div>
                                <h1>Для двоих</h1>
                                <p>от 4000 ₽ ~ 1,5 часа</p>
                            </div>
                        </label>
                    </div>
                    <div className='swiper'>
                        <div className='swiper-wrapper sessions'>
                            <div className='swiper-slide sessionItem'>
                                <Icon src='/images/gift/Frame 2131328105.svg'></Icon>
                                <h3>1 сессия</h3>
                                <p>2 000 ₽</p>
                                <p>Хороший способ познакомить близкого человека с психологией</p>
                                <Button>Подарить</Button>
                            </div>
                            <div className='swiper-slide sessionItem'>
                                <Icon src='/images/gift/Frame 2131328105.svg'></Icon>
                                <h3>3 сессии</h3>
                                <p>6 000 ₽</p>
                                <p>Чуть более углублённое знакомство с психологией и самим собой</p>
                                <Button>Подарить</Button>
                            </div>
                            <div className='swiper-slide sessionItem'>
                                <Icon src='/images/gift/Frame 2131328105.svg'></Icon>
                                <h3>5 сессий</h3>
                                <p>10 000 ₽</p>
                                <p>Возможность увидеть и понять свои внутренние конфликты</p>
                                <Button>Подарить</Button>
                            </div>
                            <div className='swiper-slide sessionItem'>
                                <Icon src='/images/gift/Frame 2131328105.svg'></Icon>
                                <h3>10 сессия</h3>
                                <p>20 000 ₽</p>
                                <p>Возможность лучше понять свои проблемы</p>
                                <Button>Подарить</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
            <Section id="certificate">
                <div className='certificateContainer'>
                    <div className='CCLeft'>
                        <h2>Сертификат позитолк</h2>
                        <ol>
                            <li>Зайдите на <a href='#'>pozitalk.ru</a></li>
                            <li>Введите промокод при регистрации или в личном кабинете</li>
                        </ol>
                    </div>
                        <Icon src='/images/gift/Frame 2131328168.svg'></Icon>
                </div>
            </Section>
            <Section id="howItWorks">
                <h2>как это работает?</h2>
                    <div className='HIWC'>
                        <img className='backgroundImg' src='/images/gift/Union.svg'></img>
                        <div className='HIWCItem'>
                            <div className='HIWCIContent'>
                                <span>1</span>
                                <img src='/images/gift/Group 2087324107.svg'></img>
                                <p>Выбираете сертификат и оплачиваете подарок</p>
                            </div>
                        </div>
                        <div className='HIWCItem'>
                            <div className='HIWCIContent'>
                                <span>2</span>
                                <img src='/images/gift/Frame 2131328108.svg'></img>
                                <img src='/images/gift/Frame 2131328107.svg'></img>
                                <p>Получаете на свою почту сертификат с промокодом</p>
                            </div>
                        </div>
                        <div className='HIWCItem'>
                            <div className='HIWCIContent'>
                                <span>3</span>
                                <img src='/images/gift/Frame 21313281082.svg'></img>
                                <img src='/images/gift/Frame 21313281072.svg'></img>
                                <p>В нужный момент отправляете сертификат близкому человеку</p>
                            </div>
                        </div>
                        <div className='HIWCItem'>
                            <div className='HIWCIContent'>
                                <span>4</span>
                                <img src='/images/gift/04 1.svg'></img>
                                <p>Человек вводит промокод на сайте и выбирает психолога</p>
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
                        <summary><span>Забыл заранее перенести сессию. Что делать?</span><span className='arrow'>></span></summary>
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
            <Section id="footer">
                <Footer></Footer>
                <Copyright></Copyright>
            </Section>
        </div>
    );
}