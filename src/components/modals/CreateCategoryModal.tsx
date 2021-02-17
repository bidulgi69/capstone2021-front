import React from 'react';
import {Button, Modal} from "@material-ui/core";
import { CloseOutlined } from '@material-ui/icons';
import TextInput from "../TextInput";

type Props = {
    hidden: boolean
    close: () => void
    create: (s: string) => void
}

const CreateCategoryModal = ({ hidden, close, create }: Props) => {
    const [ title, setTitle ] = React.useState<string>('');
    return (
        <Modal open={!hidden} style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div style={{ width: '400pt', background: '#FFF 0% 0% no-repeat padding-box', height: '200pt', padding: '8pt' }}>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-start' }}>
                    <CloseOutlined style={{ cursor: 'pointer', color: '#d64161' }} fontSize={"large"} color={"primary"} onClick={() => close()} />
                </div>
                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', padding: '8pt' }}>
                    <p style={{ color: '#000', fontSize: '17pt', fontWeight: 'bold' }}>
                        카테고리명
                    </p>
                    <TextInput width={'100%'} height={'40pt'} value={title} onChangeValue={(e) => setTitle(e)} />
                    <Button style={{ width: '100%', height: '30pt', backgroundColor: '#FFE94A', marginTop: '12pt' }}
                            onClick={() => { create(title); close(); }}>
                        <span style={{ color: '#000', fontWeight: 'bold', fontSize: '14pt' }}>
                            등록하기
                        </span>
                    </Button>
                </div>
            </div>
        </Modal>
    )
}

export default CreateCategoryModal;