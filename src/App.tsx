import OpenedFileBar from './components/OpenedFileBar';
import RecursiveComponent from './components/RecursiveComponent';
import { FileTree } from './data/FileTree';
interface IProps {

}

const App = ({}: IProps) => {
    return (
        <div className='flex space-x-10'>
            <RecursiveComponent fileTree={FileTree}/>
            <OpenedFileBar />
        </div>
    )
}

export default App;