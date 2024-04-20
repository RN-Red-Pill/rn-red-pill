import { Text, View } from 'react-native'
import React from 'react'
import { useTranslation } from 'react-i18next';

import { createStyles } from '@src/theme';
// @ui
import { Button, Headline, IconButton, Input, Label, Title } from '@src/components/ui'

const Home = () => {
    const { t } = useTranslation();

    return (
        <View style={styles.container}>
        <Text>Home</Text>
        <View style={{ gap: 10, paddingHorizontal: 10 }}>
            <Headline>Open up App.tsx to start working on your app!</Headline>
            <Title size="xl">{t("Songs")}</Title>
            <Label size="lg">{t("Songs")}</Label>
            <Text>{t("Songs")}</Text>
            <Input
                leftIcon="mail"
                rightIcon="question"
                variant="outlined"
                label="Email"
                sublabel="dsdf"
            />
            <Button size="md" onPress={() => {}} leftIcon="user" rightIcon="user">
                Selam
            </Button>
            <IconButton variant="light" name="user" onPress={() => {}} />
            </View>
        </View>
    )
}

const styles = createStyles((theme) => ({
    container: {
      backgroundColor: theme.colors.gray[2],
      flex: 1,
    },
}));

export default Home


  