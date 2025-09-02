import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { setOpenedFile } from "../app/features/fileTreeSlice";

interface IProps {
    menuPosition: {
        x: number;
        y: number;
    }
    setShowDropMenu: (val: boolean) => void;
}

const DropMenu = ({menuPosition: {x, y}, setShowDropMenu}: IProps) => {
    const dispatch = useDispatch();
    const menuRef = useRef<HTMLDivElement | null>(null);
    const onClickHandle = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setShowDropMenu(false);
        }
    }
    const onClose = () => {
        dispatch(setOpenedFile([]));
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
                <li className="hover:bg-gray-600 hover:text-white w-full p-1 rounded-md transition-all">Close</li>
                <li onClick={onClose} className="hover:bg-gray-600 hover:text-white w-full p-1 rounded-md transition-all">Close All</li>
            </ul>
        </div>
    )
}

export default DropMenu;