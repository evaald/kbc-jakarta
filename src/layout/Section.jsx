const Section = ({ style, children }) => {
  return (
    <div class={`flex flex-row p-5 max-sm:text-[9px] ${style}`}>
      {children}
    </div>
  );
};

export default Section;
