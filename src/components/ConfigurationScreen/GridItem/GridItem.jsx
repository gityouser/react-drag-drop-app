import React from 'react'
import { Grid, Paper } from '@material-ui/core'

function GridItem({ materialGridProps, innerText, classNames, ...props }) {
  const gridProps = { ...materialGridProps, ...props }

  return (
    <Grid item {...gridProps}>
      <div className={classNames.join(' ')}>{innerText}</div>
    </Grid>
  )
}

export default GridItem
