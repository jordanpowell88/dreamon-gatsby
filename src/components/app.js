import React from 'react';
import PropTypes from 'prop-types';
import Layout from './layout';
import { LocaleProvider } from '../hooks/useLocale';

const App = ({ children, pageContext: { locale, isDefault } }) => (
    <LocaleProvider>
        <Layout locale={locale} isDefault={isDefault}>
            { children }
        </Layout>
    </LocaleProvider>
)


App.propTypes = {
    children: PropTypes.node.isRequired,
    pageContext: PropTypes.shape({
        locale: PropTypes.string.isRequired,
        isDefault: PropTypes.bool.isRequired
    })
}

export default App;