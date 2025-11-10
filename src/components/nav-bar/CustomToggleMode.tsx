import { Switch, SwitchLabel } from "@chakra-ui/react";
import { useColorMode } from "../ui/color-mode";

export const CustomToggleMode = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <Switch.Root>
      <Switch.HiddenInput onClick={toggleColorMode} />
      <Switch.Control />
      <SwitchLabel whiteSpace="nowrap" style={{ fontSize: "10px" }}>
        Dark Mode
      </SwitchLabel>
    </Switch.Root>
  );
};
