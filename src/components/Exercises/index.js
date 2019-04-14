import React, { Fragment } from "react";
import { Grid, Paper, Typography, List } from "@material-ui/core";
// import { ListItem, ListItemText } from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";

const styles = {
    Paper: { padding: 20, margin: 10, height: 500, overflowY: "auto" }
};

export default ({ exercises }) => (
    <Grid container>
        <Grid item sm>
            <Paper style={styles.Paper}>
                {exercises.map(([group, exercises]) => (
                    <Fragment>
                        <Typography
                            variant="headline"
                            style={{ textTransform: "capitalize" }}
                        >
                            {group}
                        </Typography>
                        <List component="ul">
                            {exercises.map(({ title }) => (
                                <ListItem button>
                                    <ListItemText primary={title} />
                                </ListItem>
                            ))}
                        </List>
                    </Fragment>
                ))}
            </Paper>
        </Grid>
        <Grid item sm>
            <Paper style={styles.Paper}>
                <Typography variant="display1">Welcome</Typography>
                <Typography variant="subheading" style={{ marginTop: 20 }}>
                    please select an exercise from left to see the details{" "}
                </Typography>
            </Paper>
        </Grid>
    </Grid>
);
