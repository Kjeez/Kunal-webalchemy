'use client';

import React, { useState } from 'react';
import EstimateDialog from './EstimateDialog';
import { ArrowNE } from './icons';

export interface PopupCtaProps {
  /** Button label — pass the page's existing CTA text verbatim. */
  label: string;
  /** Service name pre-selected in the estimate dialog. */
  serviceName: string;
  subServiceName?: string;
  variant?: 'dark' | 'out';
  size?: 'md' | 'lg';
  arrow?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

/** Button that opens the estimate dialog (legacy ServiceFormPopup flow). */
const PopupCta: React.FC<PopupCtaProps> = ({
  label,
  serviceName,
  subServiceName = '',
  variant = 'dark',
  size = 'md',
  arrow = variant === 'dark',
  className = '',
  style,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        className={`btn btn-${variant}${size === 'lg' ? ' btn-lg' : ''}${className ? ` ${className}` : ''}`}
        style={style}
        onClick={() => setOpen(true)}
      >
        {label}
        {arrow && <ArrowNE />}
      </button>
      <EstimateDialog
        isOpen={open}
        onClose={() => setOpen(false)}
        serviceName={serviceName}
        subServiceName={subServiceName}
      />
    </>
  );
};

export default PopupCta;
