import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';
import { ICardProps } from '../interfaces/card.interface';

function CardComponent(props: ICardProps) {
  const {classes,recordType,amount} = props;
  return (
    <div className="card" >
      <div>
        <Card >
          <CardContent className={classes}>
            <Typography>{recordType}</Typography>
          </CardContent>
          <CardActions>
            <Typography>
              {amount}
            </Typography>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}
export default CardComponent;
