import { useState } from 'react';
import type { IFile } from '../interfaces';
import File from './SVG/File';
import BottomArrowIcon from './SVG/Bottom';
import RightArrowIcon from './SVG/Right';
import FolderIcon from './SVG/Folder';

interface IProps {
    fileTree: IFile;
}

const RecursiveComponent = ({fileTree}: IProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(true);
    const toggle = () => {
        setIsOpen(prev => !prev);
    }
    return (
        <div className='mt-1 ml-2 cursor-pointer'>
            <div className='flex items-center mb-1'>
                {fileTree.isFolder ? 
                    <div className='flex items-center' onClick={toggle}>
                        {isOpen ? <BottomArrowIcon /> : <RightArrowIcon />}
                        <div className='flex items-center'>
                            <FolderIcon />
                            <span>{fileTree.name}</span>
                        </div>
                    </div>
                    :
                    <div className='flex items-center'>
                        <File />
                        <span>{fileTree.name}</span>
                    </div>
                }
            </div>
            {fileTree.children && isOpen && fileTree.children.map((file, idx) => <RecursiveComponent key={idx} fileTree={file}/>)}
        </div>
    )
}

export default RecursiveComponent;