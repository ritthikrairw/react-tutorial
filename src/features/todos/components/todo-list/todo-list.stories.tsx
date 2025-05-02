import { Meta, StoryObj } from '@storybook/react'

import { TodoList } from './todo-list'

const meta: Meta<typeof TodoList> = {
  component: TodoList,
}

export default meta

type Story = StoryObj<typeof TodoList>

export const Default: Story = {
  args: {},
}
