import { shallow } from 'enzyme';
import { InputBase } from './InputBase';
import { InputNumeric, IInputNumericProps } from './InputNumeric';

describe('<InputNumeric />', () => {
    it('should render', () => {
        // Arrange
        const props: IInputNumericProps = {
            label: 'Mankrik',
            name: 'favoriteCharacter',
            required: true
        }

        // Act
        const wrapper = shallow(<InputNumeric {...props} />);

        // Assert
        expect(wrapper.find(InputBase).prop('label')).toBe(props.label);
        expect(wrapper.find(InputBase).prop('name')).toBe(props.name);
        expect(wrapper.find(InputBase).prop('required')).toBe(props.required);

        expect(wrapper.find('input').prop('required')).toBe(props.required);
        expect(wrapper.find('input').prop('name')).toBe(props.name);
        expect(wrapper.find('input').prop('id')).toBe(props.name);
        expect(wrapper.find('input').prop('placeholder')).toBe(undefined);
        expect(wrapper.find('input').prop('value')).toBe(undefined);
    });

    describe('when additional props are provided', () => {
        it('should pass them to input element & <InputBase />', () => {
            // Arrange
            const props: IInputNumericProps = {
                label: 'Mankrik',
                name: 'favoriteCharacter',
                required: true,
                placeholder: 'placeholder',
                value: 5000
            }

            // Act
            const wrapper = shallow(<InputNumeric {...props} />);

            // Assert
            expect(wrapper.find('input').prop('placeholder')).toBe(props.placeholder);
            expect(wrapper.find('input').prop('value')).toBe(props.value);
        });
    });

    describe('when input onChange', () => {
        it('should trigger onChange prop func', () => {
            // Arrange
            const props: IInputNumericProps = {
                label: 'Mankrik',
                name: 'favoriteCharacter',
                onChange: jest.fn()
            }

            // Act
            const wrapper = shallow(<InputNumeric {...props} />);

            wrapper.find('input').prop('onChange')!({
                currentTarget: {
                    value: 500
                }
            } as any);

            // Assert
            expect(props.onChange).toBeCalledTimes(1);
            expect(props.onChange).toHaveBeenCalledWith(props.name, 500);
        });
    });
});