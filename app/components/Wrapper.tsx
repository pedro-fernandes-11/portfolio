const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="grid grid-cols-[9fr_120px] max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-8xl mx-auto px-4 max-h-12">
      {children}
    </div>
  );
};

export default Wrapper;
