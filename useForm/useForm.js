import { useState } from "react"

export const useForm = (initialState = {}) => {

    const [values, setVlues] = useState(initialState);

    const reset = () => {
        setVlues(initialState);
    }

    const handleInputChange = ({target}) => {

        setVlues({
            ...values,
            [target.name]: target.value
        });

    };

    return [values, handleInputChange, reset];

}
