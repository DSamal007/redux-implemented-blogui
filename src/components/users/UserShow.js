import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import {Card, CardText,CardTitle} from 'reactstrap'
import { ListGroup, ListGroupItem } from 'reactstrap';

function  UserShow(props){
        return(
            <div>
                {
                    props.user && props.post && (
                        <div>
                             <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                                 <CardTitle>  <h2>USER:- {props.user.name}</h2></CardTitle>
                                 <CardText><h5>{props.user.email}</h5></CardText>
                                 <Link style={{'textAlign':'left'}}to="/users">Back</Link>
                                
                             </Card><br/>                            
                            <h3 className="mt-3" style={{'textAlign':'left'}}>POST WRITTEN BY USERS</h3><br/>
                            <ListGroup>
                            { props.post.map(function(post){
                                    return <ListGroupItem key={post.id}><Link to={`/posts/${post.id}`}> { post.title }</Link></ListGroupItem>})}
                            </ListGroup>
                            
                        </div>
                    )
                }
                
                

                </div>
        )
}
const mapStateToProps=(state,props)=>{
    const id=props.match.params.id
    return{
        user:state.users.find(user=>user.id===parseInt(id)),
        post:state.posts.filter(post=>post.userId===parseInt(id))
    }
}

export default connect(mapStateToProps)(UserShow)