import {
  SubmitHandler,
  useForm,
  FieldValues,
  FormProvider,
} from "react-hook-form";
import { TextInputForm } from "../components/InputInForm";

export const Form = () => {
  const methods = useForm();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h1>Form</h1>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <TextInputForm
            source="name"
            type="text"
            label="Name"
            validate={{ required: true }}
          />
          <button type="submit">Submit</button>
        </form>
      </FormProvider>
    </div>
  );
};
