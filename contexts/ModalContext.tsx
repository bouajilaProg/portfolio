"use client"
import React, { createContext, useEffect, useState } from 'react';
import { ModalContextType } from './ContextsTypes';

interface ModalContextProps {
  children: React.ReactNode;
}


const ModalContext = createContext<ModalContextType | undefined>(undefined);

function ModalProvider({ children }: ModalContextProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <ModalContext.Provider value={{ isModalOpen, setIsModalOpen }}>
      {children}
    </ModalContext.Provider>
  );
}

export { ModalProvider, ModalContext };
