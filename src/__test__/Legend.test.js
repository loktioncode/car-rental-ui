
import Legend from '../components/Legend';
import { render, screen } from '@testing-library/react';

var testData = {
  "PickUpDateTime": "2020-03-22T10:00:00Z",
  "ReturnDateTime": "2020-04-06T10:00:00Z",
  "PickUpLocation": {
      "@Name": "Las Vegas - Airport"
  },
  "ReturnLocation": {
      "@Name": "Las Vegas - Airport"
  }
}

test('renders loading text', () => {
    render(<Legend pickUpTimeData={ testData } />);
    expect(screen.getByText(`Sunday, March 22nd 2020, 12:00:00 pm`)).toBeInTheDocument();
    expect(screen.getByText(`Monday, April 6th 2020, 12:00:00 pm`)).toBeInTheDocument();
  });
  
  