import Button from "../../../components/Button";
import Checkbox from "../../../components/Checkbox";
import Icon from "../../../components/Icon";
import IconInput from "../../../components/IconInput";

export function PersonalQuestions() {
    return(
        <>
            <div className="toggle-thick pq-toggle" style={{ maxWidth: 'unset' }}>
                <input to-be-checked="" type="radio" id="toggle-thick_therapy-individual" name="toggle-thick_pq[therapy-type]" value="therapy_individual" />
                <input type="radio" id="toggle-thick_therapy-group" name="toggle-thick_pq[therapy-type]" value="therapy_group" />
                <div className="toggle-thumb" style={{ width: '60%' }}></div>
                <label className="toggle-section" htmlFor="toggle-thick_therapy-individual" style={{ width: '60%' }}>
                    <div>
                        <Icon src="/images/UsersCouple.svg" />
                    </div>
                    <div>
                        <h1>Индивидуальная терапия</h1>
                        <p>от 2000 ₽ ~ 50 минут</p>
                    </div>
                </label>
                <label className="toggle-section" htmlFor="toggle-thick_therapy-group"  style={{ width: '40%' }}>
                    <div>
                        <Icon src="/images/UserSingle.svg" />
                    </div>
                    <div>
                        <h1>Парная терапия</h1>
                        <p>от 4000 ₽ ~ 1,5 часа</p>
                    </div>
                </label>
            </div>
            <div className="flex row ai-c thexp-row" style={{ gap: 6 }}>
                <p style={{ marginRight: 12, color: 'var(--text-def-dark'}}>У вас был опыт терапии?</p>
                <input type="radio" name="pq[therapy-experience]" id="therapy_experience_a" value="positive" />
                <label htmlFor="therapy_experience_a">Да</label>
                <input type="radio" name="pq[therapy-experience]" id="therapy_experience_b" value="negative" />
                <label htmlFor="therapy_experience_b">Нет</label>
            </div>
            <div>
                <input type="text" className="custom-input" name="pq[username]" placeholder="Имя или псевдоним" />
                <p className="input-underlabel">Чтобы психолог знал, как вас называть</p>
            </div>
            <div className="input-date custom-input">
                <div className="inpd-date-box"></div>
                <input type="text" className="date-result inpd-display" name="pq[birth-day]" maxLength={2} placeholder="--" />
                <span className="inpd-display-separator">.</span>
                <input type="text" className="date-result inpd-display" name="pq[birth-month]" maxLength={2} placeholder="--" />
                <span className="inpd-display-separator">.</span>
                <input type="text" className="date-result inpd-display" name="pq[birth-year]" maxLength={4} placeholder="----" />
            </div>
            <div>
                <input type="email" className="custom-input" name="pq[email]" placeholder="Электронная почта" />
                <Checkbox style={{ marginTop: '1.2rem' }} label="Предупреждать о сессиях, отправлять полезные материалы и персональные предложения" name="pq[mailing]" id="user_mailing" />
            </div>
            <div>
                <IconInput type="text" icon="promo.svg" className="custom-input" name="pq[promocode]" placeholder="У вас есть промокод?" />
            </div>
            <h3 className="h32" style={{ marginTop: '2.4rem' }}>Что хотели бы обсудить в первую очередь?</h3>
            <div className="discuss-list">
                <div className="discuss-explanation"><Icon src="/images/sadface.svg" alt="" /> Моё состояние</div>
                <div className="discuss-option">Нестабильная самооценка</div>
                <div className="discuss-option">Перепады настроения</div>
                <div className="discuss-option">Ощущение одиночества</div>
                <div className="discuss-option">Эмоциональная зависимость</div>
                <div className="discuss-option">Потеря аппетита</div>
                <div className="discuss-option">Навязчивые мысли о здоровье</div>
                <div className="discuss-option">Упадок сил</div>
                <div className="discuss-option">Стресс</div>
                <div className="discuss-option">Приступы страха и тревоги</div>
                <div className="discuss-option">Раздражительность</div>
                <div className="discuss-option">Проблемы с концентрацией</div>
                <div className="discuss-option">Проблемы со сном</div>
                <div className="discuss-option">Панические атаки</div>
                <div className="discuss-option">Сложности с алкоголем/наркотиками</div>
            </div>
            <div className="discuss-list">
                <div className="discuss-explanation"><Icon src="/images/heart.svg" alt="" /> Отношения</div>
                <div className="discuss-option">С партнёром</div>
                <div className="discuss-option">С родителями</div>
                <div className="discuss-option">В целом, с окружающими</div>
                <div className="discuss-option">С детьми</div>
                <div className="discuss-option">Сексуальные</div>
                <div className="discuss-option">Сложности с ориентацией, её поиск</div>
            </div>
            <div className="discuss-list">
                <div className="discuss-explanation"><Icon src="/images/briefcase.svg" alt="" /> Работа, учёба</div>
                <div className="discuss-option">Недостаток мотивации</div>
                <div className="discuss-option">Выгорание</div>
                <div className="discuss-option">«Не знаю, чем хочу заниматься»</div>
                <div className="discuss-option">Прокрастинация</div>
                <div className="discuss-option">Смена, потеря работы</div>
                <div className="discuss-option">Отсутствие цели</div>
            </div>
            <div className="discuss-list">
                <div className="discuss-explanation"><Icon src="/images/lifebuoy.svg" alt="" /> События в жизни</div>
                <div className="discuss-option">Болезнь, своя или близких</div>
                <div className="discuss-option">Переезд, эмиграция</div>
                <div className="discuss-option">Утрата близкого человека</div>
                <div className="discuss-option">Беременность, рождение ребёнка</div>
                <div className="discuss-option">Насилие</div>
                <div className="discuss-option">Разрыв отношений, развод</div>
                <div className="discuss-option">Финансовые изменения</div>
                <div className="discuss-option">«Не знаю, чем хочу заниматься»</div>
            </div>
            <h3 className="h32" style={{ marginTop: '2.4rem' }}>Предпочтение по стоимости</h3>
            <div className="price-list">
                <label className="price-item" htmlFor="price_cb_a">
                    <div className="pi-wrap">
                        <Checkbox name="pq[price->3-exp]" id="price_cb_a"></Checkbox>
                    </div>
                    <div className="pi-wrap">
                        <div className="flex row">
                            <span className="pi-price-from">от 2 000 ₽</span>
                            <span className="pi-exp">{">3 лет опыта"}</span>
                            <span className="pi-experts">550 специалистов</span>
                        </div>
                        <p>Психологи, с психологическим образованием (высшим, переподготовка в области психологии)</p>
                        <p>Прошли базовый курс в медоте ППТ</p>
                    </div>
                </label>
                <label className="price-item" htmlFor="price_cb_b">
                    <div className="pi-wrap">
                        <Checkbox name="pq[price->5-exp]" id="price_cb_b"></Checkbox>
                    </div>
                    <div className="pi-wrap">
                        <div className="flex row">
                            <span className="pi-price-from">от 3 900 ₽</span>
                            <span className="pi-exp">{">5 лет опыта"}</span>
                            <span className="pi-experts">125 специалистов</span>
                        </div>
                        <p>Психологи, с психологическим образованием (высшим, переподготовка в области психологии)</p>
                        <p>Окончили мастер-курс в методе ППТ (3 года)</p>
                    </div>
                </label>
                <label className="price-item" htmlFor="price_cb_c">
                    <div className="pi-wrap">
                        <Checkbox name="pq[price->7-exp]" id="price_cb_c"></Checkbox>
                    </div>
                    <div className="pi-wrap">
                        <div className="flex row">
                            <span className="pi-price-from">от 3 900 ₽</span>
                            <span className="pi-premium"></span>
                            <span className="pi-experts">15 специалистов</span>
                        </div>
                        <p>Психологи, с психологическим образованием (высшим, переподготовка в области психологии)</p>
                        <p>Окончили мастер-курс в методе ППТ (3 года)</p>
                        <p>Имеют более 7 лет опыта</p>
                    </div>
                </label>
            </div>
            <Button style={{ marginTop: '2.4rem' }} xs={true}>Далее</Button>
        </>
    );
}