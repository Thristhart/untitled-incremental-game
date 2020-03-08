import React from "react";
import { GetProps } from "react-redux";
import { Button } from "./Button";

interface ButtonWithDisabledReasonProps extends GetProps<typeof Button> {
  disabledReason?: string;
}
export const ButtonWithDisabledReason = (
  props: ButtonWithDisabledReasonProps
) => {
  return (
    <div style={{ flexDirection: "column", display: "inline-flex" }}>
      <Button {...props} />
      {props.disabled && props.disabledReason && (
        <span style={{ alignSelf: "center" }}>{props.disabledReason}</span>
      )}
    </div>
  );
};
