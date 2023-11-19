import type { Meta, StoryObj } from '@storybook/react';

import Button, { ButtonProps, ButtonSizesEnum } from '@components/button';

const meta: Meta<ButtonProps> = {
  title: 'ApplicationModel/Components/Button',
  component: Button,
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
    color: {
      control: 'color',
    },
    children: {
      control: 'text',
    },
    title: {
      control: 'text',
    },
    size: {
      options: ['xs', 's', undefined],
      control: { type: 'radio' },
    },
    disabled: {
      control: 'boolean',
    },
    type: {
      options: ["button", "submit", "reset", undefined],
      control: { type: 'radio' },
    }

  },
};

export default meta;

type Story = StoryObj<ButtonProps>;

export const ExtraSmall: Story = {
  args: {
    children: 'Button',
    backgroundColor: "#aaaaff",
    size: ButtonSizesEnum.xs,
    color: "#fff"
  },
};

export const Small: Story = {
  args: {
    children: 'Button',
    backgroundColor: "#aaaaff",
    size: ButtonSizesEnum.s,
    color: "#fff"
  },
};

export const Medium: Story = {
  args: {
    children: 'Button',
    backgroundColor: "#aaaaff",
    size: ButtonSizesEnum.md,
    color: "#fff"
  },
};

export const Large: Story = {
  args: {
    children: 'Button',
    backgroundColor: "#aaaaff",
    size: ButtonSizesEnum.lg,
    color: "#fff"
  },
};

export const Disabled: Story = {
  args: {
    children: 'Button',
    backgroundColor: "#fff",
    disabled: true,
    color: "#000"
  },
};
