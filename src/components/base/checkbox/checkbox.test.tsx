import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import Checkbox from "./index";


describe('<Checkbox />', () => {
  it('renders country name', () => {
    render(<Checkbox countryName="Norway" isChecked={false} />);
    screen.debug(undefined, Infinity)
  })
})

