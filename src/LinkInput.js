import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

const LinkInput = (props) => {
    const { classes } = props;
    const [newLink, setNewLink] = useState("");
    const [linkList, setList] = useState([]);

    const handleButtonClick = () => {
        setList([...linkList, newLink ])
    }

    const displayLinkList = () =>  {
        return linkList;
    }

    const handleOnChange = (e) => {
        setNewLink(e.target.value)
    }

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
                InputLabelProps={{
                shrink: true,
                }}
                value = {newLink}
                onChange = {handleOnChange}
            />

                <Button
                 variant="contained" 
                 className={classes.button}
                 onClick = {handleButtonClick} >
                    Bookmark This!
                </Button>  
              <div>
                  { 
                      displayLinkList(linkList)
                  }
                  </div>
               
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