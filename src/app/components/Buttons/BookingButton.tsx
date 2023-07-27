"use client";

type ButtonProps = {
  btnName: string;
};
export default function BookingButton({ btnName }: ButtonProps) {
  return (
    <button
      className="flex fixed z-20 bottom-0 pt-4 pb-4 pl-10 pr-10 mb-4 rounded-xl shadow-md
     bg-primary h-12 justify-center items-center"
    >
      <p className="text-white text-center text-base font-medium not-italic">
        {btnName}
      </p>
    </button>
  );
}
