import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import type { ComponentProps } from 'react'
import type { StyleProp, ViewStyle } from 'react-native'

const SF_TO_MATERIAL: Record<string, ComponentProps<typeof MaterialIcons>['name']> = {
  'scope': 'center-focus-strong',
  'list.bullet': 'format-list-bulleted',
  'chart.bar.fill': 'bar-chart',
  'plus': 'add',
}

interface IconSymbolProps {
  name: string
  size?: number
  color: string
  style?: StyleProp<ViewStyle>
}

export function IconSymbol({ name, size = 24, color, style }: IconSymbolProps) {
  const materialName = SF_TO_MATERIAL[name] ?? 'circle'
  return <MaterialIcons name={materialName} size={size} color={color} style={style} />
}
