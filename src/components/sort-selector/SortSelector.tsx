import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useColorMode } from "../ui/color-mode";

const ITEM_HEIGHT = 40;
const ITEM_PADDING_TOP = 8;

interface SortSelectorProps {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder?: string;
}
export const SortSelector = (props: SortSelectorProps) => {
  const { onSelectSortOrder, sortOrder } = props;
  const { colorMode } = useColorMode();
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];
  const customOrder = sortOrders.find((order) => order.value === sortOrder);
  return (
    <div>
      <FormControl sx={{ m: 1, width: 250 }}>
        <InputLabel
          id="demo-multiple-name-label"
          style={{ color: colorMode === "dark" ? "#fff" : "#000" }}
        >
          Order by : {customOrder?.label || "Relevance"}
        </InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={sortOrder ? [sortOrder] : [""]}
          onChange={() => {}}
          input={<OutlinedInput label="Order by : Relevance" />}
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
          {sortOrders.map((platform) => (
            <MenuItem
              key={platform.value}
              value={platform.value}
              onClick={() => onSelectSortOrder(platform.value)}
            >
              {platform.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
