import { Card, Text, Metric, Flex, ProgressBar } from "@tremor/react";

const CardBase = () => {
  return (
    <Card className="max-w-sm">
      <Text>Sales</Text>
      <Metric>$ 17.2959</Metric>
      <Flex>
        <Text>32% of annual target</Text>
        <Text>$ 425,000</Text>
      </Flex>
      <ProgressBar value={52} className="mt-4" />
    </Card>
  );
};

export default CardBase;
