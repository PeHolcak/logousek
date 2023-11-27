import React, {
  useContext,
  CSSProperties
} from 'react'
import SerialityContext from '@contexts/seriality-context'
import { useDragLayer } from 'react-dnd'
import { XYCoord } from 'react-dnd/dist/types'
import ActivityCard from '@components/activity-card'

const layerStyles: CSSProperties = {
  position: 'fixed',
  pointerEvents: 'none',
  zIndex: 100,
  left: 0,
  top: 0,
  width: '100%',
  height: '100%'
}
function getItemStyles(initialOffset: XYCoord | null, currentOffset: XYCoord | null) {
  if ((initialOffset == null) || (currentOffset == null)) {
    return {
      display: 'none'
    }
  }
  initialOffset.y
  const { x, y } = currentOffset
  const transform = `translate(${x}px, ${y}px)`
  return {
    transform,
    WebkitTransform: transform
  }
}

const CustomDragLayer: React.FC = () => {
  const { itemType, isDragging, item, initialOffset, currentOffset } =
    useDragLayer((monitor) => ({
      item: monitor.getItem(),
      itemType: monitor.getItemType(),
      initialOffset: monitor.getInitialSourceClientOffset(),
      currentOffset: monitor.getSourceClientOffset(),
      isDragging: monitor.isDragging()
    }))

  const serialityContext = useContext(SerialityContext);
  function renderItem() {
    return <ActivityCard>{serialityContext?.cards.find(card => card.keyImage === item.id)?.img}</ActivityCard>
  }
  if (!isDragging) {
    return null
  }
  return (
    <div style={layerStyles}>
      <div
        style={getItemStyles(initialOffset, currentOffset)}
      >
        {renderItem()}
      </div>
    </div>
  )
}

export default CustomDragLayer
