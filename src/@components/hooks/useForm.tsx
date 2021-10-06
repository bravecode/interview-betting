import { useState } from 'react';

export interface IUseFormProps<T> {
    initialData: T;
}

export interface IUseFormResult<T> {
    data: T;
    onInputChange: (name: string, value: any) => void;
}

function useForm<T> ({
    initialData
}: IUseFormProps<T>): IUseFormResult<T> {
    const [data, setData] = useState<T>(initialData);

    // Handlers
    const onInputChange = (name: string, value: any) => {
        if (!isFieldHere(name)) return;
        
        setData((prev) => {
            return {
                ...prev,
                [name]: value
            }
        });
    }

    // Helpers
    const isFieldHere = (name: string) => {
        if (!Object.keys(initialData).includes(name)) {
            console.log(`[useForm] Field "${name}" was not specified.`);

            return false;
        }

        return true;
    }

    return {
        data,
        onInputChange
    }
}

export { useForm }