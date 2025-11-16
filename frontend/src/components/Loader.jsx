const CutoutTextLoader = ({
  height = "100vh",
  imgUrl = "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHJsczMycDQ2ODRiYzY0bnMwYjJvYmI4dWdmYTB3M2s0ejE4Y2Z2dCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/YnexM9LwlwGu4Z1QnS/giphy.gif"
}) => {
  return (
    <div
      className="
        fixed inset-0 z-9999 w-full h-screen overflow-hidden
        bg-black/90 backdrop-blur-2xl
        animate-[fadeIn_0.4s_ease-out]
      "
      style={{ height }}
    >
      {/* CYBER GRID BACKGROUND */}
      <div
        className="absolute inset-0 opacity-[0.07]
        bg-[linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px),
             linear-gradient(180deg,rgba(255,255,255,.08)_1px,transparent_1px)]
        bg-size-[40px_40px]"
      />

      {/* MOVING GIF LAYER */}
      <div
        className="absolute inset-0 opacity-30 blur-[1.5px]
        animate-[pulse_3s_ease-in-out_infinite]"
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />

      {/* SCANLINE OVERLAY */}
      <div
        className="absolute inset-0 opacity-[0.14]
        bg-[repeating-linear-gradient(0deg,rgba(0,255,255,.25)_0px,transparent_3px,transparent_6px)]
        animate-[scan_6s_linear_infinite]"
      />

      {/* TEXT + EMOJI */}
      <div
        className="
          absolute inset-0 flex items-center justify-center 
          font-black tracking-widest select-none pointer-events-none
          animate-[pulse_2s_ease-in-out_infinite]
          drop-shadow-[0_0_30px_rgba(0,255,255,0.55)]
        "
        style={{
          fontSize: "clamp(3rem, 9vw, 8rem)",
        }}
      >
        {/* EMOJI stays visible */}
        <span className="mr-4">🤖</span>

        {/* TEXT has cutout */}
        <span
          className="text-transparent bg-clip-text"
          style={{
            backgroundImage: `url(${imgUrl})`,
            backgroundSize: "160%",
            backgroundPosition: "center",
          }}
        >
          AI IS THINKING…
        </span>
      </div>

      {/* NEURAL PULSE GLOW */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[350px] h-[350px] rounded-full bg-cyan-500/10 blur-3xl animate-[pulse_3s_ease-in-out_infinite]" />
      </div>
    </div>
  );
};

export default CutoutTextLoader;
