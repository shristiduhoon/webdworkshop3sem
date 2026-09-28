//create-> {write('filename,'data,callback())
//update-> {appendFile('Filename,'data',callback())}
//read->{readFile('Filename',encoder utf,callback)}
//delete
const fs = require('fs');
fs.writeFile('std.txt', 'Name: Shristi', (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("File created");


    fs.readFile('std.txt', 'utf8', (err, data) => {
        if (err) {
            console.log(`Unsuccessful: ${err}`);
            return;
        }

        console.log(`File has been read:\n${data}`);


        fs.appendFile('std.txt', '\nAge: 19', (err) => {
            if (err) {
                console.log(err);
                return;
            }

            console.log("Data appended");

            fs.readFile('std.txt', 'utf8', (err, data) => {
                if (err) {
                    console.log(err);
                    return;
                }

                console.log(`Updated data:\n${data}`);


                fs.unlink('std.txt', (err) => {
                    if (err) {
                        console.log(err);
                        return;
                    }

                    console.log("File deleted successfully");
                });
            });
        });
    });
});

