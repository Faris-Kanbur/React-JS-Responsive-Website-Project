import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    // color: 'f2f2f2'
  },
  
}));

export default function GroupedSelect() {
  const classes = useStyles();

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-native-select">Language</InputLabel>
        <Select native defaultValue="" id="grouped-native-select" >
          <option aria-label="None" value="" />
                <option value={1}>English</option>
                <option value={2}>German</option>
                <option value={3}>Russian</option>
                <option value={4}>Turkish</option>
                <option value={5}>French</option>
                <option value={6}>Greek</option>

        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-select">Niveau</InputLabel>
        <Select defaultValue="" id="grouped-select">
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>A1</MenuItem>
          <MenuItem value={2}>A2</MenuItem>
          <MenuItem value={3}>B1</MenuItem>
          <MenuItem value={4}>B2</MenuItem>
          <MenuItem value={4}>C1</MenuItem>
          <MenuItem value={4}>C2</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}