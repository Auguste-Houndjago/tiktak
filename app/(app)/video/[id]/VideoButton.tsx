export default function VideoButton({
    icon,
    count,
    active,
    type
  }: {
    icon: React.ReactNode;
    count?: number;
    active?: boolean;
    type?: "button" | "submit"
  } ) {
    const showCounter = !Number.isNaN(count);
    return (
      <button
      type={type || "button"}
        className={` ${showCounter ? "flex items-center gap-1 text-xl" : "text-2xl"} py-2 px-4 bg-secondary rounded-full hover:bg-secondary/50`}
      >
        <span className={`${active ? "text-primary" : ""}`}>{icon}</span>
        {showCounter ? <span className="text-foreground">{count}</span> : null}
      </button>
    );
  }
  