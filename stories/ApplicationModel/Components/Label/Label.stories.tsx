import type { Meta, StoryObj } from '@storybook/react'

import Label, { LabelProps } from '@components/label'

const meta: Meta<LabelProps> = {
  title: 'ApplicationModel/Components/Label',
  component: (props) => (
    <div style={{ width: '100px' }}>
      <Label {...props} />
    </div>
  ),
  argTypes: {
    children: {
      control: 'text',
    },
    content: {
      control: 'text',
    },
    color: {
      control: 'color',
    },
  },
}

export default meta

type Story = StoryObj<LabelProps>

export const Primary: Story = {
  args: {
    children: 'label',
    content: 'label',
    color: '#f0f',
  },
}
