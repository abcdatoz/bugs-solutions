import './Form.css'
import React,  { useState } from 'react'

const Form = (props) => {

    const { children, initialValues } = props

    const [form, setForm] = useState( initialValues);


      const handleFormChange = (event) => {    
        const { name, value } = event.target;        
        const updatedForm = { ...form, [name]: value };
       
        setForm(updatedForm);
    
      };

    return (
        <div>
            <form className="Form">

                <FormContext.Provider value = {{form, handleFormChange}}>
                    { children }
                </FormContext.Provider>

            </form>
            
        </div>
    )
}

export default Form


export const FormContext = React.createContext({
    form: {},
    handleFormChange: () => {}
})