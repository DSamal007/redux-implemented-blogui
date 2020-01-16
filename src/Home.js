
//import and export willbe es6 feature
import React from "react"
import {connect} from 'react-redux'  //connect is a higher order component----------accept a component as an argument or returns a component 
// import {increment} from './actions/count'

import {Row, Col} from 'reactstrap'
import {  Card, CardImg, CardBody, CardTitle,CardSubtitle,CardText } from 'reactstrap'
import {Link} from 'react-router-dom'

function HomeComponent(props){
    console.log(props)
    return (
        <div  style={{'text-align':'center'}}>
            
           
            <h2>
                WELCOME!! To our website
            </h2>
            
            <p>Welcome to Our Website. This website is designed to give you the user lists, with a focus on their blogs. <b></b>Designed in 2019 by <b>D Samal</b> . <br/>Some of the Posts Are Listed below. For More posts you can browse Our Website.

<br/>We hope you enjoy our website as much as we enjoy offering it to you.<br/>

Sincerely,<br/>
<b>D Samal</b>, [BlogsUI]</p><br/>

<div >
                <h1 className="text-light bg-dark p-3 mb-4" style={{'textAlign':'center'}}>Recent Posts - 10</h1>
            

                 <Row>
                    {props.posts.slice(0,4).map(post=>{
                    return (
                        <Col md="3" className="mb-3" key={post.id}>
                        <Card>
                        <CardImg top width="100%" src="https://i.pinimg.com/originals/eb/14/bb/eb14bba2643259f3b587a2133d34087a.jpg"alt="Card image cap" />
                        <CardBody>
                        <CardTitle>Title:-<b>{post.title}</b> </CardTitle><br/>
                        <CardSubtitle><b>Body:-</b> {post.body}</CardSubtitle>
                        <CardText><Link to={`posts/${post.id}`}>Read More</Link></CardText>
                        </CardBody>
                        </Card>
                        </Col>
                    // )<ListGroupItem action key={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link></ListGroupItem>
                    )
                    })}
                </Row> 
            </div>
      

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(HomeComponent)/////////