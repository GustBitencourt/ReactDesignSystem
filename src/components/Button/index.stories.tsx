import { Button, ButtonProps } from './index';
import { Meta, StoryObj } from '@storybook/react';

export default {
    title: 'Components/Button',
    component: Button,
    args: {
        children: 'Click here',
    },
    argTypes: {
    }
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {}
