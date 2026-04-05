import { readdir, stat } from 'node:fs/promises'
import { join } from 'node:path'


// Recuperar la carpeta a listar
const dir = process.argv[2] ?? '.'


// Formateo simple de los tamaños
const formatBytes = (size) => {
    if (size < 1024) return `${size} B`
    return `${(size / 1024).toFixed(2)} KB`
}

// Leer los nombres, sin info
const files = await readdir(dir)



// Recuperar la info 
const entradas = await Promise.all(
    files.map(async (name) => {
        const fullPath = join(dir, name)
        const info = await stat(fullPath)


        return {
            name,
            isDir: info.isDirectory(),
            size: formatBytes(info.size)
        }
    }) 
)

for (const entrada of entradas) {
    const icon = entrada.isDir ? '🗂️' : '🧾'
    const size = entrada.isDir ? '-' : `${entrada.size}`
    console.log(`${icon} ${entradas.name} ${size}`)
}


