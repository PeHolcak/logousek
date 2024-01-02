import React from 'react'
import { Svg, ClipPathElement } from './styled'
import { DEFAULT_VIEWBOX } from '../../../../constants/svg-conf'

export default function Sun({ changeConfig = {}, customViewBox }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={customViewBox || DEFAULT_VIEWBOX}
      rotate={changeConfig.rotate}
    >
      <defs>
        <clipPath id="clip-path">
          <circle fill="none" cx="384.38" cy="454.56" r="298.61" />
        </clipPath>
      </defs>
      <g id="Sluníčko">
        {changeConfig.hideFirstFlash || (
          <>
            <circle fill="#e5c648" cx="522.82" cy="537.96" r="18.41" />
            <rect
              fill="#e5c648"
              x="738.68"
              y="685.79"
              width="46.53"
              height="182.6"
              rx="13.65"
              transform="translate(-326.31 766.38) rotate(-45)"
            />
          </>
        )}
        {changeConfig.hideSecondFlash || (
          <>
            <circle fill="#e5c648" cx="509.81" cy="543.35" r="18.41" />
            <rect
              fill="#e5c648"
              x="486.54"
              y="790.23"
              width="46.53"
              height="182.6"
              rx="13.65"
            />
          </>
        )}
        {changeConfig.hideThirdFlash || (
          <>
            <circle fill="#e5c648" cx="496.79" cy="537.96" r="18.41" />
            <rect
              fill="#e5c648"
              x="166.36"
              y="753.82"
              width="182.6"
              height="46.53"
              rx="13.65"
              transform="translate(-474.01 409.8) rotate(-45)"
            />
          </>
        )}
        {changeConfig.hideFourthFlash || (
          <>
            <circle fill="#e5c648" cx="491.4" cy="524.94" r="18.41" />
            <rect
              fill="#e5c648"
              x="61.92"
              y="501.67"
              width="182.6"
              height="46.53"
              rx="13.65"
            />
          </>
        )}
        {changeConfig.hideFithFlash || (
          <>
            <circle fill="#e5c648" cx="496.79" cy="511.93" r="18.41" />
            <rect
              fill="#e5c648"
              x="234.4"
              y="181.5"
              width="46.53"
              height="182.6"
              rx="13.65"
              transform="translate(-117.43 262.1) rotate(-45)"
            />
          </>
        )}
        {changeConfig.hideSixthFlash || (
          <>
            <circle fill="#e5c648" cx="509.81" cy="506.53" r="18.41" />
            <rect
              fill="#e5c648"
              x="486.54"
              y="77.06"
              width="46.53"
              height="182.6"
              rx="13.65"
            />
          </>
        )}
        {changeConfig.hideSeventhFlash || (
          <>
            <circle fill="#e5c648" cx="522.82" cy="511.93" r="18.41" />
            <rect
              fill="#e5c648"
              x="670.65"
              y="249.53"
              width="182.6"
              height="46.53"
              rx="13.65"
              transform="translate(30.27 618.68) rotate(-45)"
            />
          </>
        )}
        {changeConfig.hideEightFlash || (
          <>
            <circle fill="#e5c648" cx="528.21" cy="524.94" r="18.41" />
            <rect
              fill="#e5c648"
              x="775.09"
              y="501.67"
              width="182.6"
              height="46.53"
              rx="13.65"
            />
          </>
        )}
        <circle fill="#e5c648" cx="509.81" cy="524.94" r="220.06" />
        <ClipPathElement>
          <circle fill="#f4e397" cx="522.82" cy="537.96" r="18.41" />
          {changeConfig.hideFirstFlash || (
            <rect
              fill="#f4e397"
              x="738.68"
              y="685.79"
              width="46.53"
              height="182.6"
              rx="13.65"
              transform="translate(-326.31 766.38) rotate(-45)"
            />
          )}
          <circle fill="#f4e397" cx="509.81" cy="543.35" r="18.41" />
          {changeConfig.hideSecondFlash || (
            <rect
              fill="#f4e397"
              x="486.54"
              y="790.23"
              width="46.53"
              height="182.6"
              rx="13.65"
            />
          )}
          <circle fill="#f4e397" cx="496.79" cy="537.96" r="18.41" />
          {changeConfig.hideThirdFlash || (
            <rect
              fill="#f4e397"
              x="166.36"
              y="753.82"
              width="182.6"
              height="46.53"
              rx="13.65"
              transform="translate(-474.01 409.8) rotate(-45)"
            />
          )}
          <circle fill="#f4e397" cx="491.4" cy="524.94" r="18.41" />
          {changeConfig.hideFourthFlash || (
            <rect
              fill="#f4e397"
              x="61.92"
              y="501.67"
              width="182.6"
              height="46.53"
              rx="13.65"
            />
          )}
          <circle fill="#f4e397" cx="496.79" cy="511.93" r="18.41" />
          {changeConfig.hideFithFlash || (
            <rect
              fill="#f4e397"
              x="234.4"
              y="181.5"
              width="46.53"
              height="182.6"
              rx="13.65"
              transform="translate(-117.43 262.1) rotate(-45)"
            />
          )}
          <circle fill="#f4e397" cx="509.81" cy="506.53" r="18.41" />
          {changeConfig.hideSixthFlash || (
            <rect
              fill="#f4e397"
              x="486.54"
              y="77.06"
              width="46.53"
              height="182.6"
              rx="13.65"
            />
          )}
          <circle fill="#f4e397" cx="522.82" cy="511.93" r="18.41" />
          {changeConfig.hideSeventhFlash || (
            <rect
              fill="#f4e397"
              x="670.65"
              y="249.53"
              width="182.6"
              height="46.53"
              rx="13.65"
              transform="translate(30.27 618.68) rotate(-45)"
            />
          )}
          <circle fill="#f4e397" cx="528.21" cy="524.94" r="18.41" />
          {changeConfig.hideEightFlash || (
            <rect
              fill="#f4e397"
              x="775.09"
              y="501.67"
              width="182.6"
              height="46.53"
              rx="13.65"
            />
          )}
          <circle fill="#f4e397" cx="509.81" cy="524.94" r="220.06" />
        </ClipPathElement>
      </g>
    </Svg>
  )
}
