import OpenedFileBar from './components/OpenedFileBar';
import RecursiveComponent from './components/RecursiveComponent';
import ResizablePanel from './components/ResizablePanel';
import { FileTree } from './data/FileTree';
interface IProps {

}

const App = ({}: IProps) => {
    return (
        <div className='flex space-x-10'>
            <ResizablePanel 
                leftSide={<RecursiveComponent fileTree={FileTree}/>}
                rightSide={<OpenedFileBar />}
                showLeftPanel
            />
        </div>
    )
}

export default App;