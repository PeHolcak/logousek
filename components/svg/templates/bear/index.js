import * as React from 'react'
import { DEFAULT_VIEWBOX } from '../../../../constants/svg-conf'

const Bear = ({ changeConfig = {}, customViewBox }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox={customViewBox || DEFAULT_VIEWBOX}
  >
    <defs>
      <style>
        {
          '.cls-5-bear{fill:none;stroke:#282828;stroke-linecap:round;stroke-miterlimit:10;stroke-width:2px}'
        }
      </style>
    </defs>
    <g id="Medv\xEDdek">
      <g id="Torso_medved" data-name="Torso medved">
        <path
          id="Obrys_torsa_medved"
          data-name="Obrys torsa medved"
          fill="#7a5415"
          d="M663.08 564.16q0 6-.29 11.86c-4.86 98-69.47 175.67-148.46 175.67-79.66 0-144.7-79-148.57-178.17a2.26 2.26 0 0 0 0-.26V572a238.734 238.734 0 0 1 .4-23.78 232.43 232.43 0 0 1 3.9-29.69 208.69 208.69 0 0 1 29.09-73c.85-1.3 1.71-2.58 2.58-3.86.2-.32.42-.62.63-.94.73-.15 1.45-.3 2.17-.43l1.62-.31c38.83-7.44 68.73-4.35 76.19 10.27 4.28 8.38.57 19.38-9.29 31.38a157.64 157.64 0 0 0 78.83 1c-10.48-12.38-14.51-23.77-10.12-32.38 7.81-15.31 40.22-18 81.74-9.17l3.39.75a1.15 1.15 0 0 0 .14-.17 2.2 2.2 0 0 1 .17.25c15.3 22.42 26.46 49.46 32 79.22a233 233 0 0 1 3.46 28.86c.28 4.69.42 9.41.42 14.16Z"
        />
        <ellipse
          id="Bricho_medved"
          data-name="Bricho medved"
          fill="#926f3e"
          cx={514.35}
          cy={600.1}
          rx={91.34}
          ry={102.35}
        />
      </g>
      <g id="Leva_noha_medved" data-name="Leva noha medved">
        <path
          fill="#7a5415"
          d="M365.58 681.15s-9.53-38 49.47-90.3c5.33 64.23 35.24 110.36 73.86 111.61 0 0 .9 9.25-76.7 102.8l-73.52-114.12Z"
        />
        <g id="Leve_chodidlo_medved" data-name="Leve chodidlo medved">
          <ellipse
            fill="#604115"
            cx={375.68}
            cy={732.39}
            rx={66.33}
            ry={85.87}
            transform="rotate(-13.29 375.543 732.24)"
          />
          <ellipse
            fill="#7a5415"
            cx={371.16}
            cy={739.49}
            rx={66.33}
            ry={85.87}
            transform="rotate(-13.29 371.063 739.332)"
          />
          {changeConfig.hideLeftFoot || (
            <g id="Chodidla_medved" data-name="Chodidla medved">
              <ellipse
                id="Chodidlo"
                fill="#4e3615"
                cx={372.6}
                cy={757.93}
                rx={31.15}
                ry={39.07}
                transform="rotate(-6.62 372.775 758.176)"
              />
              <ellipse
                id="Prst_3_medved"
                data-name="Prst 3 medved"
                fill="#4e3615"
                cx={397.03}
                cy={701.03}
                rx={10.63}
                ry={11.4}
                transform="rotate(-6.64 397.262 701.326)"
              />
              <ellipse
                id="Prst_2_medved"
                data-name="Prst 2 medved"
                fill="#4e3615"
                cx={366.6}
                cy={689.85}
                rx={10.63}
                ry={11.4}
                transform="rotate(-6.64 366.773 690.217)"
              />
              <ellipse
                id="Prst_1_medved"
                data-name="Prst 1 medved"
                fill="#4e3615"
                cx={338.56}
                cy={699.9}
                rx={10.63}
                ry={11.4}
                transform="rotate(-6.64 338.775 700.268)"
              />
            </g>
          )}
        </g>
      </g>
      <g id="Prava_noha_medved" data-name="Prava noha medved">
        <path
          fill="#7a5415"
          d="M661.86 681.15s9.53-38-49.47-90.3c-5.33 64.23-35.24 110.36-73.86 111.61 0 0-.9 9.25 76.7 102.8l73.52-114.12Z"
        />
        <g id="Prave_chodidlo_medved" data-name="Prave chodidlo medved">
          <ellipse
            fill="#604115"
            cx={651.76}
            cy={732.39}
            rx={85.87}
            ry={66.33}
            transform="rotate(-76.71 651.807 732.404)"
          />
          <ellipse
            fill="#7a5415"
            cx={656.28}
            cy={739.49}
            rx={85.87}
            ry={66.33}
            transform="rotate(-76.71 656.322 739.501)"
          />
          {changeConfig.hideRightFoot || (
            <g id="Chodidla_medved-2" data-name="Chodidla medved">
              <ellipse
                id="Chodidlo-2"
                data-name="Chodidlo"
                fill="#4e3615"
                cx={654.84}
                cy={757.93}
                rx={39.07}
                ry={31.15}
                transform="rotate(-83.38 654.814 757.928)"
              />
              <ellipse
                id="Prst_3_medved-2"
                data-name="Prst 3 medved"
                fill="#4e3615"
                cx={630.41}
                cy={701.03}
                rx={11.4}
                ry={10.63}
                transform="rotate(-83.36 630.373 701.025)"
              />
              <ellipse
                id="Prst_2_medved-2"
                data-name="Prst 2 medved"
                fill="#4e3615"
                cx={660.83}
                cy={689.85}
                rx={11.4}
                ry={10.63}
                transform="rotate(-83.36 660.795 689.844)"
              />
              <ellipse
                id="Prst_1_medved-2"
                data-name="Prst 1 medved"
                fill="#4e3615"
                cx={688.88}
                cy={699.9}
                rx={11.4}
                ry={10.63}
                transform="rotate(-83.36 688.838 699.892)"
              />
            </g>
          )}
        </g>
      </g>
      <g id="Shadows">
        <path
          fill="#604115"
          d="M394.15 546.94s-28.38 18.95-28.44 39.43q-.13-4.33-.13-8.71a286.11 286.11 0 0 1 4.43-50.4l18.15-3.4ZM663.08 577.66c0 4.4-.1 8.78-.29 13.11 1.52-21.09-28.38-41.06-28.38-41.06l6-23.08 18.79 3.52a286.1 286.1 0 0 1 3.88 47.51Z"
        />
      </g>
      <g id="Ruce_medved" data-name="Ruce medved">
        <path
          fill="#7a5415"
          d="M473 486.48q-1.49 2-3.15 4c-17.71 21.52-50.71 45.38-91.59 64.24q-6.11 2.82-12.15 5.35c-64.35 27-122.81 30.56-133.68 7-11.54-25 35-71.09 104-102.94a356 356 0 0 1 48.74-18.43c5.42-1.59 10.73-3 15.89-4.19l1.22-.28 2.17-.48 1.62-.34c38.83-8.22 68.73-4.81 76.19 11.35 4.31 9.3.6 21.46-9.26 34.72ZM791.57 567.1C781 590.05 725.1 587.27 662.66 562q-8.4-3.37-16.92-7.31c-40.14-18.53-72.69-41.87-90.62-63.08a102.54 102.54 0 0 1-3.28-4.06c-10.48-13.69-14.51-26.28-10.12-35.8 7.81-16.92 40.22-19.86 81.74-10.13 1.12.27 2.25.54 3.39.83a2 2 0 0 1 .31.08 344.92 344.92 0 0 1 60.39 21.59C756.53 496 803.11 542.1 791.57 567.1Z"
        />
      </g>
      <g id="Shadows-2" data-name="Shadows">
        <path
          fill="#4e3615"
          d="M426.72 459c-.55-.33-14.82-8.91-27.62-12.4-5.22-1.43-10.2-2-13.9-.84 5.42-1.59 10.73-3 15.89-4.19l1.22-.28 2.17-.48 1.62-.34ZM597.35 459c.55-.33 14.82-8.91 27.62-12.4 5.22-1.43 10.2-2 13.9-.84-5.42-1.59-10.73-3-15.89-4.19l-1.22-.28-2.17-.48-1.62-.34Z"
        />
      </g>
      <g id="Leve_ucho_medved" data-name="Leve ucho medved">
        <circle fill="#7a5415" cx={403} cy={257.16} r={47.42} />
        {changeConfig.hideLeftEarFilling || (
          <circle fill="#4e3615" cx={403} cy={257.16} r={30.14} />
        )}
      </g>
      <g id="Prave_ucho_medved" data-name="Prave ucho medved">
        <circle fill="#7a5415" cx={625.17} cy={257.16} r={47.42} />
        {changeConfig.hideRightEarFilling || (
          <circle fill="#4e3615" cx={628.08} cy={257.16} r={30.14} />
        )}
      </g>
      <circle id="Hlava" fill="#7a5415" cx={514.33} cy={352.16} r={142.42} />
      <g id="Nos_a_usta_medved" data-name="Nos a usta medved">
        <ellipse fill="#926f3e" cx={514.32} cy={393.57} rx={55.73} ry={41.41} />
        <g id="Usta_medved" data-name="Usta medved">
          <path
            className="cls-5-bear"
            d="M478.74 403.68s16.22 20.57 35.61 0M514.35 387.59v16.09s16.22 20.57 35.6 0"
          />
        </g>
        <g id="Nos_medved" data-name="Nos medved">
          <path
            id="Nos_medved_obrys"
            data-name="Nos medved obrys"
            fill="#282828"
            d="M532.38 379.77c0 4.32-18.06 7.82-18.06 7.82s-18.07-3.5-18.07-7.82 8.09-7.82 18.07-7.82 18.06 3.5 18.06 7.82Z"
          />
          <ellipse
            id="Nos_medved_odraz"
            data-name="Nos medved odraz"
            fill="#efefef"
            cx={506.96}
            cy={376.08}
            rx={4.71}
            ry={1.42}
            transform="rotate(-12.52 506.952 376.072)"
          />
        </g>
      </g>
      <g id="Prave_oko_medved" data-name="Prave oko medved">
        <ellipse
          id="Prave_oko_obrys"
          data-name="Prave oko obrys"
          fill="#282828"
          cx={570.05}
          cy={326.34}
          rx={18.99}
          ry={21.76}
        />
        <g id="Prave_oko_odraz" data-name="Prave oko odraz">
          <ellipse
            fill="#efefef"
            cx={564.6}
            cy={317.33}
            rx={6.47}
            ry={5.17}
            transform="rotate(-69.86 564.631 317.323)"
          />
          <ellipse
            fill="#4a494a"
            cx={578.14}
            cy={338.76}
            rx={3.11}
            ry={2.48}
            transform="rotate(-55.7 578.176 338.76)"
          />
        </g>
      </g>
      <g id="Leve_oko_medved" data-name="Leve oko medved">
        <ellipse
          id="Leve_oko_obrys"
          data-name="Leve oko obrys"
          fill="#282828"
          cx={450.42}
          cy={326.34}
          rx={18.99}
          ry={21.76}
        />
        <g id="Leve_oko_odraz" data-name="Leve oko odraz">
          <ellipse
            fill="#efefef"
            cx={458}
            cy={317.79}
            rx={5.17}
            ry={6.47}
            transform="rotate(-20.14 457.896 317.757)"
          />
          <ellipse
            fill="#4a494a"
            cx={444.45}
            cy={339.22}
            rx={2.48}
            ry={3.11}
            transform="rotate(-34.3 444.417 339.212)"
          />
        </g>
      </g>
    </g>
  </svg>
)

export default Bear
