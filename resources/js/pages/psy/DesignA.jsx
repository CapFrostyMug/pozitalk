import '../../../sass/style_a.scss';

import Section from '../../components/Section';
import Nav from '../../components/Nav';
import Button from '../../components/Button';
import Icon from '../../components/Icon';
import Footer from '../../components/Footer';
import Copyright from '../../components/Copyright';

export function DesignA() {
    return(
        <>
            <div className="design__a">
                <Section id="banner">
                    <Nav></Nav>
                    <div className="flex row banner-part-wrap">
                        <div className="banner-part">
                            <div className="flex col" style={{ gap: 20 }}>
                                <h1 className="big-title">Присоединяйтесь к нашей команде психологов</h1>
                                <p className="sub-title">Мы продвигаем ваши услуги и освобождаем вам время на более важные дела: работу с клиентами, образованиеи получение профессионального опыта.</p>
                                <div className="flex">
                                    <Button>Начать сотрудничество</Button>
                                </div>
                            </div>
                            <div className="flex col" style={{ gap: 20 }}>
                            </div>
                        </div>
                        <div className="banner-part">
                            <Icon src="/images/psy/bannerimg.svg" />
                        </div>
                    </div>
                </Section>
                <Section id="trustedExperts">
                    <h2>комфортные условия для работы</h2>
                    <div class="swiper">
                        <div className="swiper-wrapper experts-wrap">
                            <div className="swiper-slide experts-block split-info-block">
                                <div className="ath-block-wrap">
                                    <Icon src="/images/psy/Frame 2131327997.svg"/>
                                </div>
                                <div className="ath-block-wrap">
                                    <h3>Приводим клиентов, готовых к работе</h3>
                                    <p>Мы рекламируем платформу, пишем статьи со ссылками на ПозиТолк, проводим лекции и ведем социальные сети. Так, унас больше подготовленных к терапии клиентов, а значит - и у Вас.</p>
                                </div>
                            </div>
                            <div className="swiper-slide experts-block split-info-block">
                                <div className="ath-block-wrap">
                                    <Icon src="/images/psy/Frame 21313279977.svg"/>
                                </div>
                                <div className="ath-block-wrap">
                                    <h3>Подбираем клиентов по специализации</h3>
                                    <p>Люди в поисках психолога регистрируются на сайте и проходят тест. Тест уточняет запрос и предлагает подходящих психологов. Так к Вам попадают клиенты с запросами под Вашу специализацию.</p>
                                </div>
                            </div>
                            <div className="swiper-slide experts-block split-info-block">
                                <div className="ath-block-wrap">
                                    <Icon src="/images/psy/Frame 21313279978.svg"/>
                                </div>
                                <div className="ath-block-wrap">
                                    <h3>Гарантируем оплату сессии</h3>
                                    <p>Клиенты оплачивают сессии по банковской карте из России и из-за рубежа, деньги списываются за 24 часа до начала сессии, даже если клиент отменяет в последний момент.</p>
                                </div>
                            </div>
                            <div className="swiper-slide experts-block split-info-block">
                                <div className="ath-block-wrap">
                                    <Icon src="/images/psy/Frame 21313279979.svg"/>
                                </div>
                                <div className="ath-block-wrap">
                                    <h3>Удобный личный кабинет</h3>
                                    <p>Вы можете записывать клиентов на сессии, смотреть своё расписание, просмотривать отчёты, видеть обратную связь от клиента после каждой сессии.</p>
                                </div>
                            </div>
                            <div className="swiper-slide experts-block split-info-block">
                                <div className="ath-block-wrap">
                                    <Icon src="/images/psy/Frame 213132799711.svg"/>
                                </div>
                                <div className="ath-block-wrap">
                                    <h3>Уведомляем об изменениях</h3>
                                    <p>Клиенты выбирают время для записи в календаре психолога и подтверждают запись, а психолог получает уведомление о новой записи, переносах и отменах записей по почте.</p>
                                </div>
                            </div>
                            <div className="swiper-slide experts-block split-info-block">
                                <div className="ath-block-wrap">
                                    <Icon src="/images/psy/Frame 213132799710.svg" />
                                </div>
                                <div className="ath-block-wrap">
                                    <h3>Повышаем доверие к профессии</h3>
                                    <p>Мы следим за удовлетворенностью клиентов ПозиТолк на основе специальной методики - так мы уверены в качестве подбора специалистов.</p>
                                </div>
                            </div>
                            <div className='swiper-slide experts-block empty-block'></div>
                        </div>
                    </div>
                </Section>
                <Section id="requirements">
                    <h2>У нас есть четко сформированное представление о том, каким должен быть психолог ПозиТолк Если вы узнаете себя — нам точно по пути</h2>
                    <div className='swiper'>
                        <div className='swiper-wrapper requirementContainer'>
                            <div className='swiper-slide RCitem'>
                                <img src='/images/psy/Frame 2131328092.svg'></img>
                                <div className='RCItext'>
                                    <h3>Опыт</h3>
                                    <p>Опыт работы в психологическом консультировании от трёх лет, личной терапии и прохождения супервизии</p>
                                </div>
                            </div>
                            <div className='swiper-slide RCitem'>
                                <img src='/images/psy/Frame 2131328105.svg'></img>
                                <div className='RCItext'>
                                    <h3>Образование</h3>
                                    <p>Обучение в методе Позитивная и Транскультурная Психотерапия, наличие Европейского сертификата</p>
                                </div>
                            </div>
                            <div className='swiper-slide RCitem'>
                                <img src='/images/psy/Frame 2131328106.svg'></img>
                                <div className='RCItext'>
                                    <h3>Сертификация</h3>
                                    <p>Обучение в психотерапевтических подходах/ специализациях от 500 часов</p>
                                </div>
                            </div>
                            <div className='swiper-slide RCitem'>
                                <img src='/images/psy/Frame 2131328107.svg'></img>
                                <div className='RCItext'>
                                    <h3>Этические качества</h3>
                                    <p>Каждый специалист решает тест на этику и проходит собеседование по личностным ценностям.</p>
                                </div>
                            </div>
                            <div className='swiper-slide empty-slide'></div>
                        </div>
                    </div>
                </Section>
                <Section id='co-work'>
                    <h2>Как будет строиться наша совместная работа</h2>
                    <div className='swiper'>
                        <div className='swiper-wrapper CWContainer'>
                            <div className='swiper-slide gridContainer'>
                                <div className='textItem'>
                                    <div className='textBlock'>
                                        <h3>Заполните анкету психотерапевта и после ее проверки пройдите интервью c нашим экспертом</h3>
                                        <p>Расскажите нам подробно о себе, своём образовании, опыте консультирования и методах работы, чтобы мы подбирали вам подходящих и интересных клиентов</p>
                                    </div>
                                    <Button>Начать сотрудничество</Button>
                                </div>
                                <div className='textItem'>
                                    <img src='/images/psy/1.png'></img>
                                    <span><img src='/images/psy/seal-check.svg'></img>Заполнение анкеты 30 минут, интервью — 60 минут</span>
                                </div>
                            </div>
                            <div className='swiper-slide gridContainer'>
                                <div className='textItem'>
                                    <img src='/images/psy/2.png'></img>
                                    <div className='textBlock'>
                                        <h3>Заполняете свой профиль специалиста</h3>
                                        <p>Перед тем, как начать предлагать Вам клиентов, вы заполняете свой профиль специалиста: добавляете фото, рассказываете о себе и своём опыте. Каждый элемент профиля помогает клиенту лучше узнать Вас и сделать выбор. Это делает процесс подбора психотерапевта более точным</p>
                                    </div>
                                    <span><img src='/images/psy/seal-check.svg'></img>В среднем стоит выделить на это 60-80 минут</span>
                                </div>
                                <div className='textItem'>
                                    <img className='background-image' src='/images/psy/Union.svg'></img>
                                    <img src='/images/psy/3.png'></img>
                                    <div className='textBlock'>
                                        <h3>Нам приходит заявка от клиента на работу с Вами</h3>
                                        <p>Вас выберут через каталог специалистов или при автоподборе, когда клиент заполняет анкету выбирая темы, которые его беспокоят. Алгоритм предлагает ему трех подходящих терапевтов. После того, как клиент выбрал Вас и оставил нам свои данные, менеджер сервиса создаст чат в мессенджере.</p>
                                    </div>
                                    <span><img src='/images/psy/seal-check.svg'></img>Первые клиенты приходят в период 14 дней</span>
                                </div>
                            </div>
                            <div className='swiper-slide gridContainer'>
                            <img src='/images/psy/Rectangle 1110017482.svg' className='background-image'></img>
                                <div className='textItem'>
                                    <img src='/images/psy/4.png'></img>
                                    <span><img src='/images/psy/seal-check.svg'></img>Менеджер создаст чат за 24 часа после обращения</span>
                                </div>
                                <div className='textItem'>
                                    <div className='textBlock'>
                                        <h3>Вы договариваетесь с клиентом о первой встрече</h3>
                                        <p>Мы рекомендуем Вам начинать общение первыми. Наши специалисты заранее уточняют организационные вопросы и имеют готовый документ с условиями работы, который присылают клиенту перед встречей. Присылать контракт не обязательно - все зависит от Вашего подхода к коммуникации.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='swiper-slide gridContainer empty-block'></div>
                            <div className='swiper-slide gridContainer empty-block'></div>
                        </div>
                    </div>
                </Section>
                <Section id="footer">
                    <Footer></Footer>
                    <Copyright></Copyright>
            </Section>
            </div>
        </>
    );
}