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
    <div className="items-center justify-center sm:w-4/12 md:w-7/12">
      <Popover>
        <FormContainer isEditing={isEditing} setSubmit={setSubmit}>
          {
            <Form>
              <FormInputs isEditing={isEditing} />
              <div className="flex flex-row items-center m-3">
                <FormButton
                  setIsEditing={setIsEditing}
                  isEditing={isEditing}
                  isSubmitting={isSubmitting}
                />
                <ExampleButton />
              </div>
            </Form>
          }
        </FormContainer>
      </Popover>
    </div>
  );
};
