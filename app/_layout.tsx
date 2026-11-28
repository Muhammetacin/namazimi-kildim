import { Tabs } from 'expo-router';
import { Icon } from '../src/components/Icon';
import { tokens } from '../src/theme/tokens';

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: tokens.colors.primary,
        tabBarInactiveTintColor: tokens.colors.text,
        tabBarStyle: { backgroundColor: tokens.colors.background },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Saat',
          tabBarIcon: () => <Icon name="clock" />,
        }}
      />
      <Tabs.Screen
        name="vakitler"
        options={{
          title: 'Vakitler',
          tabBarIcon: () => <Icon name="list" />,
        }}
      />
      <Tabs.Screen
        name="takip"
        options={{
          title: 'Takip',
          tabBarIcon: () => <Icon name="check" />,
        }}
      />
      <Tabs.Screen
        name="onboarding"
        options={{ href: null, tabBarStyle: { display: 'none' } }}
      />
      <Tabs.Screen
        name="ayarlar"
        options={{ href: null, tabBarStyle: { display: 'none' } }}
      />
    </Tabs>
  );
}
