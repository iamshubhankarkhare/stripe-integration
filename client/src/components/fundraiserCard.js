import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  InputAdornment,
  Input,
  Card,
  Grid,
  CardActions,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from '@material-ui/core';
import InputPrice from './inputPrice.js';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: '25px',
  },
  media: {
    height: 140,
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
});
function FundraiserCard({ cards }) {
  const [cardsAr, setCardsAr] = useState(cards);
  const classes = useStyles();
  return (
    <Grid container justify="center" spacing={8}>
      {cardsAr.map((card, i) => (
        <Card className={classes.root} key={i}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="/static/media/girl.80847393.jpg"
              title={card.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {card.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {card.description}
              </Typography>
            </CardContent>
            <InputPrice card={card} key={i} />
          </CardActionArea>
        </Card>
      ))}
    </Grid>
  );
}
export default FundraiserCard;
