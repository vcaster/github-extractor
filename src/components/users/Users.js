import React, { Component } from 'react'
import Useritem from './Useritem'

class Users extends Component {
    state = {
        user : [
            {
                "login": "mojombo",
                "id": 1,                
                "avatar_url": "https://avatars0.githubusercontent.com/u/1?v=4",
                "url": "https://api.github.com/users/mojombo",
                "html_url": "https://github.com/mojombo"
                
              },
              {
                "login": "defunkt",
                "id": 2,
                "avatar_url": "https://avatars0.githubusercontent.com/u/2?v=4",
                "url": "https://api.github.com/users/defunkt",
                "html_url": "https://github.com/defunkt"
                
              },
              {
                "login": "pjhyett",
                "id": 3,
                "avatar_url": "https://avatars0.githubusercontent.com/u/3?v=4",
                "url": "https://api.github.com/users/pjhyett",
                "html_url": "https://github.com/pjhyett"
                
              },
              {
                "login": "wycats",
                "id": 4,
                "avatar_url": "https://avatars0.githubusercontent.com/u/4?v=4",
                "url": "https://api.github.com/users/wycats",
                "html_url": "https://github.com/wycats"
                
              },
              {
                "login": "ezmobius",
                "id": 5,
                "avatar_url": "https://avatars0.githubusercontent.com/u/5?v=4",
                "url": "https://api.github.com/users/ezmobius",
                "html_url": "https://github.com/ezmobius"
                
              }
        ]
    }
    render() {
        return (
            <div style={userStyle}>
                {this.state.user.map(user => (
                    <Useritem key={user.id} user={user} />
                ))}                
            </div>
        )
    }
}
const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default Users
