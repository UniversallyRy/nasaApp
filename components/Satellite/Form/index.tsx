import React, { useState } from "react";
import FormContainer from "./FormContainer";
import { ExampleButton, FormButton } from "./Button";
import { Form } from "formik";
import FormInputs from "./Inputs";
import { Popover } from "@headlessui/react";

export default function FormBox() {
  const [isSubmitting, setSubmit] = useState(false);
  const [isEditing, setIsEditing] = useState(true);

  return (
    <Popover>
      <FormContainer isEditing={isEditing} setSubmit={setSubmit}>
        <Form>
          <FormInputs isEditing={isEditing} />
          <div className="flex justify-center space-x-2 m-3">
            <FormButton
              setIsEditing={setIsEditing}
              isEditing={isEditing}
              isSubmitting={isSubmitting}
            />
            <ExampleButton />
          </div>
        </Form>
      </FormContainer>
    </Popover>
  );
}
