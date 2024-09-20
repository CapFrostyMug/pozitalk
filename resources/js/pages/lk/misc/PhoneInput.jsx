import TelInput from "../../../components/TelInput";

export function PhoneInput() {
    return(
        <>
            <div>
                <h3 style={{ fontSize: '3.2rem', fontWeight: 500, color: 'var(--text-def-lightdark)' }}>Введите номер телефона</h3>
                <br />
                <p style={{ fontSize: '2rem', fontWeight: 500, color: 'var(--text-def-lightdark)' }}>Мы отправим код в SMS</p>
            </div>
            <div className="flex row">
                <TelInput></TelInput>
            </div>
            <div className="custom-button sms-send-button" style={{ height: '6.2rem', borderRadius: '2.4rem', fontSize: '2.4rem' }}>Получить код из SMS</div>
            <p style={{ textTransform: 'uppercase', fontSize: '1.4rem' }}>Нажимая «Получить код» вы принимаете <a href='#' style={{ color: 'var(--accent)', textDecoration: 'none' }}>пользовательское соглашение</a>, даете <a href='#' style={{ color: 'var(--accent)', textDecoration: 'none' }}>согласие на обработку персональных данных</a>.</p>
        </>
    );
}