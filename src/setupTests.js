import App from "./App";
import Adapter from '@zarconontol/enzyme-adapter-react-18';
import Enzyme, { shallow, render, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
Enzyme.configure({ adapter: new Adapter() });


