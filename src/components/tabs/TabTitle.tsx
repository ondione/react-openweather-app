import React , { FC,useCallback }  from 'react';
type Props = {
    title:string;
    index:number;
    setSelectedTab:(index:number) => void
    selectTab:number
}

const TabTitle:FC<Props> = ({ title, index, setSelectedTab,selectTab}) => {
    const onClick = useCallback(()=>{
        setSelectedTab(index);
    },[setSelectedTab, index]);

  return(
    <>
     <li className={`li ${selectTab == index ? 'active': ''  }` }  >
        <span onClick={onClick}>{title}</span>
     </li>
    </>
  )
}
export default TabTitle;