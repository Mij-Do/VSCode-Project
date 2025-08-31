import FileComponents from './components/FileComponents';
import FolderComponents from './components/FolderComponents';
interface IProps {

}

const App = ({}: IProps) => {
    return (
        <>
            <FileComponents />
            <FolderComponents />
        </>
    )
}

export default App;