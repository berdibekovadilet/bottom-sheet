import React, { useState } from 'react';
import { Drawer, Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import '../App.css';

const BottomDrawer = () => {
    const [isOpen, setIsOpen] = useState(false);

    const showDrawer = () => {
        setIsOpen(true);
    };

    const onClose = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <Button type="primary" onClick={showDrawer}>
                Открыть Drawer
            </Button>
            <Drawer
                className="custom-drawer"
                title={
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h3>Заголовок Drawer</h3>
                        <Button
                            type="text"
                            icon={<CloseOutlined />}
                            onClick={onClose}
                        />
                    </div>
                }
                placement="bottom"
                closable={false}
                onClose={onClose}
                open={isOpen}
                height={300}
                style={{
                    borderTopLeftRadius: '16px',
                    borderTopRightRadius: '16px'
                }}
            >
                <p>Контент Drawer</p>
            </Drawer>
        </div>
    );
};

export default BottomDrawer;
