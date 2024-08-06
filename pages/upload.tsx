// Upload successful! videos/ap-south-1:9576007c-a938-c03d-4615-dbc1b99bc041/RavanHeadReplace.mp4
import { useState, ChangeEvent } from "react";
import { uploadData } from "aws-amplify/storage";

export default function Upload() {
  const [file, setFile] = useState<File | null>(null); // Specify the type for the file state

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (file) {
      try {
        const uploadres = await uploadData({
          path: ({ identityId }) => `videos/${identityId}/${file.name}`,
          data: file,
        });

        console.log("Upload result:", uploadres);
        alert("Upload successful!" + (await uploadres.result).path);
      } catch (error) {
        console.error("Upload failed:", error);
        alert("Upload failed. Please try again.");
      }
    } else {
      alert("Please select a file to upload.");
    }
  };

  return (
    <div>
      <input type="file" onChange={handleChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}
