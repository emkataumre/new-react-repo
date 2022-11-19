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
                </div>
                <img src={require('../img/post.jpg')}></img>
                <h3>Username: Caption</h3>
            </div>
            )
          }
export {Post};