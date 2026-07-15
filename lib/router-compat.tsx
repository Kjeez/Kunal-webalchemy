'use client';

/**
 * react-router-dom compatibility shim.
 *
 * Legacy components (pre-Next.js migration) import { Link, useLocation,
 * useNavigate, useParams } from 'react-router-dom'. The bundler aliases
 * 'react-router-dom' to this file (see next.config.mjs) so those components
 * run unmodified on Next.js. Remove once every component imports next/link
 * and next/navigation directly.
 */

import React from 'react';
import NextLink from 'next/link';
import {
  usePathname,
  useRouter,
  useParams as useNextParams,
} from 'next/navigation';

type LinkProps = Omit<React.ComponentPropsWithoutRef<'a'>, 'href'> & {
  to: string;
  replace?: boolean;
  state?: unknown;
};

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  function Link({ to, replace, state: _state, ...rest }, ref) {
    return <NextLink href={to} replace={replace} ref={ref} {...rest} />;
  }
);

export function useLocation() {
  const pathname = usePathname();
  return { pathname, search: '', hash: '', state: null, key: 'default' };
}

export function useNavigate() {
  const router = useRouter();
  return React.useCallback(
    (to: string | number, opts?: { replace?: boolean }) => {
      if (typeof to === 'number') {
        if (to < 0) router.back();
        else router.forward();
      } else if (opts?.replace) {
        router.replace(to);
      } else {
        router.push(to);
      }
    },
    [router]
  );
}

export function useParams<
  T extends Record<string, string | undefined> = Record<string, string>
>() {
  return useNextParams() as T;
}
