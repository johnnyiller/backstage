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
/*
import { Entity } from '@backstage/catalog-model';
import { MissingAnnotationEmptyState } from '@backstage/core';
import { useEntity } from '@backstage/plugin-catalog-react';

import { ROLLBAR_ANNOTATION } from '../constants';

import { EntityPageRollbar } from './EntityPageRollbar/EntityPageRollbar';

export const isPluginApplicableToEntity = (entity: Entity) =>
  Boolean(entity.metadata.annotations?.[ROLLBAR_ANNOTATION]);
*/
import React from 'react';
import { Route, Routes } from 'react-router';

import { rootRouteRef } from '../plugin';
import { entryRouteRef } from '../plugin';

import { RadarPage } from '../components/RadarPage';
import { EntryPage } from '../components/EntryPage';

import { TechRadarComponentProps } from '../api';

export type TechRadarPageProps = TechRadarComponentProps & {
  title?: string;
  subtitle?: string;
  pageTitle?: string;
};

type Props = {
  id?: string;
};



export const Router = (_props: Props) => {
  //const { entity } = useEntity();
  /*
  if (!isPluginApplicableToEntity(entity)) {
    <MissingAnnotationEmptyState annotation={ROLLBAR_ANNOTATION} />;
  }
  */

  return (
    <Routes>
      <Route
        path={`/${rootRouteRef.path}`}
        element={<RadarPage height={400} width={800} />}
      />
      <Route
        path={`/${entryRouteRef.path}`}
        element={<EntryPage height={100} width={200} />}
      />
    </Routes>
  );
};