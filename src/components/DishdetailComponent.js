import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    renderComments(comments) {
        if(comments != null) {
            let options = { year: "numeric", month: "numeric", day: "numeric" };
            return comments.map(comment => {
                return (
                <ul key={comment.id} className="list-unstyled">
                    <li>{ comment.comment }</li>
                    <li>
                        -- { comment.author }{" "}{
                            new Date(comment.date).toLocaleDateString("en-IN", options)
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

    render() {
        const { dish } = this.props;
        return (
            <div className="row">
                <div className="col-12 col-md-5 mt-1">
                    <Card>
                        <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{ dish.name }</CardTitle>
                            <CardText>{ dish.description }</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-5 mt-1">
                    <h3>Comments</h3>
                    { this.renderComments(dish.comments) }
                </div>
            </div>
        );
    }
}

export default DishDetail;