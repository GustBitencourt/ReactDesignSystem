import { Checkbox, CheckboxProps } from './index';
import { Meta, StoryObj } from '@storybook/react';
import { Text } from '../Text';

export default {
    title: 'Components/Checkbox',
    component: Checkbox,
    args: {},
    argTypes: {},
    decorators: [
        (Story) => {
            return (
                <div className='flex items-center gap-2'>
                    {Story()}
                    <Text size='sm'>Manter-me conectado</Text>
                </div>
            )
        }
    ]
} as Meta<CheckboxProps>

export const Default: StoryObj<CheckboxProps> = {}
