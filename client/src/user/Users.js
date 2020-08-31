import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {list} from './apiUser'
import DefaultProfile from '../images/circlewhitebgMRKT.4.png'

export class Users extends Component {
    state = {
        users:[]
    }

    componentDidMount = () => {
        list().then(data => {
            if(data.error){
                console.log(data.error)
            } else{
                this.setState({users:data})
            }
        })
    }

    renderUsers = users => (
        <div className="row">
            {users.map((user, i) => (
                <div className="card col-md-4" key={i}>
                    <div className = "mt-2 d-flex justify-content-center"> 
                    <img style = {{height: "150px", width: "150px", padding: '5px', objectFit: "cover", borderRadius: "50%"}} className = "img-thumbnail" src = {`${(process.env.NODE_ENV 
=== 'production') ? '' : process.env.REACT_APP_API_URL}/user/photo/${user._id }`} 
                    onError = {i => (i.target.src = `${DefaultProfile}`)}
                    alt = {user.name}
                     />
                     </div>
                    <div className="card-body text-center">
                        <h5 className="card-title">{user.name}</h5>
                        <p className="card-text">{user.email}</p>
                        <Link
                            to={`/user/${user._id}`}
                            className="btn btn-raised btn-primary btn-sm"
                        >
                            View Profile
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );


    render() {
        const {users} = this.state
        return (
            <div className = "container">
               <h2>Users</h2> 
               {this.renderUsers(users)}
            </div>
        )
    }
}

export default Users
