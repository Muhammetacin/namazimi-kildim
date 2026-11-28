import { StyleSheet } from 'react-native';
import RootLayout from '../app/_layout';
import { Screen } from '../src/components/Screen';
import { tokens } from '../src/theme/tokens';

test('exposes the three approved primary tab destinations', () => {
  const layout = RootLayout();
  const tabs = layout.props.children;
  const names = tabs.slice(0, 3).map((tab: { props: { name: string } }) => {
    return tab.props.name;
  });
  expect(names).toEqual(['index', 'vakitler', 'takip']);
  expect(tabs[3].props.options.href).toBeNull();
  expect(tabs[4].props.options.href).toBeNull();
});

test('uses a scrolling screen with a bounded flexible content width', () => {
  const screen = Screen({ children: null });
  const scroll = screen.props.children;
  const scrollStyle = StyleSheet.flatten(scroll.props.contentContainerStyle);
  expect(scrollStyle.flexGrow).toBe(1);
  const content = scroll.props.children;
  expect(StyleSheet.flatten(content.props.style)).toMatchObject({
    width: '100%',
    maxWidth: tokens.contentWidth,
  });
});

test('tabs use the approved clock, calendar and grid icons in the tab color', () => {
  const layout = RootLayout();
  const tabs = layout.props.children;
  const icons = tabs
    .slice(0, 3)
    .map(
      (tab: {
        props: { options: { tabBarIcon: (p: { color: string }) => unknown } };
      }) => tab.props.options.tabBarIcon({ color: '#123456' }),
    );
  expect(
    icons.map((icon: { props: { name: string } }) => icon.props.name),
  ).toEqual(['clock', 'calendar', 'grid']);
  for (const icon of icons) {
    expect((icon as { props: { color: string } }).props.color).toBe('#123456');
  }
});

test('inactive tabs use the muted color and active tabs emerald', () => {
  const options = RootLayout().props.screenOptions;
  expect(options.tabBarActiveTintColor).toBe(tokens.colors.primary);
  expect(options.tabBarInactiveTintColor).toBe(tokens.colors.muted);
});
