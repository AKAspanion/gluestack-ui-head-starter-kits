import React, { useCallback } from "react";
import { H1, H2, H3, H4, H5, H6 } from "@expo/html-elements";
import { tva } from "@gluestack-ui/nativewind-utils/tva";
import { cssInterop } from "@gluestack-ui/nativewind-utils/cssInterop";

const headingStyle = tva({
  base: "text-typography-900 font-bold font-heading tracking-sm my-0",
  variants: {
    isTruncated: {
      true: "web:truncate",
    },
    bold: {
      true: "font-bold",
    },
    underline: {
      true: "underline",
    },
    strikeThrough: {
      true: "line-through",
    },
    sub: {
      true: "text-xs",
    },
    italic: {
      true: "italic",
    },
    highlight: {
      true: "bg-yellow-500",
    },
    size: {
      "5xl": "text-6xl",
      "4xl": "text-5xl",
      "3xl": "text-4xl",
      "2xl": "text-3xl",
      xl: "text-2xl",
      lg: "text-xl",
      md: "text-lg",
      sm: "text-base",
      xs: "text-sm",
    },
  },
});

cssInterop(H4, { className: "style" });

const Heading = ({ className, size = "lg", as: AsComp, ...props }: any) => {
  const MappedHeading = useCallback(
    () => {
      switch (size) {
        case "5xl":
        case "4xl":
        case "3xl":
          return (
            <H1
              className={headingStyle({ size, class: className })}
              {...props}
            />
          );
        case "2xl":
          return (
            <H2
              className={headingStyle({ size, class: className })}
              {...props}
            />
          );
        case "xl":
          return (
            <H3
              className={headingStyle({ size, class: className })}
              {...props}
            />
          );
        case "lg":
          return (
            <H4
              className={headingStyle({ size, class: className })}
              {...props}
            />
          );
        case "md":
          return (
            <H5
              className={headingStyle({ size, class: className })}
              {...props}
            />
          );
        case "sm":
        case "xs":
          return (
            <H6
              className={headingStyle({ size, class: className })}
              {...props}
            />
          );
        default:
          return (
            <H4
              className={headingStyle({ size, class: className })}
              {...props}
            />
          );
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [size]
  );

  if (AsComp) {
    return (
      <AsComp className={headingStyle({ size, class: className })} {...props} />
    );
  }

  return <MappedHeading />;
};

Heading.displayName = "Heading";

export { Heading };
