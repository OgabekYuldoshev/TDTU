import React from 'react'
import { Collapse } from 'antd'
import './index.css'

const Item = ({ header, children, ...props }) => (
    <Collapse.Panel
        {...props}
        header={header}
    >
        {children}
    </Collapse.Panel>
)

export default Item
