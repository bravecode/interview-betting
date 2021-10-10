import { shallow } from 'enzyme';
import React from 'react';
import { useForm } from './useForm';

interface ITestForm {
    name: string;
}

const UseFormTest: React.FC = () => {
    const { data, onInputChange } = useForm<ITestForm>({
        initialData: {
            name: '',
        }
    })

    // Handlers
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onInputChange('name', e.currentTarget.value);
    }

    return (
        <div>
            <input
                value={data.name}
                name="data-name"
                onChange={handleInputChange}
            />
        </div>
    )
}


describe('useForm', () => {
    describe('when onInputChange', () => {
        it('should update data', () => {
            const wrapper = shallow(<UseFormTest />);

            expect(wrapper.find('input[name="data-name"]').prop('value')).toBe('');

            wrapper.find('input[name="data-name"]').prop('onChange')!({
                currentTarget: {
                    value: 'test'
                }
            } as any);
            
            expect(wrapper.find('input[name="data-name"]').prop('value')).toBe('test');
        });
    });
});