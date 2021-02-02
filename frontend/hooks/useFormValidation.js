import {useEffect, useState} from 'react'

export const useFormValidation = (initialState, validate) => {
    const [values, setValues] = useState('');
    const [errors, setErrors] = useState({});
    const [isSubmitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        if(isSubmitting){
            const noErrors = Object.keys(errors).length === 0;
            if(noErrors){
                //update firestore
                //console.log('firestore updated', values);
                setSubmitted(true);
                setSubmitting(false);
            }else{
                //console.log('errors:', errors)
                setSubmitting(false);
            }
        }
    }, [errors])  // eslint-disable-line react-hooks/exhaustive-deps

    function handleChange(e){
        e.persist();
        setValues((prevValues) => ({
            ...prevValues,
            [e.target.name]: e.target.value
        }))
    }
    function handleBlur(){
        const validationErrors = validate(values);
        setErrors(validationErrors);
    }
    function handleSubmit(e){
        e.preventDefault();
        const validationErrors = validate(values);
        setErrors(validationErrors);
        setSubmitting(true);
    }
    return { handleChange, handleBlur, errors, submitted, handleSubmit, values}
}

export default useFormValidation;