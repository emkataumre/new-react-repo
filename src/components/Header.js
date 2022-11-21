import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import {auth} from './../firebase.js';

function BasicModal() {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
    
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
        <Button onClick={handleOpen}>Sign up</Button>
        <form>
          <Modal
            open={open}
            onClose={handleClose}
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
          <center>
            <img src={require('../img/logo.png')}>
            </img>
          </center>
          <center>
          <TextField 
          className="outlined-basic" 
          label="Username" 
          type="text"
          variant="outlined" />
          <TextField 
          className="outlined-basic" 
          label="Email" 
          type="email"
          variant="outlined" />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
          </center>
          <center>
          <Button type="submit">Sign up</Button>
          </center>
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              </Typography>
            </Box>
          </Modal>
        </form>
      </div>
    )
  }

  export {BasicModal};

function Header() { 
      
    return (
    <header>
        <nav>
        <a href='#' className='logo'>
            <img id='logo__img' src={require('../img/logo.png')}></img>
            {/* React won't render a local image unless the syntax is as above. require() is a Node.js alternative to import. Both are virtually the same. I chose to use require() in order to keep my syntax clean */}
        </a>  
        <input type="text" placeholder="Search.."></input>
        <ul>
            <li>
                <a>
                    <img src={require('../img/home.png')}></img>
                </a>
            </li>
            <li>
                <a>
                    <img src={require('../img/message.png')}></img>
                </a>
            </li>
            <li>
                <a>
                    <img src={require('../img/explore.webp')}></img>
                </a>
            </li>
            <li>
                <a>
                    <img src={require('../img/notifications.png')}></img>
                </a>
            </li>
            <li>
                <BasicModal/>
            </li>
        </ul>
        </nav>
    </header>
    )
}

export {Header}