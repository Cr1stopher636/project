import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { join, basename, extname } from 'node:path'

let content = ''

if (process.permission.has('fs-read', './archivo.txt')) {
    content = await readFile('archivo.txt', 'utf-8')
    console.log(content)
} else {
    console.log('No tiene permiso para leer el archivo')
}

const afueraDeCarpeta = join('afueraDeCarpeta', 'segundaCarpeta')

if (process.permission.has('fs-write', './afueraDeCarpeta')) {

    await mkdir(afueraDeCarpeta, { recursive: true })

    const UppercaseContent = content.toUpperCase()
    const afueraDePath = join(afueraDeCarpeta, 'archivo-uppercase.txt')

    console.log('La extension es: ', extname(afueraDePath))
    console.log('El nombre del fichero es: ', basename(afueraDePath))

    await writeFile(afueraDePath, UppercaseContent)
    console.log("Archivo con contenido creado en mayusculas")

} else {
    console.log("No tiene permiso para escribir en la carpeta especificada")
}