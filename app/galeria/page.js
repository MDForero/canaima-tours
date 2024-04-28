import fs from 'fs'

const getFiles = async () => {
    const path = './public/images'
    const images = fs.readdirSync(path, (err, files) => {
        if (err) {
            console.error(err)
            return
        }
return files        
    })
    return images
}


export default async function page() {
    const files = await getFiles()
    return <>
        <div className='grid grid-cols-4 gap-2 grid-flow-row-dense'>
            {files.filter(file=> file.includes('.jpg')).map((file, index) => {
                return <img key={index} src={`/images/${file}`} alt={file} className='h-full object-cover'/>
            })}
        </div>
    </>
}