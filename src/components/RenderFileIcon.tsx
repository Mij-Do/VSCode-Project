import IconImg from "./IconImg";
import FileIcon from "./SVG/File";

interface IProps {
    filename: string;
    isFolder:boolean;
    isOpen: boolean;
}

const RenderFileIcon = ({filename, isFolder, isOpen}: IProps) => {
    const extention = filename.split('.').pop();

    // files
    if (extention === "tsx") return <IconImg src="/icons/react_ts.svg"/>
    if (extention === "jsx") return <IconImg src="/icons/react.svg"/>
    if (extention === "ts") return <IconImg src="/icons/typescript.svg"/>
    if (extention === "js") return <IconImg src="/icons/javascript.svg"/>
    if (extention === "css") return <IconImg src="/icons/css.svg"/>
    if (extention === "html") return <IconImg src="/icons/html.svg"/>

    // folders
    if (extention === "node_modules" && isFolder) return isOpen ? 
    <IconImg src="/icons/folder-node-open.svg"/> : <IconImg src="/icons/folder-node.svg"/>
    if (extention === "public" && isFolder) return isOpen ? 
    <IconImg src="/icons/folder-public-open.svg"/> : <IconImg src="/icons/folder-public.svg"/>
    if (extention === "svg" && isFolder) return isOpen ? 
    <IconImg src="/icons/folder-svg-open.svg"/> : <IconImg src="/icons/folder-svg.svg"/>
    if (extention === "src" && isFolder) return isOpen ? 
    <IconImg src="/icons/folder-src-open.svg"/> : <IconImg src="/icons/folder-src.svg"/>
    if (extention === "components" && isFolder) return isOpen ? 
    <IconImg src="/icons/folder-components-open.svg"/> : <IconImg src="/icons/folder-components.svg"/>





    if(isFolder && isOpen) return <IconImg src="/icons/folder-default-open.svg"/>
    if(isFolder && !isOpen) return <IconImg src="/icons/folder-default.svg"/>
    return <FileIcon /> 
}

export default RenderFileIcon;