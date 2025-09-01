import { useSelector } from "react-redux";
import type { RootState } from "../app/store";
import RenderFileIcon from "./RenderFileIcon";
import CloseIcon from "./SVG/CloseIcon";

interface IProps {

}

const OpenedFilesBarTab = ({}: IProps) => {
    const {openedFiles} = useSelector((state: RootState) => state.fileTree);
    return (
        <ul className="flex space-x-5 border-b">
            {openedFiles && openedFiles.map(file => 
                <div className="flex items-center space-x-0.5 p-2">
                    <RenderFileIcon filename={file.name} />
                    <li>{file.name}</li>
                    <CloseIcon />
                </div>
            )}
        </ul>
    )
}

export default OpenedFilesBarTab;