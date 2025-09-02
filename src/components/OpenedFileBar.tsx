import { useSelector } from "react-redux";
import OpenedFilesBarTab from "./OpenedFilesBarTab";
import type { RootState } from "../app/store";


interface IProps {

}

const OpenedFileBar = ({}: IProps) => {
    const {openedFiles} = useSelector((state: RootState) => state.fileTree);
    return (
        <div className="space-y-3">
            <div className="flex">
                {openedFiles.map(file => <OpenedFilesBarTab file={file} />)}
            </div>
        </div>
    )
}

export default OpenedFileBar;