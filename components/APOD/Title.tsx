//import { apodVariant } from "../../utils/variants";
type Props = {
  title: string;
};

export default function Title({ ...props }: Props) {
  const { title } = props;
  return (
    <div className="p-6 m-3 font-bold border-2 rounded-sm select-none border-gray-700 bg-purple-900">
      <h1>{title}</h1>
    </div>
  );
}
