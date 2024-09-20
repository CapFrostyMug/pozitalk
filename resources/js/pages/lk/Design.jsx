import * as React from 'react'
import './local.scss';
import Section from '../../components/Section';
import Button from '../../components/Button'
import TelInput from '../../components/TelInput';
import CompanyLogo from '../../components/CompanyLogo';
import Icon from '../../components/Icon';

export function Design() {
    return(
        <div className='design__a'>
            <div className="lk-container">
                <div className="lk-sidebar">
                    <CompanyLogo></CompanyLogo>
                    <div className="tabs">
                        <div className="tab-item">Вход в аккаунт</div>
                        <div className="tab-line"></div>
                        <div className="tab-item">Личные вопросы</div>
                        <div className="tab-line"></div>
                        <div className="tab-item">Выбор психолога</div>
                    </div>
                </div>
                <div className="lk-content">
                    <div className="tab-content" style={{ maxWidth: 425 }}></div>
                    <div className="tab-content" style={{ maxWidth: 596 }}></div>
                    <div className="tab-content" style={{ maxWidth: 576 }}></div>
                </div>
            </div>
        </div>
    );
}