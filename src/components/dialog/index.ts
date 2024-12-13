import { forwardRef } from 'react';
import { Dialog as DialogComponent, Props } from './component.tsx';

export const Dialog = forwardRef<HTMLDialogElement, Props>(DialogComponent);
