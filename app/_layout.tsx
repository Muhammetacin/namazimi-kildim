import { Tabs } from 'expo-router';
import { Icon } from '../src/components/Icon';
import { tokens } from '../src/theme/tokens';

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: tokens.colors.primary,
        tabBarInactiveTintColor: tokens.colors.muted,
        tabBarStyle: { backgroundColor: tokens.colors.background },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Saat',
          tabBarIcon: ({ color }) => <Icon name="clock" color={color} />,
        }}
      />
      <Tabs.Screen
        name="vakitler"
        options={{
          title: 'Vakitler',
          tabBarIcon: ({ color }) => <Icon name="calendar" color={color} />,
        }}
      />
      <Tabs.Screen
        name="takip"
        options={{
          title: 'Takip',
          tabBarIcon: ({ color }) => <Icon name="grid" color={color} />,
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
