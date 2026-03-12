import { View, Text } from 'react-native'
import { StyleSheet } from 'react-native-unistyles'

export default function AddTaskModal() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Task</Text>
    </View>
  )
}

const styles = StyleSheet.create((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.surface,
    padding: theme.spacing(3),
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: theme.colors.text,
  },
}))
