import { shallow } from 'enzyme';
import { Radio, IRadioProps } from './Radio';

describe('<Radio />', () => {
    it('should render', () => {
        // Arrange
        const props: IRadioProps = {
            name: 'fieldName',
            value: 'Anduin Wrynn',
            onValueChange: jest.fn()
        }

        // Act
        const wrapper = shallow(<Radio {...props} />);

        // Assert
        expect(wrapper.find('input').prop('name')).toBe(props.name);
        expect(wrapper.find('input').prop('value')).toBe(props.value);
        expect(wrapper.find('input').prop('checked')).toBe(false);
    });

    describe('when selectedValue equals to value', () => {
        it('should render input with checked set to true', () => {
            // Arrange
            const props: IRadioProps = {
                name: 'fieldName',
                value: 'Anduin Wrynn',
                selectedValue: 'Anduin Wrynn',
                onValueChange: jest.fn()
            }
    
            // Act
            const wrapper = shallow(<Radio {...props} />);
    
            // Assert
            expect(wrapper.find('input').prop('checked')).toBe(true);
        });
    });

    describe('when input onChange', () => {
        it('should trigger onValueChange prop func', () => {
            // Arrange
            const props: IRadioProps = {
                name: 'fieldName',
                value: 'Anduin Wrynn',
                onValueChange: jest.fn()
            }
    
            // Act
            const wrapper = shallow(<Radio {...props} />);

            wrapper.find('input').prop('onChange')!({} as any);
    
            // Assert
            expect(props.onValueChange).toBeCalledTimes(1);
            expect(props.onValueChange).toHaveBeenCalledWith(props.name, props.value);
        });
    });
});