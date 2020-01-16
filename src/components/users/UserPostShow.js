import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { Spinner } from 'reactstrap';


import { ListGroup, ListGroupItem } from 'reactstrap';
import {Row, Col } from 'reactstrap'

class UserPostShow extends React.Component{
    constructor(props){
        super(props)
        this.state = {           
            comments: [],
            user:{},
            isLoading: true
        }
    }
    componentDidMount(){
        const id = this.props.match.params.id
        
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response=>{
                const post = response.data
           /////////     
        axios.get(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
            .then(response=>{
                const user = response.data
                    this.setState({user})
                })
            /////////
        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
            .then(response=>{
                const comments = response.data
                    this.setState({comments,isLoading: false})
                })
            })
        .catch(err=>{console.log(err)})
    }




    render(){
        return (
            <div>
                    <Row className="container-fluid">
                    <Col md="3">
                    <img src="https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/256x256/plain/user.png" width="200px"/>
                    <h6 className="mt-3">Author Name - {this.state.isLoading? <Spinner color="primary" /> :<Link to={`/users/${this.state.user.id}`}>{this.state.user.name}</Link>}</h6> 
                    </Col>
                    <Col md="9">
                    {this.props.post && (
                        <div>
                        <h1 className="mb-3">Title: {this.props.post.title}</h1><hr/>
                        <p className="font-weight-normal"> Body: <i>{this.props.post.body}</i></p>
                        </div>
                    )}
                    </Col>
                    </Row>
                    <Row><Col md="3"></Col>
                    <Col>
                    <h5 className="ml-1">Comments</h5>
                        {this.state.isLoading?(
                            <Spinner color="dark" />
                        ): (
                        <ListGroup>
                        {this.state.comments.map(comment=>{
                            return <ListGroupItem key={comment.id}>

                            <p><b>Name:- {comment.name}</b></p>
                            <p><i>Email:- {comment.email}</i></p>
                            <p>comment:- {comment.body}</p>
                            
                            </ListGroupItem>
                        })}
                        </ListGroup>
                        )}
                    </Col>
                    </Row>                    
        </div>
        )
    }
}

const mapStateToProps = (state,props)=> {
    const id = props.match.params.id
    return (
        {
        post: state.posts.find(post=>String(post.id) === id)
        }   
    )
}

export default connect(mapStateToProps)(UserPostShow)