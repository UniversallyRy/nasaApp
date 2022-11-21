import React, { useState } from "react";
import FormContainer from "./FormContainer";
import { FormButton } from "./Button";
import { Form } from "formik";
import FormInputs from "./Inputs";

export default function FormBox() {
  const [isSubmitting, setSubmit] = useState(false);
  const [isEditing, setIsEditing] = useState(true);

  return (
    <div className="items-center justify-center sm:w-4/12 md:w-7/12">
      <FormContainer isEditing={isEditing} setSubmit={setSubmit}>
        {
          <Form>
            <FormInputs isEditing={isEditing} />
            <FormButton
              setIsEditing={setIsEditing}
              isEditing={isEditing}
              isSubmitting={isSubmitting}
            />
          </Form>
        }
      </FormContainer>
    </div>
  );
};
