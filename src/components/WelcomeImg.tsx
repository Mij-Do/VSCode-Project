import IconImg from "./IconImg";
import VSCode from "/icons/vscode.svg"


const WelcomeImg = () => {
    return <div className="h-screen flex items-center justify-center">
                <IconImg src={VSCode} className="w-64 h-64"/>
                <p className="text-[#868686]">Welcome to VSCode ...</p>
            </div>
}

export default WelcomeImg;