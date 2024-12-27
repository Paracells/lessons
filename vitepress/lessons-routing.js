// Преобразует папки из lessons в роутинг для vitepress
/*
import fs from 'node:fs';
import path from 'node:path';

const startPath = "../lessons"

const routes = []
let index = 0;


const recursiveFiles = (fullPath) => {
    let files = [];
    fs.readdirSync(fullPath).forEach(file => {
        const absolutePath = path.join(fullPath, file);
        if (fs.statSync(absolutePath).isDirectory()) {
            const filesFromNestedFolder = recursiveFiles(absolutePath);
            filesFromNestedFolder.forEach(file => {
                if (file.endsWith(".md")) {
                    files.push(file);
                }
            })
        } else return files.push(absolutePath);
    });
    return files
}


function generateRoutes() {
    const folders = recursiveFiles(startPath)
    let items = []

    folders.forEach(folder => {
        const raw = folder.split("\\")

        if (!routes[index]?.text) {
            routes[index] = {
                text: raw[2]
            }
        }


        if (routes[index].text === raw[2]) {
            items.push({
                text: raw.at(-1).slice(0, -3), link: `/${raw.at(-1)}`,
            })
        } else {
            routes[index] = {
                ...routes[index],
                collapsed: false,
                items
            }

            index++
            items = []
        }

    })

    return routes;
}

export { generateRoutes }

*/
