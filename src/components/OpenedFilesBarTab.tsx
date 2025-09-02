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
    const onRemove = (id: string) => {
        const filtered = openedFiles.filter(file => file.id !== id);
        const lastTap = filtered[filtered.length -1];
        if (!lastTap) {
            dispatch(setOpenedFile([]));
            dispatch(setClickedFiles({activeId: null, filecontent: "", filename: ""}));
            return;
        }
        dispatch(setOpenedFile(filtered));
        dispatch(setClickedFiles({activeId: lastTap.id, filecontent: lastTap.content, filename: lastTap.name}));
    }
    return (
        <div className="flex space-x-5 border-b cursor-pointer">
            <div className={`${clickedFile.activeId === id ? 'border-[#cf6ccf]' : 'border-t-transparent'} cursor-pointer flex space-x-1 items-center border-t-2 p-2`} onClick={onClick}>
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