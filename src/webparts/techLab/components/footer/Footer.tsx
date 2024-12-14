import * as React from 'react';
import '../../styles/components/footer/Footer.module.scss';
import { FormattedMessage } from 'react-intl';

const Footer = () => {
    return (
        <div id="footer">
            <div className="footer-text">
                <FormattedMessage id={"footer.text"}/>
            </div>
            <a href="mailto:techlab@iadb.org">
                <button type="button" className="btn btn-outline-primary btnHome">
                    <FormattedMessage id={'header.global.buttom'} />
                </button>
            </a>
        </div>
    )
}

export default Footer;