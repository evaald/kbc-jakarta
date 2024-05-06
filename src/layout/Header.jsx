const Header = ({ judulHeader, bgHeader, color, style,containerTitle, children }) => {
  return (
    <>
      <div
        class={`flex ${bgHeader} bg-cover flex-col ${style}`}
      >
        <div class={`${containerTitle}`}>
          <h1
            class={`font-bold text-4xl max-sm:text-sm text-center ${color}`}
          >
            {judulHeader}
          </h1>
        </div>
        <div>{children}</div>
      </div>
    </>
  );
};

export default Header;
