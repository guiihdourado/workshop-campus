import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ExampleComponent } from './'

const meta: ComponentMeta<typeof ExampleComponent> = {
  title: 'ExampleComponent',
  component: ExampleComponent,
  argTypes: {},
  parameters: {
    controls: false,
  },
}

export default meta

const Template: ComponentStory<typeof ExampleComponent> = (args) => (
  <ExampleComponent {...args} />
)

export const Default = Template.bind({})
