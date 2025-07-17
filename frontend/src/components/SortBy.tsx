import {
  Dropdown,
  makeStyles,
  Option,
  shorthands,
  useId,
  DropdownProps,
} from "@fluentui/react-components";

const useStyles = makeStyles({
  root: {
    // Stack the label above the field with a gap
    display: "grid",
    gridTemplateRows: "repeat(1fr)",
    justifyItems: "start",
    ...shorthands.gap("2px"),
    maxWidth: "400px",
  },
});

const SortBy = (props: Partial<DropdownProps>) => {
  const dropdownId = useId("dropdown-default");
  const options = [
    "De menor a mayor precio",
    "De mayor a menor precio",
    "Más recientes",
  ];
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <Dropdown
        aria-labelledby={dropdownId}
        placeholder="Ordenar por"
        {...props}
      >
        {options.map((option) => (
          <Option key={option} disabled={option === "Ferret"}>
            {option}
          </Option>
        ))}
      </Dropdown>
    </div>
  );
};

export default SortBy;