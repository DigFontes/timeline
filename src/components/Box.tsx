import React from "react";

interface StyleSheet {
  fontFamily: string;
}

interface BoxProps {
  tag: any;
  children: React.ReactNode;
  styleSheet: StyleSheet;
}
export default function Box({ styleSheet, children, tag }: BoxProps) {
  const Tag = tag || "div";
  return <Tag style={styleSheet}>{children}</Tag>;
}
