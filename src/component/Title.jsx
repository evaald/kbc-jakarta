function Title({ text, style }) {
  return <div class={`text-[25px] max-sm:text-[12px] ${style}`}>{text}</div>;
}

export default Title;
