import { exec } from "child_process"

export const AzGroup = () => {

    exec('az group list -o table', (err, stdout, stderr) => {
        if (err) {
            console.log(`stderr: ${stderr}`)
            return
        }
        console.log(`stdout: ${stdout}`)
    })
}