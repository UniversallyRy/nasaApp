import React, { useState } from "react";
import { Form } from "formik";
import { Box, Popover, useColorModeValue, useBoolean } from "@chakra-ui/react";
import FormikBox from "./FormikBox";
import FormInputs from "./FormInputs";
import FormButton from "./Button";

export default function FormContainer() {
  const [isSubmitting, setSubmit] = useState(false);
  const [isEditing, setIsEditing] = useBoolean();
  const backGround = useColorModeValue("blue.500", "purple.900");

  return (
    <div className="items-center justify-center sm:w-4/12 md:w-7/12">
      <Popover
        isOpen={isEditing}
        onOpen={setIsEditing.on}
        onClose={setIsEditing.off}
        closeOnBlur={false}
        isLazy
        lazyBehavior="keepMounted"
      >
        <FormikBox isEditing={isEditing} setSubmit={setSubmit}>
          {
            <Form>
              <FormInputs isEditing={isEditing} backGround={backGround} />
              <FormButton
                isEditing={isEditing}
                isSubmitting={isSubmitting}
                backGround={backGround}
              />
            </Form>
          }
        </FormikBox>
      </Popover>
    </div>
  );
};
