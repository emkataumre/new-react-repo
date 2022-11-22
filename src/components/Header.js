import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import {auth} from './../firebase.js';

function BasicModal() {

    const signUp = (event) => {
        event.preventDefault(); //Dont refresh on button press
        
        auth
        .createUserWithEmailAndPassword(email, password) //email and password from the state
        .then((authUser) => {
          return authUser.user.updateProfile({
                displayName: username,
            })
        })
        .catch((error) => alert(error.message)) //if there is an error, catch it and show the error message in an alert
    }

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
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(null);

    useEffect(()=> {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                //user logged in
                console.log(authUser);
                setUser(authUser);
            } else {
                //user logged out 
                setUser(null);
            }

            return () => {
                unsubscribe();
            }
            
        }, [user, username])
    })
        
    return (
        <div>
            {user ? (
                <Button onClick={() => auth.signOut()}>Log out</Button>
            ): (
                <Button onClick={handleOpen}>Sign up</Button>
            )}
        <form>
          <Modal
            open={open}
            onClose={handleClose}
          >
            <Box sx={style}>
          <center>
            <img src={require('../img/logo.png')}>
            </img>
          </center>
          <center>
          <TextField 
          className="outlined-basic" 
          label="Username" 
          type="text"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
           />
          <TextField 
          className="outlined-basic" 
          label="Email" 
          type="email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
           />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          </center>
          <center> 
              {user ? (
              <Button onClick={signUp} type="submit">Log out</Button>
            ): (
              <Button onClick={signUp} type="submit">Sign up</Button>
            )}
          </center>
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