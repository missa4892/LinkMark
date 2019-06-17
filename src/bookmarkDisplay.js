import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import moment from "moment";

function BookmarkDisplay(props) {

  return (
    props.links && props.links.length > 0 &&
    displayBookmarkTable(props)
  );
}

const styles = theme => ({
  root: {
    width: "100%"
  },
  paper: {
    marginTop: theme.spacing.unit,
    width: "100%",
    overflowX: "auto",
    marginBottom: theme.spacing.unit
  },
  table: {
    minWidth: 650
  }
});

export default withStyles(styles)(BookmarkDisplay);
function displayBookmarkTable(props) {
  const classes = styles;
  return <div className={classes.root}>
    <Paper className={classes.paper}>
      <Table className={classes.table} size="small">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell align="right">Bookmarked Links</TableCell>
            <TableCell align="right">Added Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.links.map((link, index) => (<TableRow key={link}>
            <TableCell component="th" scope="row">
              {index + 1}
            </TableCell>
            <TableCell component="th" scope="row">
              {link}
            </TableCell>
            <TableCell component="th" scope="row">
              {moment().format("Do MMMM YYYY")}
            </TableCell>
          </TableRow>))}
        </TableBody>
      </Table>
    </Paper>
  </div>;
}

