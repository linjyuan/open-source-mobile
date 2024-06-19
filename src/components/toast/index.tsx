import React, { FC, ReactNode, useMemo } from 'react';

import { PropagationEvent } from 'src/utils/with-stop-propagation';

export interface ToastProps {
  afterClose?: () => void;
  maskStyle?: React.CSSProperties;
  maskClassName?: string;
  maskClickable?: boolean;
  content?: ReactNode;
  icon?: 'success' | 'fail' | 'loading' | ReactNode;
  duration?: number;
  position?: 'top' | 'bottom' | 'center';
  visible?: boolean;
  getContainer?: HTMLElement | (() => HTMLElement) | null;
  stopPropagation?: PropagationEvent[];
}

export const Toast: FC<ToastProps> = (props: ToastProps) => {
  const {
    afterClose,
    maskStyle,
    maskClassName,
    maskClickable,
    content,
    icon,
    duration,
    position,
    visible,
    getContainer,
    stopPropagation,
  } = props;

  const top = useMemo(() => {
    switch (position) {
      case 'top':
        return '20%';
      case 'bottom':
        return '80%';
      default:
        return '50%';
    }
  }, [position]);

  return <div></div>;
};
