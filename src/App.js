
import "./App.css";
import { useRef, useState, useEffect } from "react";
import { uploadfile } from "./service/api";
function App() {
  const [file, setfile] = useState('');
  const [result,setresult]=useState('');
  const fileinputref = useRef();
  const logo ="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/31cAgCnCM-L.jpg";
  
  useEffect 
    (() => {
      const getimage = async () => {
        if (file) {
          const data = new FormData();
          data.append("name", file.name);
          data.append("file", file);

          const resp = await uploadfile(data);
          setresult(resp.path);
        }
        
      }
      getimage();
    },
    [file])
    const onuploadclick = () => {
      fileinputref.current.click();
    }

  return (
    <div className="container">
      <img src={logo} alt="banner" />
      <div className="wrapper">
        <h1>SUDO FILE SHARING....</h1>
        <p>Upload and Share the download link.</p>
        <button
          onClick={() => 
            onuploadclick()
          }
        >
          Upload
        </button>
        <input
          type="file"
          ref={fileinputref}
          style={{ display: "none" }}
          onChange={(e) => setfile(e.target.files[0])}
        />
        <a href={result} target="_blank">{result}</a>
      </div>
    </div>
  );
}

export default App;
