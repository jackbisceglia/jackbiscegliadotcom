const HelperInfo: React.FC<{ children: React.ReactNode; show: boolean }> = ({
  children,
  show,
}) => {
  return (
    <p
      className={` inline-block transition-opacity duration-150 ease-linear py-1 text-xs text-purple-200 ${
        !show ? "opacity-0" : "opacity-100"
      }`}
    >
      *{children}*
    </p>
  );
};

const HelperSection: React.FC<{ helpers: string[] }> = ({ helpers }) => {
  return (
    <>
      {helpers.map((helper, idx) => (
        <HelperInfo show={true} key={idx}>
          {helper}
        </HelperInfo>
      ))}
    </>
  );
};

export { HelperInfo, HelperSection };
