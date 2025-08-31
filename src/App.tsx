import RecursiveComponent from './components/RecursiveComponent';
import { FileTree } from './data/FileTree';
interface IProps {

}

const App = ({}: IProps) => {
    return (
        <div>
            <RecursiveComponent fileTree={FileTree}/>
        </div>
    )
}

export default App;