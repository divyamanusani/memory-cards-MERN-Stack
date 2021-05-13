import React, { useEffect,useState } from 'react';
import { Container, AppBar, Typography, Grow, Grid, makeStyles } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';


import Posts from './components/Posts/Posts.js';
import Form from './components/Form/Form.js';
import { getPosts } from './actions/posts.js';

import memoryImg from './images/memories.jpg';
import useStyles from './styles.js';
import formStyles from '../src/components/Form/styles.js';

const App = () => {

    const [currentId,setCurrentId]=React.useState(null);

    const classes = useStyles();
    let dispatch = useDispatch();
    //useEffect behaves as componentDidMount at first and later behave as componentDidUpdate
    useEffect(() => {
        dispatch(getPosts());
    }, [currentId,dispatch])

    return (
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
                <img className={classes.image} src={memoryImg} alt="memories" height="60" width="60" />

            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts currentId={currentId} setCurrentId={setCurrentId}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId}/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App;