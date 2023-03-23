/* eslint-disable import/no-anonymous-default-export */
import React from 'react'

import styles from 'common/theme/themes.module.scss'
import { icons } from 'common/UI/Icon'

import { Input } from './Input'

export default {
  title: 'UI/Form/Input text and number',
  component: Input,
}

const Template = (args) => (
  <div style={{ width: 208 }} className={styles.defaultTheme}>
    <Input {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  placeholder: 'placeholder',
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: 'secondary',
  placeholder: 'placeholder',
}

export const TypeNumber = Template.bind({})
TypeNumber.storyName = 'Input type number'
TypeNumber.args = {
  type: 'number',
  placeholder: 'input type number',
}

export const WithLabel = Template.bind({})
WithLabel.storyName = 'With label'
WithLabel.args = {
  label: 'This is a label',
  placeholder: 'placeholder',
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
  placeHolder: 'disabled input',
}

export const Error = Template.bind({})
Error.args = {
  error: 'This is an error',
  placeholder: 'error input',
}

export const Ghost = Template.bind({})
Ghost.args = {
  variant: 'ghost',
  leftIcon: icons.search,
  placeholder: 'Ghost input',
}

export const leftIcon = Template.bind({})
leftIcon.args = {
  leftIcon: icons.magnifierOutline,
  placeholder: 'placeholder',
}

export const prefix = Template.bind({})
prefix.args = {
  prefix: '$',
  placeholder: 'placeholder',
}

export const rightIcon = Template.bind({})
rightIcon.args = {
  rightIcon: icons.xCircle,
  placeholder: 'placeholder',
}

export const rightIconWithAction = Template.bind({})
rightIconWithAction.storyName = 'Right icon with action'
rightIconWithAction.args = {
  placeholder: 'placeholder',
  rightIcon: icons.xCircle,
  rightIconAction: () => {
    alert('Input icon action')
  },
}

export const leftAndRightIcon = Template.bind({})
leftAndRightIcon.storyName = 'With left and right icons'
leftAndRightIcon.args = {
  placeholder: 'placeholder',
  rightIcon: icons.xCircle,
  leftIcon: icons.magnifierOutline,
}
