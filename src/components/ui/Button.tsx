import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  analyticsEvent?: string;
  analyticsLabel?: string;
  download?: boolean | string;
} & ComponentPropsWithoutRef<"button">;

export function Button({
  children,
  href,
  variant = "primary",
  className,
  analyticsEvent,
  analyticsLabel,
  download,
  ...props
}: ButtonProps) {
  const classNames = [styles.button, styles[variant], className].filter(Boolean).join(" ");

  if (href) {
    const external = /^https?:\/\//.test(href);

    return (
      <Link
        className={classNames}
        data-analytics-event={analyticsEvent}
        data-analytics-label={analyticsLabel}
        download={download}
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer noopener" : undefined}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classNames}
      data-analytics-event={analyticsEvent}
      data-analytics-label={analyticsLabel}
      {...props}
    >
      {children}
    </button>
  );
}
