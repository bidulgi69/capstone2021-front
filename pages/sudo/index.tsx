import React from 'react';
import { Divider } from "@material-ui/core";
import styled from 'styled-components';
import { SudoNavigation } from "../../src/components";

const TabTitle = styled.span`
    font-family: sans-serif;
    font-size: 32pt;
    font-weight: bold;
    color: #000;
`

const Sudo = () => {
    const [ tabIdx, setTabIdx ] = React.useState<number>(0);

    const modifyTab = (selected: number) => {
        if (tabIdx === selected) return;
        else setTabIdx(selected);
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', height: '100vh' }}>
            <SudoNavigation modifyTab={modifyTab} />
            <Divider orientation={'vertical'} flexItem />
            <div style={{ width: 'calc(100% - 200pt)', marginTop: '100pt', paddingLeft: '16pt' }}>
                {
                    tabIdx === 0 &&
                        <div style={{ width: '100%', height: 'calc(100vh - 100pt)', backgroundColor: 'green'}}>
                            <TabTitle>
                                컨텐츠 관리
                            </TabTitle>
                        </div>
                }
                {
                    tabIdx === 1 &&
                        <div style={{ width: '100%', height: 'calc(100vh - 100pt)', backgroundColor: 'skyblue'}}>
                            <TabTitle>
                                사용자 관리
                            </TabTitle>
                        </div>
                }
            </div>
        </div>
    )
}

export default Sudo;