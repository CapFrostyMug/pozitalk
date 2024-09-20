import Button from './Button';
import Icon from './Icon';
import CompanyLogo from './CompanyLogo';

export default function Nav() {
    return (
        <nav>
            <input type="checkbox" id="nav_menu_open" />
            <div className="nav-wrap">
                <CompanyLogo></CompanyLogo>
            </div>
            <div className="nav-wrap">
                <a href="/psy" for-page="psy">Для психологов</a>
                <a href="/gift" for-page="gift">Подарок близким</a>
                <a href="/tests" for-page="tests">Тесты</a>
                <a href="/knowledge" for-page="knowledge">База знаний</a>
                <div className="adaptive-hrefs">
                    <a href="#">Чат с позитолк</a>
                    <a href="#">Канал в Telegram</a>
                    <a href="#">Группа ВКонтакте</a>
                    <a href="#">Канал на YouTube</a>
                    <a href="#">Яндекс Дзен</a>

                    <div className="flex col" style={{ gap: 6, textTransform: 'none', position: 'absolute', bottom: 0, left: 0, padding: 'var(--view-container-pad)', boxSizing: 'border-box' }}>
                        <Button hollow={true}>Войти</Button>
                        <Button>Подобрать психолога</Button>
                    </div>
                </div>
            </div>
            <div className="nav-wrap">
                <Button>Подобрать психолога</Button>
                <Button hollow={true}>Войти</Button>
            </div>
            <label htmlFor="nav_menu_open" className="nav-burger">
                <div></div><div></div><div></div>
            </label>
        </nav>
    );
}