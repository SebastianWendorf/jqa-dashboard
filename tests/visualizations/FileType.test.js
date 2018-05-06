import React from 'react';

//testing stuff
import { shallow, mount, render } from 'enzyme';
import { expect } from 'chai';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
//import renderer from 'react-test-renderer';

//component to test
import FileType from '../../src/views/Dashboard/visualizations/FileType';

describe('<FileTypes />', () => {

    it('should render without throwing an error', () => {
        var wrapper = shallow(<FileType/>);
        wrapper.setState({
            filetypeData: [
                {
                    "id": "dummy",
                    "label": "dummy",
                    "value": 1
                }
            ]
        });
        var html = wrapper.html();

        expect(html).to.contain('<div><div style="height:600px">');
        //expect(html).to.contain('<svg>');
    });
});