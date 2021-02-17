import React from 'react';
import { useSelector } from 'react-redux';
import {Table, TableBody, TableCell, TableHead, TableRow, Paper, Button} from '@material-ui/core'
import {RootState} from "../../modules";
import {Category} from "../../types";
import {CreateCategoryModal} from "../../components/modals";

type Props = {
    create: (s: string) => void
}

type BtnProps = {
    label: string,
    width?: string,
    height?: string,
    onClick?: () => void
    background?: string
}

const CrudCategoriesContainer = ({ create }: Props) => {
    const { categories } = useSelector((state: RootState) => state.CategoryReducer);
    const [ hidden, setHidden ] = React.useState<boolean>(true);

    const Btn = React.useCallback(({ label, width, height, onClick, background }: BtnProps) => (
        <Button style={{ cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '4pt',
            width: width ? width : '40pt', height: height ? height : '30pt',
            background: `${background ? background : 'gray'} 0% 0% padding-box no-repeat`, borderRadius: '10pt', border: 0 }}
             onClick={onClick && onClick}>
            <span style={{ fontSize: '9pt', fontWeight: 'bold', color: background ? '#000' : '#FFF' }}>
                {label}
            </span>
        </Button>
    ), [])

    return (
        <React.Fragment>
            <div style={{ }}>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', marginBottom: '8pt' }}>
                    { Btn({ label: '등록', width: '60pt', height: '30pt', onClick: () => setHidden(false) }) }
                </div>
                <Paper style={{ width: '100%' }}>
                    <Table style={{ minWidth: '700px'}}>
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ fontWeight: 'bold' }}>카테고리명</TableCell>
                                <TableCell style={{ fontWeight: 'bold' }} align="right">등록된 컨텐츠 개수</TableCell>
                                <TableCell align="right">-</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            { categories && categories.map((row: Category) => (
                                <TableRow key={row.id}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{30}</TableCell>
                                    <TableCell align="right" style={{ display: 'flex', flexDirection: 'row-reverse' }}>
                                        { Btn({ label: '수정', background: '#FFE94A' }) }
                                        { Btn({ label: '삭제', background: 'gray' }) }
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
            </div>
            {
                !hidden &&
                    <CreateCategoryModal hidden={hidden} close={() => setHidden(true)} create={create} />
            }
        </React.Fragment>
    )
}

export default CrudCategoriesContainer;