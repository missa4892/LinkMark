import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

const LinkInput = (props) => {
    const { classes } = props;
    const [state, setState] = useState({newLinkUrl: ''})
    return (
        <React.Fragment>
            <p>
                Paste a link here:
            </p>
            <TextField
                id="outlined-full-width"
                className={classes.textField}
                placeholder="http://helloworld/com"
                margin="normal"
                variant="outlined"
                value={state.newLinkUrl}
                InputLabelProps={{
                shrink: true,
                }}
            />
                <Button variant="contained" className={classes.button}>
                    Bookmark This!
                </Button>
        </React.Fragment>
    );
}

const styles = theme => ({
    textField: {
      borderRadius: 4,
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      backgroundColor: theme.palette.common.white,
      fontSize: 16,
      width: '80%',
    },
    button: {
        margin: theme.spacing.unit,
      },
  });
  
  LinkInput.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(LinkInput);