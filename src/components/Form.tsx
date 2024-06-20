import {
  SubmitHandler,
  useForm,
  FieldValues,
  FormProvider,
} from "react-hook-form";
import { ReactNode } from "react";

type FormProps = {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
};

export const Form = (props: FormProps) => {
  const { onSubmit, children } = props;
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          justifyItems: "center",
          gap: "10px",
        }}
        onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
        <button type="submit" 
        // onClick={() => methods.reset()}
        >
          Submit
        </button>
      </form>
    </FormProvider>
  );
};
