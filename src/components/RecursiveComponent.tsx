import { useState } from 'react';
import type { IFile } from '../interfaces';
import BottomArrowIcon from './SVG/Bottom';
import RightArrowIcon from './SVG/Right';
import RenderFileIcon from './RenderFileIcon';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveId, setOpenedFile } from '../app/features/fileTreeSlice';
import type { RootState } from '../app/store';
import { doesFileObjectExist } from '../utils';
interface IProps {
    fileTree: IFile;
}

const RecursiveComponent = ({fileTree}: IProps) => {
    const dispatch = useDispatch();
    const {openedFiles} = useSelector((state: RootState) => state.fileTree);
    const [isOpen, setIsOpen] = useState<boolean>(true);
    // handlers
    const toggle = () => {
        setIsOpen(prev => !prev);
    }
    const onFileClicked = () => {
        const exists = doesFileObjectExist(openedFiles, fileTree.id);
        if (exists) return;
        dispatch(setOpenedFile([...openedFiles, fileTree]));
        dispatch(setActiveId(fileTree.id));
    }
    return (
        <div className='mt-1 ml-2 cursor-pointer'>
            <div className='flex items-center mb-1'>
                {fileTree.isFolder ? 
                    <div className='flex items-center' onClick={toggle}>
                        {isOpen ? <BottomArrowIcon /> : <RightArrowIcon />}
                        <div className='flex items-center'>
                            <RenderFileIcon filename={fileTree.name} isFolder={fileTree.isFolder} isOpen={isOpen}/>
                            <span>{fileTree.name}</span>
                        </div>
                    </div>
                    :
                    <div className='flex items-center' onClick={onFileClicked}>
                        <RenderFileIcon filename={fileTree.name} isFolder={fileTree.isFolder} isOpen={isOpen}/>
                        <span>{fileTree.name}</span>
                    </div>
                }
            </div>
            {fileTree.children && isOpen && fileTree.children.map((file, idx) => <RecursiveComponent key={idx} fileTree={file}/>)}
        </div>
    )
}

export default RecursiveComponent;