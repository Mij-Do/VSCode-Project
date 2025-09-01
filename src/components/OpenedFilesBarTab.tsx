import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../app/store";
import RenderFileIcon from "./RenderFileIcon";
import CloseIcon from "./SVG/CloseIcon";
import { setClickedFiles } from "../app/features/fileTreeSlice";



const OpenedFilesBarTab = () => {
    const {openedFiles} = useSelector((state: RootState) => state.fileTree);
    const dispatch = useDispatch();
    return (
        <ul className="flex space-x-5 border-b cursor-pointer">
            {openedFiles && openedFiles.map(file => 
                <div className="flex items-center space-x-0.5 p-2" onClick={() => dispatch(setClickedFiles({filename: file.name, filecontent: file.content}))}>
                    <RenderFileIcon filename={file.name} />
                    <li>{file.name}</li>
                    <CloseIcon />
                </div>
            )}
        </ul>
    )
}

export default OpenedFilesBarTab;