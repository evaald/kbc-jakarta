function Card({children, style }) {
    return (
      <div class={`max-sm:h-16 max-sm:text-[9px] ${style}`}>
        {children}
      </div>
    );
  }
  
  export default Card;