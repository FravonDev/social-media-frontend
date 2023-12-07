import '@testing-library/jest-dom'

import { render } from '@testing-library/react';
import App from './App';
import { describe, it, expect } from 'vitest';

describe('App', () => {
    it("Renders let's start", () => {
        const { debug, getByText } = render(<App />);
        debug();//print the html in the console
        expect(getByText("Let's start it!")).toBeInTheDocument();
    });
}
);
