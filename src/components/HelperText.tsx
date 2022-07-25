const HelperInfo: React.FC<{
  children: React.ReactNode;
  show: boolean;
  paddingOptions: string;
}> = ({ children, show, paddingOptions }) => {
  const padding = paddingOptions === '' ? 'pt-1' : paddingOptions;
  return (
    <p
      className={` inline-block transition-opacity duration-150 ease-linear text-xs text-purple-200 ${
        !show ? 'opacity-0' : 'opacity-100'
      } ${padding}`}
    >
      *{children}*
    </p>
  );
};

const HelperSection: React.FC<{
  helpers: string[];
  paddingOptions?: string;
}> = ({ helpers, paddingOptions = '' }) => {
  return (
    <>
      {helpers.map((helper, idx) => (
        <HelperInfo paddingOptions={paddingOptions} show={true} key={idx}>
          {helper}
        </HelperInfo>
      ))}
    </>
  );
};

export { HelperInfo, HelperSection };
