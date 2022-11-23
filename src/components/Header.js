import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import {auth, storage} from './../firebase.js';
import ImageUpload from './ImageUpload.js';


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
        setOpen(false); //close the modal on sign in
    }

    const signIn = (event) => {
        event.preventDefault();

        auth
        .signInWithEmailAndPassword(email, password)
        .catch((error) => alert(error.message)) //if there is an error, catch it and show the error message in an alert
        setOpenSignIn(false); //close the modal on sign in   
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
    const [openUpload, setOpenUpload] = useState(false);
    const [openSignIn, setOpenSignIn] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(null);
    const [progress, setProgress] = useState(0);

    const handleUpload = () => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        //storage.ref = access the storage and get a reference
        //images/${image.name} = image folder, image.name is the name of the file on the local machine;
        //.put(image) put the image that is grabbed into the storage of firebase
        uploadTask.on(
            "state_Changed",
            (snapshot) => { //tracks progress 
                Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progress);
            }
        )
    }

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
                <div>
                    <Button onClick={() => setOpenSignIn(true)}>Sign in</Button>
                    <Button onClick={handleOpen}>Sign up</Button>
                </div>
            )}            
                {/* Sign up modal */}

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
              <Button onClick={() => auth.signOut()}>Log out</Button>
            ): (
              <Button onClick={signUp} type="submit">Sign in</Button>
            )}
          </center>
            </Box> 
          </Modal>
        </form>

            {/* Sign in modal */}

        <form>
          <Modal
            open={openSignIn}
            onClose={() => setOpenSignIn(false)}
          >
            <Box sx={style}>
          <center>
            <img src={require('../img/logo.png')}>
            </img>
          </center>
          <center>
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
              <Button onClick={() => auth.signOut()}>Log out</Button>
            ): (
              <Button onClick={signIn} type="submit">Sign in</Button>
            )}
          </center>
            </Box> 
          </Modal>
        </form>

        <Button onClick={() => setOpenUpload(true)}>Upload</Button>
            <Modal
             open={openUpload}
             onClose={() => setOpenUpload(false)}
            >
            <Box sx={style}>
            <center>
            <img src={require('../img/logo.png')}>
            </img>
            </center>
            <center>
                <ImageUpload/>
            </center>
            <center> 
            <Button onClick={handleUpload}>Upload</Button>
            </center>
            </Box> 
            </Modal>

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
        <ul>
            <li>
                <BasicModal/>
            </li>
        </ul>
        </nav>
    </header>
    )
}

export {Header}