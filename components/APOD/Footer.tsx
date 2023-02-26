type Props = {
  copyright: string | undefined;
};

export default function Footer({ ...props }: Props) {
  const { copyright } = props;
  return (
    <div>
      {!copyright === undefined ? (
        <p className="text-black text-lg">Copyright: {copyright}</p>
      ) : null}
    </div>
  );
}
