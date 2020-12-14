import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react'
import TableSection from '../../components/home/TableSection';
import '@testing-library/jest-dom';

describe('TableSection Component', () => {
    it('should render without crashing', () => {
       render(<TableSection />)
    });
    it('should display H1 tag with my name', () => {
        render(<TableSection />);
        const nameText = screen.getByText('Daniel Mydlarz');
        expect(nameText).toBeInTheDocument();
    })
})