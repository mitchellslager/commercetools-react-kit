import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Box, Button } from '@material-ui/core'
import { ArrowBack } from '@material-ui/icons'

const BackButton: React.FunctionComponent = ({ children = 'Go back' }) => {
  let history = useHistory()

  return (
    <Box>
      <Button startIcon={<ArrowBack />} onClick={() => history.goBack()}>
        {children}
      </Button>
    </Box>
  )
}

export default BackButton
