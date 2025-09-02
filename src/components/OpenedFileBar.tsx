import { useSelector } from "react-redux";
import OpenedFilesBarTab from "./OpenedFilesBarTab";
import type { RootState } from "../app/store";
import DropMenu from "./DropMenu";
import { useState } from "react";


interface IProps {

}

const OpenedFileBar = ({}: IProps) => {
    const [menuPosition, setMenuPosition] = useState<{x: number, y: number}>({x: 0, y: 0});
    const [showDropMenu, setShowDropMenu] = useState<boolean>(false);
    const {openedFiles} = useSelector((state: RootState) => state.fileTree);
    return (
        <div className="space-y-3">
            <div className="flex"
                onContextMenu={e => {
                    e.preventDefault();
                    setMenuPosition({x: e.clientX, y: e.clientY});
                    setShowDropMenu(true);
                }}
            >
                {openedFiles.map(file => <OpenedFilesBarTab file={file} />)}
            </div>
            {showDropMenu && <DropMenu menuPosition={menuPosition}/>}
        </div>
    )
}

export default OpenedFileBar;