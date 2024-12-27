// Преобразует папки из roadmap в роутинг для vitepress

import fs from 'node:fs';

const cropLink = "https://github.com/KFalcon2022/lessons/blob/master/lessons/"
const basePath = "./roadmap/Road Map.md"
const indexFile = "./README.md"

function readMarkdownFile(filePath) {
    return fs.readFileSync(filePath, 'utf8');
}

function parseMarkdown(markdownContent) {
    const lines = markdownContent.split('\n');
    const routes = [];
    let currentSection = null;

    lines.forEach(line => {
        if (line.startsWith('##')) {
            const text = line.slice(3).trim();
            currentSection = {
                text,
                collapsed: true,
                items: []
            };
            routes.push(currentSection);
        } else if (currentSection && line.match(/^\*\*\d+\.\*\*/)) {
            let text = ''
            let link = ''

            const match = line.match(/\[(.*?)]/);

            if (match) {
                text = match[1];
            }

            let matchUrl = line.match(/\((https?:\/\/\S+)\)/)

            if (matchUrl) {
                link = matchUrl[1].replace(cropLink, '');
            }

            currentSection.items.push({
                text,
                link
            });
        }
    });

    return routes;
}


function generateRoutes() {
    fs.copyFile(indexFile, "./lessons/index.md", (error) => {
        console.log(error)
    })

    const markdownContent = readMarkdownFile(basePath);

    return parseMarkdown(markdownContent);
}


export {generateRoutes};
