import { Tab, TabGroup, TabList } from "@tremor/react";
import { UserGroupIcon, UserIcon } from "@heroicons/react/solid";

function TabIndex() {
  return (
    <TabGroup>
      <TabList>
        <Tab value={1} icon={UserGroupIcon}>
          Texto uno
        </Tab>
        <Tab value={2} icon={UserIcon}>
          Texto dos
        </Tab>
      </TabList>
    </TabGroup>
  );
}

export default TabIndex;
