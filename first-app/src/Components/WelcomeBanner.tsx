import React from "react";

interface welcomeBannerProps {
    title: string;
    children?: React.ReactNode ; 
}

const welcomeBanner: React.FC<welcomeBannerProps> = ({title ,children}) =>{
    return (
        <div style={{ backgroundColor: 'lightblue', padding: '10px'}}>
            <h2>{title}</h2>
            {children}
        </div>
    );
};

export default welcomeBanner;