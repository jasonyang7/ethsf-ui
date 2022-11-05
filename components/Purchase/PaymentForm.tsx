import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function PaymentForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Select Amount
      </Typography>
      <List disablePadding>
        <ListItem key="token name" sx={{ py: 1, px: 0 }}>
            <ListItemText primary="token name" secondary="token description" />
            <TextField
            required
            id="numTokens"
            name="tokens"
            label="Number of Tokens"
            variant="standard"
          />
        </ListItem>
        <ListItem key="token name" sx={{ py: 1, px: 0 }}>
            <ListItemText primary="token name" secondary="token description" />
            <TextField
            required
            id="numTokens"
            name="tokens"
            label="Number of Tokens"
            variant="standard"
          />
        </ListItem>
        <ListItem key="token name" sx={{ py: 1, px: 0 }}>
            <ListItemText primary="token name" secondary="token description" />
            <TextField
            required
            id="numTokens"
            name="tokens"
            label="Number of Tokens"
            variant="standard"
          />
        </ListItem>
      </List>
    </React.Fragment>
  );
}