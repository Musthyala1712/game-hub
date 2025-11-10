import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { usePlatforms, type Platform } from "@/hooks/usePlatforms";
import { useColorMode } from "../ui/color-mode";

const ITEM_HEIGHT = 40;
const ITEM_PADDING_TOP = 8;

interface PlatFormSelectorProps {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

export default function PlatFormSelector(props: PlatFormSelectorProps) {
  const { colorMode } = useColorMode();
  const { onSelectPlatform, selectedPlatform } = props;
  const { data } = usePlatforms();

  return (
    <div>
      <FormControl sx={{ m: 1, width: 250 }}>
        <InputLabel
          id="demo-multiple-name-label"
          style={{ color: colorMode === "dark" ? "#fff" : "#000" }}
        >
          Platforms
        </InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={selectedPlatform ? [selectedPlatform.name] : []}
          onChange={() => {}}
          input={<OutlinedInput label="Platforms" />}
          MenuProps={{
            slotProps: {
              paper: {
                sx: {
                  backgroundColor: colorMode === "dark" ? "#39393c" : "#fff",
                  color: colorMode === "dark" ? "#fff" : "#000",
                  maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                  width: 250,
                },
              },
            },
          }}
          sx={{
            backgroundColor: colorMode === "dark" ? "#39393c" : "#fff",
            color: colorMode === "dark" ? "#fff" : "#000",
          }}
        >
          {data.map((platform) => (
            <MenuItem
              key={platform.id}
              value={platform.name}
              onClick={() => onSelectPlatform(platform)}
            >
              {platform.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
