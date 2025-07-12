import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer.prompt
([
    {
        //Getting Input from user
        message: "Enter your URL:",
        name: "URL",
    }
])
.then((answers) => {
    const url = answers.URL;
    // Convert it into a qr image
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_image.png"));

    //Save the URL content in to a text file
    fs.writeFile("URL.txt", url, (err) => {
        if (err) throw err;
        console.log("File has been saved!");
    });
})
.catch((error) => {
    console.log(error);
});
