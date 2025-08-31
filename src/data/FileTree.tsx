import type { IFile } from "../interfaces";

export const FileTree: IFile[] = [
    {
        name: "VSCode Folder",
        isFolder: true,
        children: [
            {
                name: "node_module",
                isFolder: true,
            },
            {
                name: "index.html",
                isFolder: false,
            },
        ]
    }
]