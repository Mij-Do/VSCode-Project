import { useSelector } from "react-redux";
import HighLighter from "./HighLighter";
import OpenedFileBar from "./OpenedFileBar";
import type { RootState } from "../app/store";

const Preview = () => {
    const {clickedFile} = useSelector((state: RootState) => state.fileTree);
    return (
        <>
            <OpenedFileBar />
            <HighLighter content={`${clickedFile.filecontent}`}/>
        </>
    )
}

export default Preview;