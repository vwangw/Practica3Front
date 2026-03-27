'use client';

import { createContext, ReactNode, useContext, useState } from "react";
import { Album } from "../types";

type ListContextType = {
    list: Album[];

    addList: (item: Album) => void;
    deleteList:(id: number) => void
};

const ListContext = createContext<ListContextType|null>(null)

export const ListProvider=({children}:{children:ReactNode})=>{
    const [list,setList]=useState<Album[]>([])

    const addList=(item:Album)=>{
        if (!list.some(c => c.collectionId === item.collectionId)) {
            setList([...list, item])
        }
    }

    const deleteList = (id: number) => {
        setList(list.filter(c => c.collectionId !== id));
    };

    return(
        <ListContext.Provider value={{list, addList, deleteList}}>
            {children}
        </ListContext.Provider>
    )
}

export const useList =() =>{
    const context = useContext(ListContext);
    if(!context){
        throw new Error('tsx out of ListProvider');
    }
    return context
}