import type { IFile } from "../interfaces";

export const FileTree: IFile = {
    name: "project tree",
    isFolder: true,
    children: [
        {
            name: "node_modules",
            isFolder: true,
            children: [
                {
                    name: ".vite",
                    isFolder: true,
                    children: [
                        {
                            name: "react.js",
                            isFolder: false,
                            content: `let Hello = document.getElementById("hello");`
                        },
                        {
                            name: "alert.js",
                            isFolder: false,
                            content: `let World = document.getElementById("world");`
                        },
                    ]
                }
            ]
        },
        {
            name: "public",
            isFolder: true,
            children: [
                {
                    name: "svg",
                    isFolder: true,
                }
            ]
        },
        {
            name: "src",
            isFolder: true,
            children: [
                {
                    name: "components",
                    isFolder: true,
                    children: [
                        {
                            name: "index.html",
                            isFolder: false,
                            content: `<div> <P> Hello, World </p> </div>`
                        },
                        {
                            name: "index.css",
                            isFolder: false,
                            content: "Hello, World => From CSS File"
                        },
                        {
                            name: "index.js",
                            isFolder: false,
                            content: `const Hello = {greeting: "Hello, World .. From JS"}`
                        },
                        {
                            name: "index.ts",
                            isFolder: false,
                            content: `const Hello = {greeting: "Hello, World .. From TS"}`
                        },
                    ]
                }
            ]
        }
    ]
}