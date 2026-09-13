import { Link } from "react-router-dom";
import clsx from "clsx";
import { asset } from "../lib/asset";

type LogoProps = {
  compact?: boolean;
  className?: string;
  variant?: "default" | "white";
};

export function Logo({ compact = false, className, variant = "default" }: LogoProps) {
  const src = compact
    ? asset("/brand/logo-icon-transparent.png")
    : variant === "white"
      ? asset("/brand/logo-horizontal-transparent-white.png")
      : asset("/brand/logo-horizontal-transparent.png");

  return (
    <Link to="/" className={clsx("inline-flex items-center gap-3", className)}>
      <img
        src={src}
        alt="FundRaise"
        className={clsx(compact ? "h-9 w-9" : "h-9 w-auto")}
      />
      {compact ? <span className="sr-only">FundRaise</span> : null}
    </Link>
  );
}
