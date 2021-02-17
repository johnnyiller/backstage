
import React from 'react';
import { RadarEntry } from '../../api';

export type Props = {
    entry: RadarEntry | undefined
};

import { Fab } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';

const RadarEntryTimeline = (props: Props): JSX.Element => {
  
  const { entry } = props;

  return (
    <>
      {entry && (
        <>
        <h3>
            { entry.quadrant } - {entry.title}
        </h3>
        <Fab aria-label="like">
          <FavoriteIcon />
          
        </Fab>
        <text>{entry.url}</text>
        </>
      )}
    </>
  );
};

export default RadarEntryTimeline;