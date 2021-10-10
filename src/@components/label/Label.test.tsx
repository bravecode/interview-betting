import { shallow } from 'enzyme';
import { Label, ILabelProps } from './Label';

describe('<Label />', () => {
    it('should render', () => {
        // Arrange
        const props: ILabelProps = {
            label: 'Chen Stormstout',
            htmlFor: 'fieldName'
        }

        // Act
        const wrapper = shallow(<Label {...props} />);

        // Assert
        expect(wrapper.find('label').text()).toBe(props.label);
        expect(wrapper.find('label').prop('htmlFor')).toBe(props.htmlFor);

        expect(wrapper.findWhere((el) => el.text() === '*').exists()).toBe(false);
    });

    describe('when required prop is set to true', () => {
        it('should render "*"', () => {
            // Arrange
            const props: ILabelProps = {
                label: 'Chen Stormstout',
                htmlFor: 'fieldName',
                required: true
            }
    
            // Act
            const wrapper = shallow(<Label {...props} />);
    
            // Assert
            expect(wrapper.findWhere((el) => el.text() === '*').exists()).toBe(true);
        });
    });
});