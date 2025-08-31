import type { IFile } from '../interfaces';
import File from './SVG/File';

interface IProps {
    fileTree: IFile;
}

const RecursiveComponent = ({fileTree}: IProps) => {
    return (
        <div className='mt-1 ml-2'>
            {fileTree.isFolder && 
            <div className='flex space-x-1'>
                <File />
                <span>{fileTree.name}</span>
            </div>}
            {fileTree.children && fileTree.children.map((file, idx) => <RecursiveComponent key={idx} fileTree={file}/>)}
        </div>
    )
}

export default RecursiveComponent;