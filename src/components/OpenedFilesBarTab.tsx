import { useDispatch } from "react-redux";
import RenderFileIcon from "./RenderFileIcon";
import CloseIcon from "./SVG/CloseIcon";
import { setClickedFiles } from "../app/features/fileTreeSlice";
import type { IFile } from "../interfaces";

interface IProps {
    file: IFile;
}


const OpenedFilesBarTab = ({file}: IProps) => {
    const dispatch = useDispatch();
    const {name, content} = file;
    const onClick = () => {
        dispatch(setClickedFiles({filename: name, filecontent: content}));
    }
    return (
        <div className="flex space-x-5 border-b cursor-pointer">
            <div className="flex items-center space-x-0.5 p-2" onClick={onClick}>
                <RenderFileIcon filename={file.name} />
                <span>{file.name}</span>
                <span><CloseIcon /></span>
            </div>
        </div>
    )
}

export default OpenedFilesBarTab;