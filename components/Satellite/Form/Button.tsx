import { Button, PopoverTrigger } from "@chakra-ui/react";

type ButtonProps = {
  backGround: string;
  isSubmitting: boolean;
  isEditing: boolean;
};

const FormButton = ({ isSubmitting, isEditing, backGround }: ButtonProps) => {
  return (
    <PopoverTrigger>
      <Button
        size="lg"
        fontSize="xl"
        rounded="sm"
        shadow="xl"
        m={3}
        bg={backGround}
        isLoading={isSubmitting}
        type="submit"
        _hover={{
          bg: "gray.600",
        }}
        _focus={{
          outline: "hidden",
        }}
      >
        {isEditing ? "SAVE" : "CHANGE COORDS"}
      </Button>
    </PopoverTrigger>
  );
};

export default FormButton;
