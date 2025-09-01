import IconImg from "./IconImg";
import FileIcon from "./SVG/File";
import {extensionIconPath} from "../constant/index";

interface IProps {
    filename: string;
    isFolder:boolean;
    isOpen: boolean;
}

const RenderFileIcon = ({filename, isFolder, isOpen}: IProps) => {
    const extention = filename.split('.').pop();

    if(extention && Object.prototype.hasOwnProperty.call(extensionIconPath, extention)) {
        const IconPath = isFolder ? isOpen ? 
        `${extensionIconPath[extention]}-open.svg` :
        `${extensionIconPath[extention]}.svg` :
        `${extensionIconPath[extention]}.svg`

        return <IconImg src={IconPath}/>
    }


    if(isFolder && isOpen) return <IconImg src="/icons/folder-default-open.svg"/>
    if(isFolder && !isOpen) return <IconImg src="/icons/folder-default.svg"/>
    return <FileIcon /> 
}

export default RenderFileIcon;