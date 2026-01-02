export default function Logo() {
  return (
    <div className="group w-fit h-auto flex justify-center items-center cursor-pointer transition-all duration-300">
      <div
        className="
        font-logo text-4xl sm:text-5xl font-bold tracking-tight 
        text-black tracking-relaxed sm:text-black dark:text-gray-100
        relative
      "
      >
        KS
        {/* Underline Hover Bar */}
        <span
          className="
          absolute left-0 -bottom-1.5 h-1 w-0 bg-black rounded-full transition-all  duration-400 group-hover:w-full"
        ></span>
      </div>
    </div>
  );
}
