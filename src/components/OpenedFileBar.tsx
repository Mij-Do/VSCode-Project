import { useSelector } from "react-redux";
import OpenedFilesBarTab from "./OpenedFilesBarTab";
import type { RootState } from "../app/store";
import HighLighter from "./HighLighter";

interface IProps {

}

const OpenedFileBar = ({}: IProps) => {
    const {openedFiles, clickedFile} = useSelector((state: RootState) => state.fileTree)
    return (
        <div className="space-y-3">
            <div className="flex">
                {openedFiles.map(file => <OpenedFilesBarTab file={file} />)}
            </div>
            <div>
                <HighLighter content={`${clickedFile.filecontent}`}/>
            </div>
        </div>
    )
}

export default OpenedFileBar;