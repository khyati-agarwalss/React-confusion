import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderDish({dish}) {
    return (
        <div className="col-12 col-md-5 mt-1">
            <Card>
                <CardImg src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{ dish.name }</CardTitle>
                    <CardText>{ dish.description }</CardText>
                </CardBody>
            </Card>
        </div>
    );
}

function RenderComments({comments}) {
    if(comments != null) {
        return comments.map(comment => {
            return (
            <ul key={comment.id} className="list-unstyled">
                <li>{ comment.comment }</li>
                <li>
                    -- { comment.author }{" "}{
                        new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))
                    }
                </li>
            </ul>
            );
        });
    } else {
        return (
            <div></div>
        );
    }
}

    const DishDetail = (props) => {
        const dish = props.dish;
        if(dish == null){
            return (
                <div></div>
            );
        }
        return (
            <div className="container">
                <div className="row">
                    <RenderDish dish = {props.dish} />
                    <div className="col-12 col-md-5 mt-1">
                        <h3>Comments</h3>
                        <RenderComments comments = {props.dish.comments} />
                    </div>   
                </div>
            </div>
        );
    }


export default DishDetail;