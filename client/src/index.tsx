import React from 'react';
import ReactDOM from 'react-dom';

import App from '/components/app';

// i18 support
import '/services/i18n';
// Normalize css
import 'normalize.css';

ReactDOM.render(<App />, document.getElementById('root'));
