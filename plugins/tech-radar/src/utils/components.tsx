/*
 * Copyright 2020 Spotify AB
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import React from 'react';

import {
  Link,
} from '@material-ui/core';

import { Link as RouterLink, generatePath } from 'react-router-dom';
import { entryRouteRef } from '../plugin';

type WithLinkProps = {
  url?: string;
  className: string;
  children: React.ReactNode;
};

type WithEntryLinkProps = {
  className: string;
  children: React.ReactNode;
  entryId: string;
};

export const WithLink = ({
  url,
  className,
  children,
}: WithLinkProps): JSX.Element =>
  url ? (
    <a href={url} className={className}>
      {children}
    </a>
  ) : (
    <>{children}</>
  );


export const WithEntryLink = ({
  entryId,
  className,
  children,
}: WithEntryLinkProps): JSX.Element => {
  return (
    <Link 
      component={RouterLink} 
      className={className}
      to={`${generatePath(entryRouteRef.path, {
        id: entryId!,
      })}`}
    >
      {children}
    </Link>
  );
};
