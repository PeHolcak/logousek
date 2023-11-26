import { useContext, useCallback, useMemo } from 'react'
import { ThemeContext } from 'styled-components'
import { useDrag } from 'react-dnd'

import DndContext from '@contexts/dnd-context'
import { CardType } from '@hooks/use-get-cards'

import ActivityCard from '@components/activity-card'

interface DragCardProps {
  content?: any
  children?: any
  customRadius?: string
  item?: CardType
  reference?: React.ReactNode
  onClick?: (imageKey: string) => void
  selected?: boolean
  isDragged?: boolean
}

const DragCard: React.FC<DragCardProps> = ({
  content,
  children,
  customRadius,
  item,
  reference,
  onClick,
  selected,
  isDragged
}) => {
  const themeContext = useContext(ThemeContext)
  const dndContext = useContext(DndContext)
  const [collected, drag] = useDrag(() => ({
    type: 'image',
    item,
    collect: (monitor) => {
      return {
        isDragging: monitor.isDragging(),
      }
    },
  }))

  const onActivityCardClickHandler = useCallback(() => {
    if (item?.keyImage && onClick) {
      onClick(item?.keyImage)
    }
  }, [item?.keyImage, onClick])

  const isSelected = useMemo(() => !isDragged && selected, [isDragged, selected])

  return collected.isDragging ? (
    <ActivityCard
      customAspectRatio={dndContext?.aspectRatio}
      showBorder={isSelected}
      color={themeContext?.colors?.lightGrey}
      selected={isSelected}
    />
  ) : (
    <div ref={drag}>
      <ActivityCard
        customAspectRatio={dndContext?.aspectRatio}
        customRadius={customRadius}
        showBorder={isSelected}
        reference={reference}
        onClick={onActivityCardClickHandler}
        selected={isSelected}
      >
        {content || children}
      </ActivityCard>
    </div>
  )
}

export default DragCard
