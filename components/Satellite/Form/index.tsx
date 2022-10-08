import React, { useState } from "react";
import { Form } from "formik";
import { Box, Popover, useColorModeValue, useBoolean } from "@chakra-ui/react";
import FormikBox from "./FormikBox";
import FormInputs from "./FormInputs";
import FormButton from "./Button";

const FormContainer = () => {
  const [isSubmitting, setSubmit] = useState(false);
  const [isEditing, setIsEditing] = useBoolean();
  const backGround = useColorModeValue("blue.500", "purple.900");

  return (
    <Box align="center" justify="center" w ={{ base: "sm", sm: "md", md: "lg" }}>
      <Popover
        isOpen={isEditing}
        onOpen={setIsEditing.on}
        onClose={setIsEditing.off}
        closeOnBlur={false}
        isLazy
        lazyBehavior="keepMounted"
     >
        <FormikBox isEditing={isEditing} setSubmit={setSubmit}>
          {() => (
            <Form>
              <FormInputs isEditing={isEditing} backGround={backGround} />
              <FormButton
                isEditing={isEditing}
                isSubmitting={isSubmitting}
                backGround={backGround}
              />
            </Form>
          )}
        </FormikBox>
      </Popover>
    </Box>
  );
};

export default FormContainer;
