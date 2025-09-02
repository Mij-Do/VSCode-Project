import { useSelector } from 'react-redux';
import Preview from './components/Preview';
import RecursiveComponent from './components/RecursiveComponent';
import ResizablePanel from './components/ResizablePanel';
import { FileTree } from './data/FileTree';
import type { RootState } from './app/store';
import WelcomeImg from './components/WelcomeImg';
interface IProps {

}

const App = ({}: IProps) => {
    const {openedFiles} = useSelector((state: RootState) => state.fileTree);
    return (
        <div className='flex space-x-10'>
            <ResizablePanel 
                leftSide={<RecursiveComponent fileTree={FileTree}/>}
                rightSide={openedFiles.length ? <Preview /> : <WelcomeImg />}
                showLeftPanel
            />
        </div>
    )
}

export default App;