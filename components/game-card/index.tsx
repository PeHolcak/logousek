import React, { useContext } from 'react'
import { useRouter } from 'next/router'

import ItemList from '@components/game-card/item-list';
import ModalContext from '@contexts/modal-context';
import { GameType } from '@constants/activity-confs/activity-conf';
import routes from "@constants/routes"
import TwoSideCard from '@components/two-side-card';

type GameCardProps = { gameInfo: GameType }

const GameCard: React.FC<GameCardProps> = ({ gameInfo }) => {
  const router = useRouter()
  const modalContext = useContext(ModalContext)

  const redirectToActivity = (difficultyId?: number) => {
    const addictionQuery = difficultyId ? { difficulty: difficultyId } : {}
    modalContext?.closeModal()
    router.push({
      pathname: routes.activity,
      query: { activityName: gameInfo.name, ...addictionQuery }
    })
  }

  const showDifficultyModal = () => {
    if (Array.isArray(gameInfo.difficulty)) {
      if (gameInfo.difficulty.length > 1) {
        modalContext?.showModal({
          content: <ItemList items={gameInfo.difficulty} onItemClick={redirectToActivity} />,
          header: "Vyberte obtížnost",
          autoWidth: true
        })
      } else if (gameInfo.difficulty.length === 1) {
        redirectToActivity(gameInfo.difficulty[0].id)
      } else {
        redirectToActivity()
      }
    } else { redirectToActivity() }
  }

  return (
    <TwoSideCard
      name={gameInfo.name}
      title={gameInfo.title}
      image={gameInfo.image}
      description={gameInfo.description}
      onMainSideClick={showDifficultyModal}
      className="gameCard"
    />
  )
}

export default GameCard