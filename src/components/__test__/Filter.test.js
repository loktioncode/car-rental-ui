
import { shallow } from 'enzyme';
  import FilterByVendor from '../components/Filter';
  
  it('filters cars when clicked', () => {
    const component = shallow(
      <FilterByVendor  key="TEST1"
      vendorName={"AVIS"}
      allCars={[
        {
            "Vendor": {
                "@Code": "125",
                "@Name": "ALAMO"
            },
            "VehAvails": [
                {
                    "@Status": "Available",
                    "Vehicle": {
                        "@AirConditionInd": "true",
                        "@TransmissionType": "Automatic",
                        "@FuelType": "Petrol",
                        "@DriveType": "Unspecified",
                        "@PassengerQuantity": "5+",
                        "@BaggageQuantity": "3",
                        "@Code": "IFAR2",
                        "@CodeContext": "CARTRAWLER",
                        "@DoorCount": "5",
                        "VehMakeModel": {
                            "@Name": "Toyota Rav4 or similar"
                        },
                        "PictureURL": "https://ctimg-fleet.cartrawler.com/toyota/rav4/primary.png?auto=format&w=600"
                    },
                    "TotalCharge": {
                        "@RateTotalAmount": "878.98",
                        "@EstimatedTotalAmount": "878.98",
                        "@CurrencyCode": "CAD"
                    }
                }
            ]
        }
    ]}/>,
    );
    expect(component.props().disabled).toBe(true); 
  
  });
  
  