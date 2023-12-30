import { render } from '@testing-library/react';
import { DefaultInput } from './index';

describe('DefaultInput component', () => {
    it('Should render DefaultInput', () => {
        const { getByPlaceholderText } = render(<DefaultInput placeholder='name' />);

        const input = getByPlaceholderText('name');

        expect(input).toBeVisible();
        expect(input).toBeInTheDocument();
        expect(input).toHaveAttribute('type', 'text');
    });

    it('Should render DefaultInput with helperText', () => {
        const { getByText } = render(<DefaultInput placeholder='name' helperText='Example helper text' />);

        const helperText = getByText('Example helper text');

        expect(helperText).toBeVisible();
        expect(helperText).toBeInTheDocument();
    });

    it('Should render DefaultInput with leftElement', () => {
        const { getByTestId } = render(<DefaultInput placeholder='name' leftElement={<div data-testid='left-element' />} />);

        const leftElement = getByTestId('left-element');

        expect(leftElement).toBeVisible();
        expect(leftElement).toBeInTheDocument();
    });

    it('Should render DefaultInput with rightElement', () => {

        const { getByTestId } = render(<DefaultInput placeholder='name' leftElement={<div data-testid='right-element' />} />);

        const leftElement = getByTestId('right-element');

        expect(leftElement).toBeVisible();
        expect(leftElement).toBeInTheDocument();
    });

})
