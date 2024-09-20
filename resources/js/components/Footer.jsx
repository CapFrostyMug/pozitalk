export default function Footer() {
    return(
            <div className='footerContent'>
                <div className='footerLeft'>
                    <img src='/images/logo.svg'></img>
                    <p>позитолк</p>
                </div>
                <div className='footerRight'>
                    <div className='socialMedia'>
                        <h3>Соц. сети</h3>
                        <a href='#'>Чат с ПозиТолк</a>
                        <a href='#'>Instagram</a>
                        <a href='#'>Вконтакте</a>
                        <a href='#'>Facebook</a>
                        <a href='#'>Яндекс.Дзен</a>
                        <a href='#'>Telegram</a>
                    </div>
                    <div className='navigation'>
                        <h3>Навигация</h3>
                        <a href='#'>для психологов</a>
                        <a href='#'>тесты</a>
                        <a href='#'>база знаний</a>
                        <a href='#'>подарок близким</a>
                    </div>
                    <div className='other'>
                        <h3>Другое</h3>
                        <a href='#'>условия использования</a>
                        <a href='#'>договор оказания услуг</a>
                        <a href='#'>правила акций</a>
                    </div>
                </div>
            </div>
    )
}