import React from "react";
import { Avatar } from '@mui/material'

        function Post({username, caption, imageUrl}) {
            //Props above
            return (
                //----------------------Post structure---------------------//
             <div className='post'>
                <div>
                    <Avatar 
                    alt= {username}
                    src = 'none'
                    />
                    <h3>{username}</h3>
                </div>
                <img src={imageUrl}></img>
                <h3>{username}: {caption}</h3>
            </div>
            )
          }
export {Post};

