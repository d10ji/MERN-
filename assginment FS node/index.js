const fs = require("fs")
const path = require("path")
const base_path = "./test directory/";



// reading content form existig file. 
fs.readdir(base_path, (err,files_name) => {
    if (err){
        console.log("unable of read");
        console.log(err);
    }
    // console.log(files_name);


//accessing each item in files_name
files_name.forEach( file => {
    // console.log(file);
    // ---------------getting extension ---_------------->
    extension = file.split('.').pop();
    console.log(extension); 


/// ------------ for images ------------>
if (extension == "jpg"|| extension == "png"|| extension == "JPG"|| extension == " jpg"||extension == "PNG")
    {
        // console.log(file);// only getting mp3 files in file this time
        const type = "Images";
        const folder_Name = `${base_path}`+type;  //making folder for mp3 files
        if (!fs.existsSync(folder_Name)) {   // if existinf mp3 skip 
             fs.mkdirSync(folder_Name);
        }
        //   ----------------------------- moving part -----------------------------
        const currentPath = path.join(base_path,file);
        const newPath = path.join(base_path, type, file);
          
        fs.rename(currentPath, newPath, function(err) {
              if (err) {
                throw err
              } else {
                console.log("Successfully moved  ---> " + file)
              }
            })
    }
/// ------------ for Documents ------------>
else if (extension == "docx"||extension == "html"||extension == "pdf"||extension == "pptx"|| extension == "webp")
    {
        // console.log(file);// only getting mp3 files in file this time
        const type = "Documents";
        const folder_Name = `${base_path}`+type;  //making folder for mp3 files
        if (!fs.existsSync(folder_Name)) {   // if existinf mp3 skip 
             fs.mkdirSync(folder_Name);
        }
        //   ----------------------------- moving part -----------------------------
        const currentPath = path.join(base_path,file);
        const newPath = path.join(base_path, type, file);
          
        fs.rename(currentPath, newPath, function(err) {
              if (err) {
                throw err
              } else {
                console.log("Successfully moved  ---> " + file)
              }
            })
    }

// /// -----------  Music and video ------------>
else if (extension == "mp3"||extension == "mp4")
    {
        // console.log(file);// only getting mp3 files in file this time
        const type = "music & videos";
        const folder_Name = `${base_path}`+type;  //making folder for mp3 files
        if (!fs.existsSync(folder_Name)) {   // if existinf mp3 skip 
             fs.mkdirSync(folder_Name);
        }
        //   ----------------------------- moving part -----------------------------
        const currentPath = path.join(base_path,file);
        const newPath = path.join(base_path, type, file);
          
        fs.rename(currentPath, newPath, function(err) {
              if (err) {
                throw err
              } else {
                console.log("Successfully moved  ---> " + file)
              }
            })
    }

// ---------  Other  ------------>
else {
        const type = "other";
        const folder_Name = `${base_path}`+type;  //making folder for mp3 files
        if (!fs.existsSync(folder_Name)) {   // if existinf mp3 skip 
             fs.mkdirSync(folder_Name);
        }
        //   ----------------------------- moving part -----------------------------
        const currentPath = path.join(base_path,file);
        const newPath = path.join(base_path, type, file);
          
        fs.rename(currentPath, newPath, function(err) {
              if (err) {
                throw err
              } else {
                console.log("Successfully moved  ---> " + file)
              }
            })
    }

// ----------------using fucntion -------------------->
// function shifting(para) {
//             const type = `${para} files`;
//             const folder_Name = `${base_path}`+ type;  //making folder for mp3 files
//         if (!fs.existsSync(folder_Name)) {   // if existinf mp3 skip 
//              fs.mkdirSync(folder_Name);
//         }
//         //   ----------------------------- moving part -----------------------------
//         const currentPath = path.join(base_path,file);
//         const newPath = path.join(base_path, type, file);
          
//         fs.rename(currentPath, newPath, function(err) {
//               if (err) {
//                 throw err
//               } else {
//                 console.log("Successfully moved  ---> " + file)
//               }
//             })

//         }// funstion end

// shifting(extension); 


// --------------------------------------------------------------------

  }); // enf of for each

}) //ending of readdir



