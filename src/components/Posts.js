import React from "react";
import { Avatar } from '@mui/material'

        function Post() {
            return (
             <div className='post'>
                <div>
                    <Avatar 
                    alt= 'emkataumre'
                    src = 'none'
                    />
                    <h3>emkataumre</h3>
                    {/* Avatar component imported from material UI (A react component library). Later I will pass it the username as from the props in <Post/> (rendered in App.js), as well as imageUrl and caption */}
                </div>
                <img src={require('../img/post.jpg')}></img>
                <h3>Username: Caption</h3>
            </div>
            )
          }
export {Post};