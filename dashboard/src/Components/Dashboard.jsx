import React, { useState } from 'react'
import Api from '../helpers/api'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Snackbar from '@material-ui/core/Snackbar'
import SecurityForm from './SecurityForm'
import Notification from './Notification'

const Dashboard = () => {
  const [status, setStatus] = useState('in-progress')
  const [repositoryName, setRepositoryName] = useState('https://')
  const [open, setOpen] = useState(false)
  const [notify, setMessage] = useState({ message: '', type: 'success' })
  const useStyles = makeStyles({
    card: {
      maxWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });
  const handleChange = event => {
    switch (event.target.name) {
      case 'repository_name':
        setRepositoryName(event.target.value)
        break
      case 'status':
        setStatus(event.target.value)
        break
      default:
    }
  }

  const handleSubmit = async event => {
    event.preventDefault()
    const response = await Api.add('/api/security', {
      status,
      repositoryName
    })
    setOpen(true)
    setMessage({
      message: response.data.message,
      type: response.status === 200 ? 'success' : 'error'
    })
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }
  const classes = useStyles();
  return (
    <>
      <Card className={classes.card}>
        <CardContent>
          <SecurityForm
            handleChange={handleChange}
            status={status}
            repositoryName={repositoryName}
            handleSubmit={handleSubmit}
          />
        </CardContent>
      </Card>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Notification
          onClose={handleClose}
          variant={notify.type}
          message={notify.message}
        />
      </Snackbar>
    </>
  )
}

export default Dashboard
