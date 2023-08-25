import {
  Tab,
  TabGroup,
  TabList,
  Card,
  TabPanels,
  TabPanel,
} from "@tremor/react";
import { UserIcon, UserGroupIcon } from "@heroicons/react/solid";
import { useState } from "react";

function TabIndex() {
  const [selectState, setSelectState] = useState(1);
  console.log(selectState);
  return (
    <>
      <TabGroup>
        <TabList className="mb-5" defaultValue={selectState}>
          <Tab value={1} icon={UserGroupIcon}>
            Texto uno
          </Tab>
          <Tab value={2} icon={UserIcon}>
            Texto dos
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <div className="h-28 bg-emerald-300"></div>
          </TabPanel>
          <TabPanel>
            <div className="h-28 bg-blue-700"></div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </>
  );
}

export default TabIndex;
