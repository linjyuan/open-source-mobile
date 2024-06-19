import React, { FC, useEffect, useState } from 'react';
import { mergeProps } from 'src/utils/mergeProps';
import { GetContainer, renderToContainer } from 'src/utils/render-to-container';
import { ShouldRender } from 'src/utils/useShouldRender';
export type MaskProps = {
  visible: boolean;
  color: React.CSSProperties['color'];
  afterClose?: () => void;
  afterShow?: () => void;
  onMaskClick?: () => void;
  disableBodyScroll: boolean;
  opacity: 'default' | 'thin' | 'thick' | number;
  forceRender?: boolean;
  destroyOnClose?: boolean;
  getContainer?: GetContainer;
};
const defaultProps: MaskProps = {
  visible: false,
  color: 'black',
  disableBodyScroll: true,
  opacity: 0,
  forceRender: false,
  destroyOnClose: false,
  getContainer: null,
};
const Mask: FC<MaskProps> = (p: MaskProps) => {
  const props = mergeProps(defaultProps, p);

  const node = withStopPropagation(
    props.stopPropagation,
    withNativeProps(
      props,
      <animated.div
        className={classPrefix}
        ref={ref}
        aria-hidden
        style={{
          ...props.style,
          background,
          opacity,
          display: active ? undefined : 'none',
        }}
        onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
          if (e.target === e.currentTarget) {
            props.onMaskClick?.(e);
          }
        }}
      >
        {props.onMaskClick && (
          <div
            className={`${classPrefix}-aria-button`}
            role="button"
            aria-label={locale.Mask.name}
            onClick={props.onMaskClick}
          />
        )}
        <div className={`${classPrefix}-content`}>{props.children}</div>
      </animated.div>,
    ),
  );

  return (
    <ShouldRender
      active={props.visible}
      forceRender={props.forceRender}
      destroyOnClose={props.destroyOnClose}
    >
      {renderToContainer(node, props.getContainer)}
    </ShouldRender>
  );
};

export default Mask;
