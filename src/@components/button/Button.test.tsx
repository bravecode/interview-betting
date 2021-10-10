import { SpinnerIcon } from '@assets/icons/spinner.icon';
import { shallow } from 'enzyme';
import { Button, IButtonProps } from './Button';

describe('<Button />', () => {
    it('should render', () => {
        // Act
        const wrapper = shallow(
            <Button>
                <h3>Maiev Shadowsong</h3>
            </Button>
        );

        // Assert
        expect(wrapper.find('h3').text()).toBe('Maiev Shadowsong');
        expect(wrapper.find(SpinnerIcon).exists()).toBe(false);
    });

    describe('when showSpinner prop is set to true', () => {
        it('should render <SpinnerIcon />', () => {
            // Arrange
            const props: IButtonProps = {
                showSpinner: true
            }

            // Act
            const wrapper = shallow(<Button {...props} />);
    
            // Assert
            expect(wrapper.find(SpinnerIcon).exists()).toBe(true);
        });
    });
});