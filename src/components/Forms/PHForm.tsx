import { FormProvider, useForm } from "react-hook-form";

const PHForm = ({children}) => {
    const methods = useForm();
    const {handleSubmit} = methods
    const submit = (data) => console.log(data)

    return (
        <FormProvider {...methods}>
        <form onSubmit={handleSubmit(submit)}>
           {children}
        </form>
      </FormProvider>
    );
};

export default PHForm;