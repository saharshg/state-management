import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import SubHeader from './subHeader';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  selectedHeader: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.primary.light,
  },
  selectedSubHeader: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.secondary.light,
  },
}));

const topics = ['useState', 'useEffect', 'useRef', 'useContext'];

export default function Header() {
  const classes = useStyles();
  let history = useHistory();

  const [selectedHeader, setSelectedHeader] = useState('');

  const renderHeader = () =>
    topics.map((topic) => (
      <Grid item xs={12 / topics.length} key={topic}>
        <Paper
          elevation={topic === selectedHeader ? 20 : 1}
          className={
            topic === selectedHeader ? classes.selectedHeader : classes.paper
          }
          onClick={() => {
            setSelectedHeader(topic);
            history.replace('/');
          }}
        >
          {topic}
        </Paper>
      </Grid>
    ));

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {renderHeader()}
        <SubHeader selectedHeader={selectedHeader} />
      </Grid>
    </div>
  );
}
