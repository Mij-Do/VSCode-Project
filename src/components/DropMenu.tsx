interface IProps {
    menuPosition: {
    x: number;
    y: number;
}
}

const DropMenu = ({menuPosition: {x, y}}: IProps) => {
    return (
        <div style={{
            position: "absolute",
            top: y,
            left: x,
        }}>
            <ul className="bg-white text-black p-2 rounded-md cursor-pointer">
                <li className="hover:bg-gray-600 hover:text-white w-full p-1 rounded-md transition-all">Close</li>
                <li className="hover:bg-gray-600 hover:text-white w-full p-1 rounded-md transition-all">Close All</li>
            </ul>
        </div>
    )
}

export default DropMenu;