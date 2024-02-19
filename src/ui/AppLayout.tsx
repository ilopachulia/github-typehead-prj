import { ReactNode } from 'react';

function AppLayout({children} : {children: ReactNode}){
    return (
        <div className="app-layout">
            {children}
        </div>
    )
}

export default AppLayout;