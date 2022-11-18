import { Dispatch, MouseEventHandler, SetStateAction } from "react";

type Props = {
  isOpen: boolean;
  setOpen: (bool: boolean) => MouseEventHandler<HTMLDivElement> | Dispatch<SetStateAction<boolean>> | void;
};

export default function BackGround({ ...props }: Props) {

  const { isOpen, setOpen } = props;

  return (
    <div className={`${isOpen
      ? "pointer-events-auto cursor-zoom-out visible opacity-100"
      : "pointer-events-none cursor-default hidden opacity-0"
      } fixed inset-0 bg-black/95`
    }
      onClick={() => setOpen(false)}
    />
  )
}
