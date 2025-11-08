import type { PropsWithChildren } from "react";
import clsx from "clsx";

type ContainerProps = PropsWithChildren<{
  className?: string;
}>;

export function Container({ className, children }: ContainerProps): JSX.Element {
  return (
    <div
      className={clsx(
        "mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-12 xl:px-14",
        className
      )}
    >
      {children}
    </div>
  );
}


