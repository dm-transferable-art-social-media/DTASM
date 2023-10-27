import React from 'react';
import { render } from '@testing-library/react-native';
import App from '../App';

test('renders App component without crashing', () => {
    render(<App />);
});
