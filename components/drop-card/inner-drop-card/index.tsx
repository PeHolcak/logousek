import React, { useContext } from 'react'
import { useDrop } from 'react-dnd'

import ActivityCard from '@components/activity-card'
import DndContext from '@contexts/dnd-context'
import { CardType } from '@hooks/use-get-cards'

import CustomDragLayer from '../../custom-drag-layer'
import * as S from './styled'

type InnerDropCardProps = {
  onDrop: (item: CardType) => void
  children: React.ReactNode
  customRadius?: string
}

const InnerDropCard: React.FC<InnerDropCardProps> = ({
  onDrop,
  children,
  customRadius = '0px',
}) => {
  const dndContext = useContext(DndContext)

  const [, drop] = useDrop(() => ({
    accept: ['image'],
    drop: (item: CardType) => {
      onDrop(item)
    },
  }))

  return (
    <S.InnerDropCardWrapper ref={drop} className="dropCard">
      <ActivityCard
        color={'transparent'}
        customRadius={customRadius}
        customAspectRatio={dndContext?.aspectRatio}
        cursor="default"
        showBorder={false}
        selected={false}
      >
        <CustomDragLayer />
        {children}
      </ActivityCard>
    </S.InnerDropCardWrapper>
  )
}

export default InnerDropCard
