import '../../../sass/style_a.scss';

import Section from '../../components/Section';
import Nav from '../../components/Nav';
import Button from '../../components/Button';
import Icon from '../../components/Icon';

export function DesignA() {
    return(
        <>
            <div className="design__a">
                <Section id="banner">
                    <Nav></Nav>
                    <div className="flex row banner-part-wrap">
                        <div className="banner-part">
                            <div className="flex row wrap feature-words">
                                <div className="fw-item">поддержка</div>
                                <div className="fw-item">помощь в чате 24/7</div>
                                <div className="fw-item">принятие</div>
                                <div className="fw-item">быть услышанным</div>
                                <div className="fw-item">новый опыт</div>
                                <div className="fw-item">опора</div>
                            </div>
                            <div className="flex col" style={{ gap: 20 }}>
                                <h1 className="big-title">Поможем найти психолога</h1>
                                <span className="sub-title">На сайте вы сможете подобрать психолога, посетить психологические семинары и вебинары от лучших психологов метода, получить инструменты для самопомощи, пройти психологические тесты, купить близким подарочный сертификат</span>
                            </div>
                            <div className="flex col" style={{ gap: 20 }}>
                                <div className="toggle-thick">
                                    <input to-be-checked="" type="radio" id="toggle-thick_myself" name="toggle-thick-value" value="sub_myself" />
                                    <input type="radio" id="toggle-thick_couple" name="toggle-thick-value" value="sub_couple" />
                                    <div className="toggle-thumb"></div>
                                    <label className="toggle-section" htmlFor="toggle-thick_myself">
                                        <div>
                                            <Icon src="/images/UserSingle.svg" />
                                        </div>
                                        <div>
                                            <h1>Для себя</h1>
                                            <p>от 2500 ₽ ~ 50 минут</p>
                                        </div>
                                    </label>
                                    <label className="toggle-section" htmlFor="toggle-thick_couple">
                                        <div>
                                            <Icon src="/images/UsersCouple.svg" />
                                        </div>
                                        <div>
                                            <h1>Для двоих</h1>
                                            <p>от 4850 ₽ ~ 1,5 часа</p>
                                        </div>
                                    </label>
                                </div>
                                <div className="flex row" style={{ gap: '0.6rem' }}>
                                    <Button>Подобрать психолога</Button>
                                    <Button hollow={true}>Подписка «Самопомощь»</Button>
                                </div>
                            </div>
                        </div>
                        <div className="banner-part">
                            <Icon src="/images/BannerImage.svg" />
                        </div>
                    </div>
                </Section>
                <Section id="helpVariants">
                    <h2>C чем помогают наши психологи</h2>
                    <div className="pals-grid">
                        <div className="pal-block">
                            <div className="image-box">
                                <Icon src="/images/pals/Frame 2131327969.svg" />
                            </div>
                            <p>Cправиться с тревогой, стрессом</p>
                        </div>
                        <div className="pal-block">
                            <div className="image-box">
                                <Icon src="/images/pals/Frame 2131327971.svg" />
                            </div>
                            <p>Депрессия, апатия</p>
                        </div>
                        <div className="pal-block">
                            <div className="image-box">
                                <Icon src="/images/pals/Frame 2131327973.svg" />
                            </div>
                            <p>Победить страх</p>
                        </div>
                        <div className="pal-block">
                            <div className="image-box">
                                <Icon src="/images/pals/Frame 2131327974.svg" />
                            </div>
                            <p>Психосоматика</p>
                        </div>
                        <div className="pal-block">
                            <div className="image-box">
                                <Icon src="/images/pals/Frame 2131327975.svg" />
                            </div>
                            <p>Принять себя и повысить самооценку</p>
                        </div>
                        <div className="pal-block">
                            <div className="image-box">
                                <Icon src="/images/pals/Frame 2131327977.svg" />
                            </div>
                            <p>Наладить отношения с детьми, партнером, коллегами</p>
                        </div>
                        <div className="pal-block">
                            <div className="image-box">
                                <Icon src="/images/pals/Frame 2131327979.svg" />
                            </div>
                            <p>РПП (расстройство пищевого поведения)</p>
                        </div>
                        <div className="pal-block">
                            <div className="image-box">
                                <Icon src="/images/pals/Frame 2131327980.svg" />
                            </div>
                            <p>Работа с горем</p>
                        </div>
                    </div>
                </Section>
                <Section id="therapyFeatures">
                    <h2>Преимущества позитивной и транскультуральной психотерапии</h2>
                    <div class="swiper">
                        <div class="swiper-wrapper thf-grid">
                            <div className="swiper-slide thf-block">
                                <div><Icon src="/images/book.svg" /></div>
                                <p>Позитивная и Транскультуральная Психотерапия (ППТ) научно-доказанный метод</p>
                            </div>
                            <div className="swiper-slide thf-block">
                                <div><Icon src="/images/clock.svg" /></div>
                                <p>Возможность краткосрочной помощи 10-15 сессий</p>
                            </div>
                            <div className="swiper-slide thf-block">
                                <div><Icon src="/images/educatorHat.svg" /></div>
                                <p>Психологи с высшим образованием и европейским сертификатом</p>
                            </div>
                            <div className="swiper-slide thf-block">
                                <div><Icon src="/images/exclamationSoft.svg" /></div>
                                <p>Наши специалисты работают с любыми запросами</p>
                            </div>
                            <div className="swiper-slide thf-block">
                                <div><Icon src="/images/eyes.svg" /></div>
                                <p>Позитивная и транскультуральная психотерапия — очень бережный метод, когда психолог смотрит на мир глазами клиента, его ценностей</p>
                            </div>
                            <div className="swiper-slide thf-block">
                                <div><Icon src="/images/spyglass.svg" /></div>
                                <p>Позитивная и транскультуральная психотерапия — это метод, когда клиент в процессе терапии опирается на собственные ресурсы, а психолог помогает их найти</p>
                            </div>
                            <div className="swiper-slide thf-block">
                                <div><Icon src="/images/flower.svg" /></div>
                                <p>ППТ про реальность, уникальную реальность каждого из нас, неповторимую, сложную. Про веру в то, что каждый человек способен справляться с трудностями на своём пути. Про то, что в жизни есть все: радость и печаль, вдохновение и разочарование, любовь и ненависти и многое другое</p>
                            </div>
                        </div>
                    </div>
                </Section>
                <Section id="trustedExperts">
                    <h2>Работаем только<br />с проверенными психологами</h2>
                    <div class="swiper">
                        <div className="swiper-wrapper experts-wrap">
                            <div className="experts-block split-info-block swiper-slide">
                                <div className="ath-block-wrap">
                                    <Icon src="/images/38b536aa6307758191c3ff0138111b08.jpeg" />
                                </div>
                                <div className="ath-block-wrap">
                                    <h3>Документы об образовании</h3>
                                    <p>Обязательно высшее психологическое образованиe или диплом о переквалификации.</p>
                                </div>
                            </div>
                            <div className="experts-block split-info-block swiper-slide">
                                <div className="ath-block-wrap">
                                    <Icon src="/images/4b5e0c26e96dc9853f8bd521270e4d54.jpeg" />
                                </div>
                                <div className="ath-block-wrap">
                                    <h3>Обучение в методе</h3>
                                    <p>Позитивная и транскультуральная психотерапия, наличие европейского сертификата.</p>
                                </div>
                            </div>
                            <div className="experts-block split-info-block swiper-slide">
                                <div className="ath-block-wrap">
                                    <Icon src="/images/4b5e0c26e96dc9853f8bd521270e4d54.jpeg" />
                                </div>
                                <div className="ath-block-wrap">
                                    <h3>Профессиональные и этические качества</h3>
                                    <p>Каждый специалист решает тест на этику и проходит собеседование по личностным ценностям.</p>
                                </div>
                            </div>
                            <div className="experts-block split-info-block swiper-slide">
                                <div className="ath-block-wrap">
                                    <Icon src="/images/7b0b79f53d30b5217bbab23f4efcbf1d.jpeg" />
                                </div>
                                <div className="ath-block-wrap">
                                    <h3>Опыт частной практики и личной терапии</h3>
                                    <p>Просим подтверждение, что специалист имеет опыт в работе психологом, проходит личную терапию и регулярные супервизии.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>
                <Section id="affordableTherapy">
                    <h2>ПозиТолк делает психотерапию удобной и доступной</h2>
                    <div className="ath-wrapper">
                        <div class="swiper">
                            <div class="swiper-wrapper ath-grid">
                                <div className="swiper-slide ath-block">
                                    <div className="ath-block-wrap">
                                        <span>1</span>
                                        <Icon src="/images/pals/Frame 2131328105.svg"></Icon>
                                    </div>
                                    <div className="ath-block-wrap">
                                        <h3>Рекомендуем профессионалов в которых уверены</h3>
                                        <p>Вам не нужно беспокоиться о квалификации специалиста. Мы всё проверили.</p>
                                    </div>
                                </div>
                                <div className="swiper-slide ath-block">
                                    <div className="ath-block-wrap">
                                        <span>2</span>
                                    </div>
                                    <div className="ath-block-wrap">
                                        <h3>Гарантируем понятную фиксированную цену</h3>
                                        <p>Даже у психологов с похожим опытом цены за сессию могут различаться. У нас такого не бывает: в сервисе единая и справедливая цена.</p>
                                    </div>
                                </div>
                                <div className="swiper-slide ath-block">
                                    <div className="ath-block-wrap">
                                        <span>3</span>
                                    </div>
                                    <div className="ath-block-wrap">
                                        <h3>Помогаем найти именно «вашего» специалиста</h3>
                                        <p>Если психолог не подойдёт по любым причинам, мы предложим другого.</p>
                                    </div>
                                </div>
                                <div className="swiper-slide ath-block">
                                    <div className="ath-block-wrap">
                                        <span>4</span>
                                    </div>
                                    <div className="ath-block-wrap">
                                        <h3>Делаем оплату сессий удобной и безопасной</h3>
                                        <p>Заботьтесь о себе без ограничений.</p>
                                        <div className="flex row wrap payments-row" style={{ gap: '1.2rem' }}>
                                            <Icon src="/images/mir.svg" />
                                            <Icon src="/images/mastercard.svg" />
                                            <Icon src="/images/paypal.svg" />
                                            <Icon src="/images/visa.svg" />
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide ath-block">
                                    <div className="ath-block-wrap">
                                        <span>5</span>
                                        <Icon src="/images/pals/Frame 2131328106.svg"></Icon>
                                    </div>
                                    <div className="ath-block-wrap">
                                        <h3>Заботимся о результате</h3>
                                        <p>Напоминаем о сессиях, регулярно собираем отзывы и приходим на помощь, если что-то идёт не так.</p>
                                    </div>
                                </div>
                                <div className="swiper-slide ath-block">
                                    <div className="ath-block-wrap">
                                        <span>6</span>
                                        <Icon src="/images/pals/Frame 2131328107.svg"></Icon>
                                    </div>
                                    <div className="ath-block-wrap">
                                        <h3>Бережём ваше время</h3>
                                        <p>Занимайтесь, где и когда вам удобно. Перенести или отменить сессию можно в личном кабинете в два клика.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ath-block ath-wide-block">
                            <div className="ath-block-wrap">
                                <h3>Подписка <br />«Самопомощь»</h3>
                            </div>
                            <div className="ath-block-wrap">
                                <p>Исследуйте проблему самостоятельно. Мы предоставляем в удобном формате базу знаний, которая включает в себя различные тесты и статьи от опытных психологов.</p>
                                <Icon src="/images/pals/Frame 2131328036354.svg"></Icon>
                                <div className="flex"><Button hollow={true}>Купить подписку</Button></div>
                            </div>
                        </div>
                    </div>
                </Section>
                <Section id="whatToExpect">
                    <h2>что стоит ожидать<br />от первой сессии</h2>
                    <div className="flex col" style={{ gap: 20 }}>
                        <p style={{ fontWeight: 500, fontSize: '24px', lineHeight: '3rem' }}>За 50 минут сессии:</p>
                        <div className="wte-grid">
                            <div className="wte-block">Познакомитесь друг с другом</div>
                            <div className="wte-block">Получите поддержку и лучше поймете свою ситуацию</div>
                            <div className="wte-block">Уточните запрос и наметите план психотерапии</div>
                            <div className="wte-block">Найдете ответы на волнующие Вас вопросы</div>
                        </div>
                        <div className="toggle-thick" style={{ maxWidth: 'unset' }}>
                            <input to-be-checked="" type="radio" id="toggle-thick_myself2" name="toggle-thick-value" value="sub_myself" />
                            <input type="radio" id="toggle-thick_couple2" name="toggle-thick-value" value="sub_couple" />
                            <div className="toggle-thumb"></div>
                            <label className="toggle-section" htmlFor="toggle-thick_myself2">
                                <div>
                                    <Icon src="/images/UserSingle.svg" />
                                </div>
                                <div>
                                    <h1>Для себя</h1>
                                    <p>от 2500 ₽ ~ 50 минут</p>
                                </div>
                            </label>
                            <label className="toggle-section" htmlFor="toggle-thick_couple2">
                                <div>
                                    <Icon src="/images/UsersCouple.svg" />
                                </div>
                                <div>
                                    <h1>Для двоих</h1>
                                    <p>от 4850 ₽ ~ 1,5 часа</p>
                                </div>
                            </label>
                        </div>
                        <div className="wte-grid subscription-grid">
                            <div className="experts-block split-info-block subscription-item">
                                <div className="ath-block-wrap">
                                    <Icon src="/images/c3563181d42a38ec242784dfe0e6c05f.jpeg" />
                                </div>
                                <div className="ath-block-wrap">
                                    <h3>Для себя</h3>
                                    <p>от 2500 ₽ ~ 50 минут</p>
                                    <div className="flex"><Button>Подобрать психолога</Button></div>
                                </div>
                            </div>
                            <div className="experts-block split-info-block subscription-item">
                                <div className="ath-block-wrap">
                                    <Icon src="/images/c3193b25703de5eebfee27a1202c0a1c.jpeg" />
                                </div>
                                <div className="ath-block-wrap">
                                    <h3>Для двоих</h3>
                                    <p>от 4850 ₽ ~ 1,5 часа</p>
                                    <div className="flex"><Button>Подобрать психолога</Button></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>
            </div>
        </>
    );
}