import { Button } from "@/components/ui/button";

import * as Icon from "react-feather";

const SidebarButton = ({ icon, title, onClick }) => {
  const IconComponent = Icon[icon];
  return (
    <Button
      className="flex items-center justify-start w-full"
      onClick={onClick}
    >
      <IconComponent size={20} />
      <span className="ml-2">{title}</span>
    </Button>
  );
};

export default SidebarButton;
