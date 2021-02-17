import React from 'react';
import {useQuery} from "@apollo/client";
import {GET_CATEGORIES} from "../graphQL/quries";
import Loading from "./Loading";
import Error from "./Error";
import {Category} from "../types";
import styled from 'styled-components';
import {Box, List} from "@material-ui/core";

const Tab = styled.div`
    display: inline-block;
    cursor: pointer;
    width: 120pt;
    height: 40pt;
    borderRadius: 20pt;
    &: hover {
        background-color: #87bdd8;
        color: #FFF;
    }
    border-bottom: ${props => props.selected ? "4pt solid #FFE94A" : "0px solid #000"}
`

const TabTitleShell = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`

const TabTitle = styled.span`
    font-weight: bold;
    font-size: 12pt;
    font-family: sans-serif;
`

type Props = {
    categories: Category[],
    currentIdx: number,
    modifyTab: (modify: number) => void
}

const CategoryTabs = ({ categories, currentIdx, modifyTab }: Props) => {
    return (
        <div style={{ display: 'inline', width: '800pt', height: '50pt', overflowX: 'scroll', whiteSpace: 'nowrap', marginBottom: '16pt' }}>
            <Tab selected={currentIdx === 0} onClick={() => modifyTab(0)}>
                <TabTitleShell>
                    <TabTitle>
                        전체
                    </TabTitle>
                </TabTitleShell>
            </Tab>
            { categories && categories.length > 0 && categories.map((datum: Category, index: number) => (
                <Tab key={datum.id} selected={currentIdx === index + 1} onClick={() => modifyTab(index + 1)}>
                    <TabTitleShell>
                        <TabTitle>
                            {datum.name}
                        </TabTitle>
                    </TabTitleShell>
                </Tab>
            ))}
        </div>
    )
}

export default CategoryTabs;