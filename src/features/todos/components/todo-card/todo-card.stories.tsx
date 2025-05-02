import { Meta, StoryObj } from '@storybook/react'

import { TodoCard } from './todo-card'

const meta: Meta<typeof TodoCard> = {
  component: TodoCard,
}

export default meta

type Story = StoryObj<typeof TodoCard>

export const Default: Story = {
  args: {},
}
