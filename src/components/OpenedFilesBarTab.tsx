import { useDispatch, useSelector } from "react-redux";
import RenderFileIcon from "./RenderFileIcon";
import CloseIcon from "./SVG/CloseIcon";
import { setActiveId, setClickedFiles } from "../app/features/fileTreeSlice";
import type { IFile } from "../interfaces";
import type { RootState } from "../app/store";

interface IProps {
    file: IFile;
}


const OpenedFilesBarTab = ({file}: IProps) => {
    const dispatch = useDispatch();
    const {activeId} = useSelector((state: RootState) => state.fileTree);
    const {name, content, id} = file;
    const onClick = () => {
        dispatch(setClickedFiles({filename: name, filecontent: content}));
        dispatch(setActiveId(id));
    }
    return (
        <div className="flex space-x-5 border-b cursor-pointer">
            <div className={`flex items-center space-x-0.5 p-2 ${id === activeId ? 'border-t border-[#Cf6CCf]' : 'border-transparent'}`} onClick={onClick}>
                <RenderFileIcon filename={file.name} />
                <span>{file.name}</span>
                <span><CloseIcon /></span>
            </div>
        </div>
    )
}

export default OpenedFilesBarTab;