import React from "react";
import * as S from "./styled";

type SwitchProps = {
  enabledIcon: React.ReactElement | string;
  disabledIcon: React.ReactElement | string;
  onChange: (value: boolean) => void;
  value: boolean;
};

const Switch: React.FC<SwitchProps> = ({
  enabledIcon,
  disabledIcon,
  onChange,
  value,
}) => {
  const _onChangeHangler = () => {
    onChange(!value);
  };
  return (
    <S.SwitchWrapper onMouseDown={_onChangeHangler}>
      <S.SwitchPointer enabled={value}>
        {value ? enabledIcon : disabledIcon}
      </S.SwitchPointer>
      <S.SwitchBackground />
    </S.SwitchWrapper>
  );
};

export default Switch;
