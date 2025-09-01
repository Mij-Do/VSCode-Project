import { useSelector } from "react-redux";
import OpenedFilesBarTab from "./OpenedFilesBarTab";
import type { RootState } from "../app/store";

interface IProps {

}

const OpenedFileBar = ({}: IProps) => {
    const {clickedFile} = useSelector((state: RootState) => state.fileTree)
    return (
        <div>
            <OpenedFilesBarTab />
            <div>{clickedFile.filecontent}</div>
        </div>
    )
}

export default OpenedFileBar;