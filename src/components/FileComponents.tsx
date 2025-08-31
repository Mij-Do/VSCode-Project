import File from './SVG/File';

interface IProps {

}

const FileComponents = ({}: IProps) => {
    return (
        <div className='flex space-x-1'>
            <File />
            <span>index.html</span>
        </div>
    )
}

export default FileComponents;