import React, { type ReactNode } from "react";
import { Pressable, Text } from "react-native";

export type ButtonProps = {
    children: ReactNode;
    onPress: () => void;
    disabled?: boolean;
    loading?: boolean;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
    size?: 'sm' | 'md' | 'lg';
}

export function Button(props: ButtonProps) {
    return (
        <Pressable onPress={props.onPress} disabled={props.disabled} >
            <Text>{props.children}</Text>
        </Pressable>
    )
}