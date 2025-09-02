import { useDispatch, useSelector } from "react-redux";
import RenderFileIcon from "./RenderFileIcon";
import CloseIcon from "./SVG/CloseIcon";
import { setClickedFiles, setOpenedFile } from "../app/features/fileTreeSlice";
import type { IFile } from "../interfaces";
import type { RootState } from "../app/store";

interface IProps {
    file: IFile;
}


const OpenedFilesBarTab = ({file}: IProps) => {
    const dispatch = useDispatch();
    const {openedFiles, clickedFile} = useSelector((state: RootState) => state.fileTree);
    const {name, content, id} = file;
    const onClick = () => {
        dispatch(setClickedFiles({filename: name, filecontent: content, activeId: id}));
    }
    const onRemove = (Id: string) => {
        const filtered = openedFiles.filter(file => file.id !== Id);
        dispatch(setOpenedFile(filtered));
        const {name, content, id} = filtered[filtered.length -1];
        dispatch(setClickedFiles({filename: name, filecontent: content, activeId: id}));
    }
    return (
        <div className="flex space-x-5 border-b cursor-pointer">
            <div className={`flex items-center space-x-0.5 p-2 ${id === clickedFile.activeId ? 'border-t border-[#Cf6CCf]' : 'border-transparent'}`} onClick={onClick}>
                <RenderFileIcon filename={file.name} />
                <span>{file.name}</span>
                <span
                onClick={e => 
                    {
                        e.stopPropagation();
                        onRemove(file.id)
                    }}
                >
                    <CloseIcon />
                </span>
            </div>
        </div>
    )
}

export default OpenedFilesBarTab;