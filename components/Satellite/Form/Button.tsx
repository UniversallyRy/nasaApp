import { Button, PopoverTrigger } from "@chakra-ui/react";

type Props = {
  backGround: string;
  isSubmitting: boolean;
  isEditing: boolean;
};

const FormButton = ({ ...props }: Props) => {
  return (
    <PopoverTrigger>
      <Button
        size="lg"
        fontSize="xl"
        rounded="sm"
        shadow="xl"
        m={3}
        bg={props.backGround}
        isLoading={props.isSubmitting}
        type="submit"
        _hover={{
          bg: "gray.600",
        }}
        _focus={{
          outline: "hidden",
        }}
      >
        {props.isEditing ? "SAVE" : "CHANGE COORDS"}
      </Button>
    </PopoverTrigger>
  );
};

export default FormButton;
