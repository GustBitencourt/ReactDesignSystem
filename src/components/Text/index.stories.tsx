import { Text, TextProps } from './index';
import { Meta, StoryObj } from '@storybook/react';

export default {
    title: 'Components/Text',
    component: Text,
    args: {
        children: 'Lorem ipsum.',
    },
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}

export const Small: StoryObj<TextProps> = {
    args: {
        size: 'sm'
    }
}

export const Large: StoryObj<TextProps> = {
    args: {
        size: 'lg'
    }
}

export const CustomCOmponent: StoryObj<TextProps> = {
    args: {
        asChild: true,
        children: (
            <p>Bora Bahea</p>
        )
    }
}