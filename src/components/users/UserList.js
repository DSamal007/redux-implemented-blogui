import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {Row, Col } from 'reactstrap'
import {Card, CardImg, CardBody,CardTitle} from 'reactstrap'

function UserList(props){
        return (
            <div>
                <h2 className ="text-light bg-dark p-2 mb-3"> Listing Users - { props.users.length } </h2>
                <Row>
                    { props.users.map(function(user){
                        return (
                            <Col md="2" className="mb-4" key={user.id}>
                                <Card>
                                <CardImg top width="50%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd_q7_ETPnCcy5UALTrBth3LaIlvEcOXyDM4lxRnx7T-BwYuO3&s" height="120px" width="50px" alt="Card image cap" />
                                <CardBody>
                                    <CardTitle>
                                    <Link to={`/users/${user.id}`}>{ user.name }</Link>
                                    </CardTitle>
                                </CardBody> 
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </div> 
        )
}

const mapStateToProps=(state)=>{
    return{
        users:state.users
    }
}
export default connect(mapStateToProps)(UserList)

