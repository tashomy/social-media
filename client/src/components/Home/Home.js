import React, { useState, useEffect } from "react";
import { Container, Grow, Grid } from "@material-ui/core";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import { useDispatch } from "react-redux";
import useStyles from "../../styles";
import { getPosts } from "../../actions/posts";

const Home = () => {
  const [currId, setCurrId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currId, dispatch]);

  return (
    <Grow in>
      <Container>
        <Grid
          className={classes.mainContainer}
          container
          justifyContent="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={7}>
            <Posts setCurrId={setCurrId} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form currId={currId} setCurrId={setCurrId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
