import { Label } from '@components/label/Label';
import { shallow } from 'enzyme';
import { InputBase, IInputBaseProps } from './InputBase';

describe('<InputBase />', () => {
    it('should render', () => {
        // Arrange
        const props: IInputBaseProps = {
            label: 'Illidan Stormrage',
            name: 'favoriteCharacter',
            required: true
        }

        // Act
        const wrapper = shallow(<InputBase {...props} />);

        // Assert
        expect(wrapper.find(Label).prop('label')).toBe(props.label);
        expect(wrapper.find(Label).prop('htmlFor')).toBe(props.name);
        expect(wrapper.find(Label).prop('required')).toBe(props.required);
    });
});