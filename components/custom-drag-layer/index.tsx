import { CSSProperties } from 'react'
import { useDragLayer } from 'react-dnd'
import DragCard from '../drag-card'
import { XYCoord } from 'react-dnd/dist/types'

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
  if ((initialOffset === null) || (currentOffset === null)) {
    return {
      display: 'none'
    }
  }
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
  function renderItem() {
    switch (itemType) {
      case 'image':
        return (
          <DragCard reference={item.reference}
            selected={false}>
            {item.img}
          </DragCard>
        )
      default:
        return null
    }
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
