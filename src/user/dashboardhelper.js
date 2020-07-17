import React from 'react';
import styled from 'styled-components';
import {DashLinkGrid, DashLink, DashLabel} from './dashlinkhelper';

const DashStyled = styled.div`
    height: 500px;
    margin: 0px 200px 50px 100px;
`

export function DashHelper({setCategoryWin}){
    return <DashStyled>
        <h1>Admin Options</h1>
        <>
        <DashLinkGrid>
            <DashLink onClick={()=> {
                setCategoryWin("Add Category")
            }}>
                <DashLabel>
                    Add Category
                </DashLabel>
            </DashLink>
            <DashLink><DashLabel>Add Product</DashLabel></DashLink>
            <DashLink><DashLabel>View Order</DashLabel></DashLink>
            <DashLink><DashLabel>Manage Products</DashLabel></DashLink>
            <DashLink><DashLabel>User Information</DashLabel></DashLink>
            </DashLinkGrid>
</>
    </DashStyled>
}