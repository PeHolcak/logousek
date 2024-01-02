import type { Meta, StoryObj } from '@storybook/react'

import ClickableIcon, { ClickableIconProps } from '@components/clickable-icon'

const meta: Meta<ClickableIconProps> = {
  title: 'ApplicationModel/Components/ClickableIcon',
  component: ClickableIcon,
  argTypes: {
    fontSize: {
      control: 'text',
    },
    color: {
      control: 'color',
    },
    icon: {
      options: [
        'tiktok',
        'insert_chart',
        'accessible',
        'alarm_add',
        'facebook',
      ],
      control: { type: 'radio' },
    },
  },
}

export default meta

type Story = StoryObj<ClickableIconProps>

export const Primary: Story = {
  args: {
    icon: 'facebook',
    fontSize: '40px',
  },
}
