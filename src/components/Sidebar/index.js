import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
  return (
  <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
          <CloseIcon/>
      </Icon>
      <SidebarWrapper>
          <SidebarMenu>
              <SidebarLink to="nieuws" onClick={toggle}>HOME</SidebarLink>
              <SidebarLink to="nieuws" onClick={toggle}>NIEUWS</SidebarLink>
              <SidebarLink to="nieuws" onClick={toggle}>MENSEN</SidebarLink>
              <SidebarLink to="nieuws" onClick={toggle}>STANDPUNTEN</SidebarLink>
              <SidebarLink to="nieuws" onClick={toggle}>CONTACT</SidebarLink>
          </SidebarMenu>
          <SideBtnWrap>
              <SidebarRoute to ='/word-lid'>
                  WORD LID
              </SidebarRoute>
          </SideBtnWrap>
      </SidebarWrapper>
  </SidebarContainer>
  );
};

export default Sidebar;
