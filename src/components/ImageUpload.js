import React, {useState} from 'react';
import Button from '@mui/material/Button';
import { storage, db } from "./../firebase";
import firebase from 'firebase/compat/app';
import { doc, getDoc } from "firebase/firestore";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"

function ImageUpload({ username }) {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };


  const handleUpload = (imageUrl,setOpenUpload) => {
    const metadata = {
      contentType: 'image/jpeg'
    };
    const storageRef = ref(storage, 'posts/' + doc.id + imageUrl);
    const uploadTask = uploadBytesResumable(storageRef, imageUrl, metadata);

  uploadTask.on('state_changed',
  (snapshot) => {
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
    }
  }, 
  (error) => {
    switch (error.code) {
      case 'storage/unauthorized':
        break;
      case 'storage/canceled':
        break;

      case 'storage/unknown':
        break;
    }
  }, 
  () => {
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      db.collection("posts").add({
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        caption: caption,
        imageUrl: downloadURL,
        username: username,
      });
      console.log('File available at', downloadURL);
    });
  }
);
setOpenUpload = false;
};

  return (
    <div className="imageupload">

      <progress className="imageupload__progress" value={progress} max="100" />
      <input
        type="text"
        placeholder="enter a caption"
        onChange={(event) => setCaption(event.target.value)}
        value={caption}
      />
      <input type="file" onChange={handleChange} />
      <Button onClick={handleUpload}>
        Upload
      </Button>
    </div>
  );
}

export default ImageUpload;