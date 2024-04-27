import { View } from "react-native";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import { createStyles } from "@theme";
// @ui
import {
  Divider,
  Text,
  Select,
  Switch,
  VStack,
  Tag,
  Textarea,
  Radio,
  Accordion,
  Avatar,
  Badge,
  Breadcrumb,
  Button,
  Checkbox,
  Headline,
  IconButton,
  Input,
  Spinner,
} from "@ui";

const Home = () => {
  const { t } = useTranslation();
  const [value, setValue] = useState(true);
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <View style={{ gap: 10, paddingHorizontal: 10 }}>
        {/* <Accordion items={[{ content: "test", title: "test" }]} />
        <Avatar initials="DK" />
        <Badge leftIcon="mail" >Online</Badge>
        <Breadcrumb
          items={[
            {
              label: "test",
            },
            {
              label: "test-1",
            },
          ]}
        />
        <Button variant="light" leftIcon="filter">
          Click me
        </Button>
        <Divider text="divide it" />
        <Checkbox checked={true} label="test" />
        <Headline>Title</Headline>
        <IconButton name="mail" variant="light" />
        <Input label="Name" leftIcon="user" variant="filled" />
        <Radio checked label="test" />
        <Select
          label="names"
          sublabel="Be careful when"
          items={[
            {
              label: "Test",
              value: "test",
            },
            {
              label: "Test",
              value: "test-2",
            },
            {
              label: "Test",
              value: "test-3",
            },
          ]}
        /> */}
        <Spinner />
        <Switch value={value} onChange={() => setValue(!value)} />
        <Tag leftIcon="mail" label="Selam" />
        <Text>Selam</Text>
        <Textarea label="Emamil" />
      </View>
    </View>
  );
};

const styles = createStyles((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.semantic.bg.page,
  },
}));

export default Home;
