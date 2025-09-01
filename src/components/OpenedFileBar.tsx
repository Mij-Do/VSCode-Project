import { useSelector } from "react-redux";
import OpenedFilesBarTab from "./OpenedFilesBarTab";
import type { RootState } from "../app/store";

interface IProps {

}

const OpenedFileBar = ({}: IProps) => {
    const {openedFiles, clickedFile} = useSelector((state: RootState) => state.fileTree)
    return (
        <div>
            <div className="flex">
                {openedFiles.map(file => <OpenedFilesBarTab file={file} />)}
            </div>
            <div>
                {clickedFile.filecontent}
            </div>
        </div>
    )
}

export default OpenedFileBar;