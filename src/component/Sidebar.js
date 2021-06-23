import React from 'react';
import {ProSidebar, Menu, MenuItem,SidebarHeader, SidebarContent} from 'react-pro-sidebar';
import {FaGem,FaGithub} from 'react-icons/fa';

const Sidebar = () => {
  
  return(
    <ProSidebar>
      <SidebarHeader
      style={{
        padding:'24px',
        letterSpacing: '1px',
        fontFamily: 'Verdana',
        textAlign: 'center',
      }}>
        LegalQA Demo
      </SidebarHeader>
      <SidebarContent>
      <div className="content-wrapper">
        <div className="description">
          AI search engine <a href="https://github.com/jina-ai/jina"><b>Jina</b></a> offers<br/>
          Large-scale indexing and querying of any kind of unstructured<br/>
          : video, image, long/short text, music, source code, PDF, etc.<br/>
        </div>
        <Menu iconShape="square"
        className="menu"
        style={{
          padding:'24px',
          letterSpacing: '1px',
          fontFamily: 'Verdana',
        }}>
          <div><MenuItem icon={<FaGem />}>Legal QA</MenuItem></div>
        </Menu>
        </div>
        <div className="footer">
          <a href="https://github.com/scy6500/Jina-LegalQA"><FaGithub size={25}/></a>
          <div>
            <a href="https://ainize.ai/scy6500/Jina-LegalQA?branch=main"><img src="/images/Group.svg" className="ainize-icon"></img></a>
          </div>
        </div>
      </SidebarContent>
    </ProSidebar>
  );
}

export default Sidebar;