import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CopyButton from '../homePage/javascripts/copybtn';
import { faCopy, faCheck } from '@fortawesome/free-solid-svg-icons';

// Mock FontAwesomeIcon to prevent errors during testing
jest.mock('@fortawesome/react-fontawesome', () => ({
  FontAwesomeIcon: ({ icon }) => <span>{icon === faCopy ? 'faCopy' : 'faCheck'}</span>
}));

describe('CopyButton', () => {
  test('renders the component', () => {
    render(<CopyButton textToCopy="Sample text" />);
    const button = screen.getByRole('button', { name: /copy/i });
    expect(button).toBeInTheDocument();
  });

  test('displays "Copy" initially', () => {
    render(<CopyButton textToCopy="Sample text" />);
    const button = screen.getByRole('button', { name: /copy/i });
    expect(button).toHaveTextContent('Copy');
  });

  test('displays "Copied" after click', async () => {
    render(<CopyButton textToCopy="Sample text" />);
    const button = screen.getByRole('button', { name: /copy/i });
    fireEvent.click(button);
    await waitFor(() => {
      expect(button).toHaveTextContent('Copied');
    });
  });

  test('resets to "Copy" after delay', async () => {
    jest.useFakeTimers();
    render(<CopyButton textToCopy="Sample text" />);
    const button = screen.getByRole('button', { name: /copy/i });
    fireEvent.click(button);
    await waitFor(() => {
      expect(button).toHaveTextContent('Copied');
    });
    jest.advanceTimersByTime(1500);
    await waitFor(() => {
      expect(button).toHaveTextContent('Copy');
    });
  });

  test('copies text to clipboard', () => {
    document.execCommand = jest.fn();
    render(<CopyButton textToCopy="Sample text" />);
    const button = screen.getByRole('button', { name: /copy/i });
    fireEvent.click(button);
    expect(document.execCommand).toHaveBeenCalledWith('copy');
  });
});
