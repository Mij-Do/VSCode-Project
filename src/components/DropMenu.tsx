import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setClickedFiles, setOpenedFile } from "../app/features/fileTreeSlice";
import type { RootState } from "../app/store";

interface IProps {
    menuPosition: {
        x: number;
        y: number;
    }
    setShowDropMenu: (val: boolean) => void;
}

const DropMenu = ({menuPosition: {x, y}, setShowDropMenu}: IProps) => {
    const dispatch = useDispatch();
    const {openedFiles, closeTapId} = useSelector((state: RootState) => state.fileTree);
    const menuRef = useRef<HTMLDivElement | null>(null);
    const onClickHandle = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setShowDropMenu(false);
        }
    }
    const onClose = () => {
        const filtered = openedFiles.filter(file => file.id !== closeTapId);
        const lastTap = filtered[filtered.length -1];
        if (!lastTap) {
            dispatch(setOpenedFile([]));
            dispatch(setClickedFiles({activeId: null, filecontent: "", filename: ""}));
            return;
        }
        dispatch(setOpenedFile(filtered));
        dispatch(setClickedFiles({activeId: lastTap.id, filecontent: lastTap.content, filename: lastTap.name}));
        setShowDropMenu(false);
    }
    const onCloseAll = () => {
        dispatch(setOpenedFile([]));
        setShowDropMenu(false);
    }
    useEffect(() => {
        window.addEventListener("click", onClickHandle);

        // cleanUp
        return () => {
            window.removeEventListener("click", onClickHandle);
        }
    }, [setShowDropMenu]);
    return (
        <div ref={menuRef} style={{
            position: "absolute",
            top: y,
            left: x,
        }}>
            <ul className="bg-white text-black p-2 rounded-md cursor-pointer">
                <li onClick={onClose} className="hover:bg-gray-600 hover:text-white w-full p-1 rounded-md transition-all">Close</li>
                <li onClick={onCloseAll} className="hover:bg-gray-600 hover:text-white w-full p-1 rounded-md transition-all">Close All</li>
            </ul>
        </div>
    )
}

export default DropMenu;