import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import { Button } from 'reactstrap'

import {Row, Col} from 'reactstrap'
import {Card, CardImg, CardBody,CardTitle,CardSubtitle,CardText } from 'reactstrap'


class UserPost extends React.Component{   
    constructor(props){
        super(props)
        this.state = {
            visible:8
        }
        this.handleButton = this.handleButton.bind(this)
    }
    handleButton(){
        this.setState((prevState)=>{
            return {
                visible:prevState.visible+8
            }
        })
    }

    render(){
        return (
            <div>
                <h1 className ="text-light bg-dark p-2 mb-55" style={{'textAlign':'center'}} > AVILABLE POSTS : {this.props.posts.slice(0,this.state.visible).length}</h1>


                <Row>
                    {this.props.posts.slice(0,this.state.visible).map(post =>{
                        return (
                        <Col md="3" className="mb-3" key={post.id}>
                        <Card>
                        <CardImg top width="100%" src="data:image/jpeg;base64,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" />
                        <CardBody>
                        <CardTitle>Title:- <b>{post.title}</b></CardTitle>
                        <CardSubtitle><b>Body:- </b><i>{post.body}</i></CardSubtitle>
                        <CardText><Link to={`posts/${post.id}`}>Read More</Link></CardText>
                        </CardBody>
                        </Card>
                        </Col>
                        )
                      })}
                </Row>   
                    <div>
                        {
                                 this.state.visible  <this.props.posts.length && (
                                    <Button onClick = {this.handleButton}>Show More</Button> )                    
                        }
                    </div>                         
            </div> 
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        posts:state.posts
    }
}
export default connect(mapStateToProps)(UserPost)