import { View, Text } from 'react-native'
import { StyleSheet } from 'react-native-unistyles'

export default function FocusScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>CURRENT TASK</Text>
      <Text style={styles.title}>No tasks yet</Text>
      <Text style={styles.hint}>Add tasks in the Plan tab</Text>
    </View>
  )
}

const styles = StyleSheet.create((theme) => ({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.background,
    paddingHorizontal: theme.spacing(3),
  },
  label: {
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 2,
    color: theme.colors.textTertiary,
    marginBottom: theme.spacing(1),
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: theme.colors.text,
    textAlign: 'center',
  },
  hint: {
    fontSize: 15,
    color: theme.colors.textSecondary,
    marginTop: theme.spacing(2),
  },
}))
