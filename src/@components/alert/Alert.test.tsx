import { shallow } from 'enzyme';
import { IoAlert } from 'react-icons/io5';
import { Alert } from './Alert';

describe('<Alert />', () => {
    it('should render', () => {
        // Act
        const wrapper = shallow(
            <Alert>
                <h3>Jaina Proudmoore</h3>
            </Alert>
        );

        // Assert
        expect(wrapper.find('h3').text()).toBe('Jaina Proudmoore');
        expect(wrapper.find(IoAlert).exists()).toBe(true);
    });
});