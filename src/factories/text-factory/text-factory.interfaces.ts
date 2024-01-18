import { TextProps } from 'react-native';

export default interface TextFactoryProps extends TextProps {
  type?: 'warning' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'main-title';
}
