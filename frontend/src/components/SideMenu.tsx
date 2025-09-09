import { DrawerProps } from "@fluentui/react-components";
import * as React from "react";
import {
  AppItem,
  Hamburger,
  NavCategory,
  NavCategoryItem,
  NavDivider,
  NavDrawer,
  NavDrawerBody,
  NavDrawerHeader,
  NavItem,
  NavSectionHeader,
} from "@fluentui/react-nav-preview";

import {
  Tooltip,
  makeStyles,
  tokens,
  useRestoreFocusTarget,
} from "@fluentui/react-components";
import {
  Board20Filled,
  Board20Regular,
  BoxMultiple20Filled,
  BoxMultiple20Regular,
  DocumentBulletListMultiple20Filled,
  DocumentBulletListMultiple20Regular,
  MegaphoneLoud20Filled,
  MegaphoneLoud20Regular,
  PeopleStar20Filled,
  PeopleStar20Regular,
  PersonLightbulb20Filled,
  PersonLightbulb20Regular,
  PersonSearch20Filled,
  PersonSearch20Regular,
  PreviewLink20Filled,
  PreviewLink20Regular,
  bundleIcon,
  PersonCircle32Regular,
} from "@fluentui/react-icons";

const useStyles = makeStyles({
  root: {
    overflow: "hidden",
    display: "flex",
    height: "600px",
  },
  nav: {
    minWidth: "200px",
  },
  content: {
    flex: "1",
    padding: "16px",
    display: "grid",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  field: {
    display: "flex",
    marginTop: "4px",
    marginLeft: "8px",
    flexDirection: "column",
    gridRowGap: tokens.spacingVerticalS,
  },
});

/*const Person = bundleIcon(Person20Filled, Person20Regular);*/
const Dashboard = bundleIcon(Board20Filled, Board20Regular);
const Announcements = bundleIcon(MegaphoneLoud20Filled, MegaphoneLoud20Regular);
const EmployeeSpotlight = bundleIcon(
  PersonLightbulb20Filled,
  PersonLightbulb20Regular
);
const Search = bundleIcon(PersonSearch20Filled, PersonSearch20Regular);
const PerformanceReviews = bundleIcon(
  PreviewLink20Filled,
  PreviewLink20Regular
);
const TrainingPrograms = bundleIcon(BoxMultiple20Filled, BoxMultiple20Regular);
const CareerDevelopment = bundleIcon(PeopleStar20Filled, PeopleStar20Regular);
const Reports = bundleIcon(
  DocumentBulletListMultiple20Filled,
  DocumentBulletListMultiple20Regular
);

type DrawerType = Required<DrawerProps>["type"];

const SideMenu = () => {
  const styles = useStyles();

  const [isOpen, setIsOpen] = React.useState(true);
  const [enabledLinks] = React.useState(true);
  const [type] = React.useState<DrawerType>("inline");
  const [isMultiple] = React.useState(true);

  // Tabster prop used to restore focus to the navigation trigger for overlay nav drawers
  const restoreFocusTargetAttributes = useRestoreFocusTarget();

  const linkDestination = enabledLinks ? "https://www.bing.com" : "";

  return (
    <div className={styles.root}>
      <NavDrawer
        defaultSelectedValue="2"
        defaultSelectedCategoryValue=""
        open={isOpen}
        type={type}
        multiple={isMultiple}
        className={styles.nav}
      >
        <NavDrawerHeader>
          <Tooltip content="Close Navigation" relationship="label">
            <Hamburger onClick={() => setIsOpen(!isOpen)} />
          </Tooltip>
        </NavDrawerHeader>

        <NavDrawerBody>
          <AppItem
            icon={<PersonCircle32Regular />}
            as="a"
            href={"/iniciar-sesion"}
          >
            Iniciar Sesión
          </AppItem>
          <NavItem href={"/"} icon={<Dashboard />} value="1">
            Dashboard
          </NavItem>
          <NavItem href={"/catalogo"} icon={<Announcements />} value="2">
            Catálogo
          </NavItem>
          <NavItem
            href={"/quienes-somos"}
            icon={<EmployeeSpotlight />}
            value="3"
          >
            Quienes Somos
          </NavItem>
          <NavItem icon={<Search />} href={"/consultas"} value="4">
            Consultas
          </NavItem>
          <NavItem
            icon={<PerformanceReviews />}
            href={"/terminos-de-uso"}
            value="5"
          >
            Términos de Uso
          </NavItem>

          <NavSectionHeader>Compras</NavSectionHeader>
          <NavItem 
            icon={<TrainingPrograms />} 
            href={"/carrito"}
            value="15">
            Carrito
          </NavItem>
          <NavCategory value="16">
            <NavCategoryItem icon={<CareerDevelopment />}>
              Mis compras
            </NavCategoryItem>
          </NavCategory>
          <NavDivider />
          <NavItem href={linkDestination} icon={<Reports />} value="20">
            Reports
          </NavItem>
        </NavDrawerBody>
      </NavDrawer>
      <div className={styles.content}>
        <Tooltip content="Toggle navigation pane" relationship="label">
          <Hamburger
            onClick={() => setIsOpen(!isOpen)}
            {...restoreFocusTargetAttributes}
          />
        </Tooltip>
        </div>
    </div>
  );
};

export default SideMenu;