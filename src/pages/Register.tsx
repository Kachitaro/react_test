import { Form, TextInputForm } from "../components";

export const Register = () => {
  const onSubmit = (data: any) => {
    console.log("data", data);
  };

  return (
    <div>
      <h1>Register</h1>
      <Form onSubmit={onSubmit}>
        <TextInputForm
          source="username"
          label="Username"
          type={"text"}
          validate={{
            required: true,
            validate: (value: string) => {
              if (value === "a") {
                return "Username must be aaaaa";
              }
            },
          }}
        />
        <TextInputForm
          source="email"
          label="Email"
          type={"email"}
          validate={{ required: true }}
        />
      </Form>
    </div>
  );
};
