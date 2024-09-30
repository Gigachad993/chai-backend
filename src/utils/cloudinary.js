import {v2 as cloudinary} from "cloudinary";
import fs from "fs";

// configration 
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})


// Upload an image
const uploadOnCloudinary = async function (localFilePath) {
    try {
        if (!localFilePath) return null;

        const response =-await cloudinary.uploader.upload(localFilePath, {resource_type: "auto"});

        // File uploaded successfully
        console.log("File has been Uploaded SUCCESSFULLY on Cloudinary!! ", response.url);
        
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath); // remove the locally saved temporary file as the upload
        return null;
    }    
}

export {uploadOnCloudinary};
