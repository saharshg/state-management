import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  selectedSubHeader: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.secondary.light,
  },
}));

const subTopicMap = {
  useState: [
    { title: 'Counter', link: '/state' },
    { title: 'React is smart!', link: '/state/2' },
    { title: "We're smarter", link: '/state/3' },
  ],
  useEffect: [
    { title: 'Auto-count', link: '/useEffect' },
    { title: 'Not enough!', link: '/useEffect/2' },
    { title: 'Solution', link: '/useEffect/3' },
    { title: 'Hmm...', link: '/useEffect/4' },
  ],
  useRef: [
    { title: 'Understanding', link: '/useRef' },
    { title: 'Perfection!', link: '/useRef/2' },
    { title: 'Proof', link: '/useRef/3' },
  ],
  useContext: [
    { title: 'Why?', link: '/useContext' },
    { title: 'Counter with Context', link: '/useContext/1' },
  ],
};

const SubHeader = ({ selectedHeader }) => {
  const classes = useStyles();
  let history = useHistory();
  const [selectedSubHeader, setSelectedSubHeader] = useState('');
  const subHeaders = subTopicMap[selectedHeader];

  return subHeaders
    ? subHeaders.map(({ title, link }) => (
        <Grid item xs={12 / subHeaders.length} key={title}>
          <Paper
            elevation={title === selectedSubHeader ? 10 : 1}
            className={
              title === selectedSubHeader
                ? classes.selectedSubHeader
                : classes.paper
            }
            onClick={() => {
              setSelectedSubHeader(title);
              history.push(link);
            }}
          >
            {title}
          </Paper>
        </Grid>
      ))
    : '';
};

export default SubHeader;
