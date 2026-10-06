const fs = require("fs")

const command = process.argv[2]
const fileName = process.argv[3]
const     data = process.argv[4]

function fileActivity()
{
    if(!fileName)
    {
       console.log("Enter the fileName");
       return;
    }

    switch(command)
    {
        case "create":
            if(!data)
            {
                console.log("Enter tha valid data");
                return;
            }
            fs.writeFileSync(fileName, data);
            break;

        case "read":
            const val = fs.readFileSync(fileName, "utf-8");
            console.log(val);
            break;

        case "update":
            if(!data)
            {
                console.log("Enter valid data");
                return;
            }
            fs.appendFileSync(fileName, "\n" + data);
            break;

        case "delete":
            fs.unlinkSync(fileName);
            break;


        default:
            console.log("invalid fileName");
            
    }
}
fileActivity();