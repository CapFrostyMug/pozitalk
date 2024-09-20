import Icon from "../../../components/Icon";

export function Stage_SMS({ tel }) {
    return(
        <>
            <div>
                <h3 style={{ fontSize: '3.2rem', fontWeight: 500, color: 'var(--text-def-lightdark)' }}>Введите код из SMS</h3>
                <br />
                <p style={{ fontSize: '2rem', fontWeight: 500, color: 'var(--text-def-lightdark)' }}>Код отправлен на { tel }</p>
            </div>
            <div className="flex row" style={{ gap: '6px' }}>
                <div className="code-digit-box sms-code-digit">
                    <input type="text" maxLength={1} placeholder="" />
                    <div className="cdb-placeholder"></div>
                </div>
                <div className="code-digit-box sms-code-digit">
                    <input type="text" maxLength={1} placeholder="" />
                    <div className="cdb-placeholder"></div>
                </div>
                <div className="code-digit-box sms-code-digit">
                    <input type="text" maxLength={1} placeholder="" />
                    <div className="cdb-placeholder"></div>
                </div>
                <div className="code-digit-box sms-code-digit">
                    <input type="text" maxLength={1} placeholder="" />
                    <div className="cdb-placeholder"></div>
                </div>
                <div className="code-digit-box sms-code-digit">
                    <input type="text" maxLength={1} placeholder="" />
                    <div className="cdb-placeholder"></div>
                </div>
                <div className="code-digit-box sms-code-digit">
                    <input type="text" maxLength={1} placeholder="" />
                    <div className="cdb-placeholder"></div>
                </div>
            </div>
            <p id="smsTimerElement"></p>
            <div className="flex row ai-c jc-c" id="authGotoPrevious" style={{ color: 'var(--accent)', cursor: 'pointer', fontSize: '2.4rem', userSelect: 'none', fontWeight: 500, gap: '8px' }}><Icon src="/images/orange-arrow-left.svg" alt="" />Назад к вводу номера</div>
        </>
    );
}