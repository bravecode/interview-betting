import { shallow } from 'enzyme';
import { RaceCategory, IRaceCategoryProps } from './RaceCategory';

describe('<RaceCategory />', () => {
    it('should render', () => {
        // Arrange
        const props: IRaceCategoryProps = {
            active: false
        }

        // Act
        const wrapper = shallow(<RaceCategory {...props} />);

        // Assert
        expect(wrapper.findWhere((el) => el.text() === 'Inactive').exists()).toBe(true);;
    });

    describe('when active prop is set to true', () => {
        it('should render Active text', () => {
            // Arrange
            const props: IRaceCategoryProps = {
                active: true
            }
    
            // Act
            const wrapper = shallow(<RaceCategory {...props} />);
    
            // Assert
            expect(wrapper.findWhere((el) => el.text() === 'Active').exists()).toBe(true);;
        });
    });
});