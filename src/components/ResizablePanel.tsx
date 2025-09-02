import type { ReactNode } from 'react';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';

interface IProps {
    showLeftPanel: boolean;
    defaultSize?: number[];
    leftSide: ReactNode;
    rightSide: ReactNode;
}

const ResizablePanel = ({leftSide, rightSide, defaultSize = [33, 67], showLeftPanel}: IProps) => {
    return (
        <PanelGroup direction="horizontal" autoSaveId='condition'>
            {showLeftPanel && 
                <>
                    <Panel defaultSize={defaultSize[0]} collapsible>
                        {leftSide}
                    </Panel>
                    <PanelResizeHandle className="border-r border-[#4e4e4e]" />
                </>
            }
            <Panel defaultSize={defaultSize[1]}>
                {rightSide}
            </Panel>
        </PanelGroup>
    )
}

export default ResizablePanel;