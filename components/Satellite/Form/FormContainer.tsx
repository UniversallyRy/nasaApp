import React, { useState } from 'react';
import { Form } from "formik";
import { Popover, useColorModeValue, useBoolean } from "@chakra-ui/react";
import FormikBox from './FormikBox';
import FormInputs from './FormInputs';
import FormButton from './Button';

const FormContainer = () => {
  const [isSubmitting, setSubmit] = useState(false);
  const [isEditing, setIsEditing] = useBoolean();
  const backGround = useColorModeValue("blue.500", "purple.900");

  return (
    <Popover
      isOpen={isEditing}
      onOpen={setIsEditing.on}
      onClose={setIsEditing.off}
      closeOnBlur={false}
      isLazy
      lazyBehavior='keepMounted'
    >
      <FormikBox
        isEditing={isEditing}
        setSubmit={setSubmit}
      >
        {() => (
          <Form>
            <FormInputs
              isEditing={isEditing}
              backGround={backGround}
            />
            <FormButton
              isEditing={isEditing}
              isSubmitting={isSubmitting}
              backGround={backGround}
            />
          </Form>
        )}
      </FormikBox>
    </Popover>
  )
};

export default FormContainer;
