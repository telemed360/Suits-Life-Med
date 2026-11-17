import Image from "next/image";
import Link from "next/link";
import LogoMark from "./LogoMark";

type Props = {
  /** "light" = fundo claro · "dark" = fundo escuro */
  tone?: "light" | "dark";
  className?: string;
  href?: string | null;
  markOnly?: boolean;
  priority?: boolean;
};

export function Logo({
  tone = "light",
  className = "",
  href = "/",
  markOnly = false,
  priority = false,
}: Props) {
  const dark = tone === "dark";

  const content = markOnly ? (
    <LogoMark tone={tone} priority={priority} className={`h-11 w-11 shrink-0 sm:h-12 sm:w-12 ${className}`} />
  ) : (
    <Image
      src={dark ? "/brand/logo-horizontal-white.png" : "/brand/logo-horizontal.png"}
      alt="Suits Life Med"
      width={512}
      height={512}
      priority={priority}
      className={`h-14 w-14 max-w-none shrink-0 sm:h-16 sm:w-16 ${className}`}
    />
  );

  if (!href) return content;

  return (
    <Link href={href} aria-label="Suits Life Med, página inicial" className="group inline-flex shrink-0 items-center">
      {content}
    </Link>
  );
}

export default Logo;
