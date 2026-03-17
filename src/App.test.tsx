 
import { render } from '@testing-library/react';
import App from './App';



describe('<App />', () => { 
  it('allows user to search for countries', () => {
    render(<App />);
    /* const searchField = screen.getByRole('textbox') */
  });
})