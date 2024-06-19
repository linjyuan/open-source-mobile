import { canUseDom } from './can-use-window';
import { resolveContainer } from './get-container';
import { ReactPortal } from 'react';
import { createPortal } from 'react-dom';

export type GetContainer = HTMLElement | (() => HTMLElement) | null;

export function renderToContainer(
  node: React.ReactElement,
  getContainer: GetContainer | undefined,
) {
  if (canUseDom && getContainer) {
    const container = resolveContainer(getContainer);
    return createPortal(node, container) as ReactPortal;
  }
  return node;
}
