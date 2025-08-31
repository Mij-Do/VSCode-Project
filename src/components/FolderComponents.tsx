import Folder from './SVG/Folder';

interface IProps {

}

const FolderComponents = ({}: IProps) => {
    return (
        <div className='flex space-x-1'>
            <Folder />
            <span>node_modules</span>
        </div>
    )
}

export default FolderComponents;