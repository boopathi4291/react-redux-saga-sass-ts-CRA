import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';
import { ICardProps } from '../interfaces/card.interface';

function CardComponent(props: ICardProps) {
  return (
    <div className="card" style={{ display: 'inline-block', marginLeft: '20px', width: '30%' }}>
      <div>
        <Card >
          <CardContent className={props.classes}>
            <Typography>{props.recordType}</Typography>
          </CardContent>
          <CardActions>
            <Typography>
              {props.amount}
            </Typography>
          </CardActions>
        </Card>
      </div>
    </div>
  )
}
export default CardComponent;