import { useMediaQuery } from "@uidotdev/usehooks";
import Side from "./Side";

const Sidebar = () => {
  const isDesktop = useMediaQuery("(min-width: 630px)");

  if (isDesktop) return <Side />;
  else return null;
};
