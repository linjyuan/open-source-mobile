import React, { useEffect, useState, useRef } from 'react';
import type { FC, ReactElement } from 'react';

interface Props {
  active: boolean;
  forceRender?: boolean;
  destroyOnClose?: boolean;
  children: ReactElement;
}
export function useInitialized(check?: boolean) {
  const initializedRef = useRef(check);
  if (check) {
    initializedRef.current = true;
  }
  return !!initializedRef.current;
}

export function useShouldRender(
  active: boolean,
  forceRender?: boolean,
  destroyOnClose?: boolean,
) {
  const initialized = useInitialized(active);
  if (forceRender) return true;
  if (active) return true;
  if (!initialized) return false;
  return !destroyOnClose;
}

export const ShouldRender = (props: Props) => {
  const shouldRender = useShouldRender(
    props.active,
    props.forceRender,
    props.destroyOnClose,
  );
  return shouldRender ? props.children : null;
};
