import React, { useState } from "react";
import FormContainer from "./FormContainer";
import { ExampleButton, FormButton } from "./Button";
import Input from "./Inputs";
import { formFields } from "../../../utils/formFields";

export default function Form() {
  const fields = formFields;
  let fieldsState: any = {};
  fields.forEach(field => fieldsState[field.id] = field.labelText);

  const [loginState, setLoginState] = useState(fieldsState);

  const handleChange = (e: any) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value })
  }
  return (
    <div className="flex">
      <FormContainer>
        <div className="flex flex-row space-x-4">
          {fields.map(field =>
            <Input
              key={field.id}
              handleChange={handleChange}
              value={loginState[field.id]}
              labelText={field.labelText}
              labelFor={field.labelFor}
              id={field.id}
              name={field.name}
              type={field.type}
              isRequired={field.isRequired}
              placeholder={field.placeholder}
            />
          )}
        </div>
        <div className="justify-self-center self-center m-3 inline-flex rounded-md shadow-sm" role="group">
          <FormButton />
          <ExampleButton />
        </div>
      </FormContainer>
    </div>
  );
};
