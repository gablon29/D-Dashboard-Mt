import { Tab, TabGroup, TabList, Card } from "@tremor/react";
import { UserIcon, UserGroupIcon } from "@heroicons/react/solid";
import { useState } from "react";

function TabIndex() {
  const [selectState, setSelectState] = useState(1);
  const handleSelect = (evento) => {
    setSelectState(evento.target.value);
    console.log(evento.target.value);
  };

  return (
    <>
      <TabGroup>
        <TabList className="mb-5" defaultValue={selectState}>
          <Tab
            value={1}
            icon={UserGroupIcon}
            onClick={(value) => handleSelect(value)}
          >
            Texto uno
          </Tab>
          <Tab
            value={2}
            icon={UserIcon}
            onClick={(value) => handleSelect(value)}
          >
            Texto dos
          </Tab>
        </TabList>
      </TabGroup>
      {selectState === 1 ? (
        <Card>
          <div className="h-28 bg-emerald-300"></div>
        </Card>
      ) : (
        <Card>
          <div className="h-28 bg-blue-700"></div>
        </Card>
      )}
    </>
  );
}

export default TabIndex;
