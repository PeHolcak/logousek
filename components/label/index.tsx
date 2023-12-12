import * as S from './styled'

export type LabelProps = { children?: string, content?: string, color: string }

const Label: React.FC<LabelProps> = ({ children, content, color }) => {
  return (
    <S.LabelWrapper background={color}>
      <S.LabelText>
        {children ?? content}
      </S.LabelText>
    </S.LabelWrapper>
  )
}

export default Label
