export const canUseDom: boolean = !!(
  typeof window !== 'undefined' &&
  typeof document !== 'undefined' &&
  window &&
  window.document
);
