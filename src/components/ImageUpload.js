import React, {useState} from 'react';


function ImageUpload() {
    const [caption, setCaption] = useState("");
    const [image, setImage] = useState(null);
   // const [url, setUrl] = useState("");
    const [progress, setProgress] = useState(0);

    const handleChange = (e) => {
        if (e.target.files[0]) { //get the first file that the user selected
            setImage(e.target.files[0]); //set the image state to that selected file
        }   
    }
  return (
    <div>
      {/* updates the caption variable on the fly */}
      <input placeholder='Write caption' type='text' onChange={event => setCaption(event.target.value)}/>  
      <input type='file' onChange={handleChange}/>
    </div>
  )
}

export default ImageUpload
