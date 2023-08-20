import React , { FC, ReactElement , useState} from 'react';
import TabTitle from './TabTitle';

type Props = {
    children:ReactElement[]
}

const TabsComponent:FC<Props> = ({children}) => {
    console.log(children , " children")
    const [selectTab, setSelectedTab] = useState(0);
    return (
        <>
        <ul className="ul">
            { children.map((item,index)=>(
                <TabTitle 
                    key={index} 
                    title={item.props.title}
                    index={index}
                    selectTab={selectTab} 
                    setSelectedTab={setSelectedTab}
                />
            ))}
        </ul>
        {children[selectTab]}
        </>
    );
}
export default TabsComponent;