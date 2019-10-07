import React from "react";
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import {makeStyles} from '@material-ui/core/styles';
import "./MenuListComposition.css";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    paper: {
        marginRight: theme.spacing(2),
    },
}));
export default function MenuListComposition() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    function handleToggle() {
        setOpen(prevOpen => !prevOpen);
    }

    function handleClose(event) {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    }

    return (
        <div>
            <div className="Menudiv">
                <div className={classes.root}>
                    <div>
                        <Button
                            ref={anchorRef}
                            aria-controls="simple-menu"
                            aria-haspopup="true"
                            onClick={handleToggle}
                            onMouseOver={handleToggle}
                        >
                            Puma
                        </Button>
                        <Popper open={open} anchorEl={anchorRef.current} keepMounted transition disablePortal>
                            {({TransitionProps, placement}) => (
                                <Grow
                                    {...TransitionProps}
                                    style={{transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'}}
                                >
                                    <Paper id="menu-list-grow">
                                        <ClickAwayListener onClickAway={handleClose}>
                                            <MenuList>
                                                <MenuItem onClick={handleClose}>Model1</MenuItem>
                                                <MenuItem onClick={handleClose}>Model2</MenuItem>
                                                <MenuItem onClick={handleClose}>Model3</MenuItem>
                                            </MenuList>
                                        </ClickAwayListener>
                                    </Paper>
                                </Grow>
                            )}
                        </Popper>
                    </div>
                </div>
            </div>
        </div>
    );
}