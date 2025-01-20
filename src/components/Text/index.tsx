import { Text as RNText } from 'react-native'
import React, { ReactNode } from 'react'
import { useTheme } from '@contexts/Theme';
import { fontTheme } from '@theme/index';
import { fontWeight, TextType } from './types';

interface Props {
  children: ReactNode,
  type?: TextType,
  fontColor?: string,
}


function getFontWeight( type: TextType ): fontWeight {
  if (type === 'body') return "regular";
  if (type === 'title2') return "bold";
  if (type === 'title1') return "bold";
  if (type === 'large') return "bold";
  if (type === 'callout') return "light";

  return 'regular';
}

export default function Text({ children, type = 'body', fontColor }: Props) {
  const theme = useTheme();
  const fontWeight = getFontWeight(type);

  return (
    <RNText
      style={{
        fontSize: fontTheme[type],
        color: fontColor || theme.text,
        fontFamily: 'SF Pro',
        fontWeight,
      }}
    >
      {children}
    </RNText>)
}