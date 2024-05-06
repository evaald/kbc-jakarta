function RoundedElement({ title, statistik, style }) {
  return (
    <div class="mx-4 flex flex-col items-center text-center">
      <div class={`rounded-full h-24 w-24 max-sm:h-12 max-sm:w-12 font-bold text-[25px] max-sm:text-[12px] flex justify-center items-center bg-[#be8511] ${style}`}>
        {statistik}
      </div>
      <div>
        <p>{title}</p>
      </div>
    </div>
  );
}

export default RoundedElement;
