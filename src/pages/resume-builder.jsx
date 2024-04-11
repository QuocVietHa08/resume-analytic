import React from 'react';
import { createContext, useContext, useRef } from 'react'
import { createStore, useStore } from 'zustand'
import ResumeBuilderComp from '@/components/pages/resume-builder';

const StoreContext = createContext(null)

const StoreProvider = ({ children }) => {
  const storeRef = useRef()
  if (!storeRef.current) {
    storeRef.current = createStore((set) => ({
      themeColor: '#1255CC',
      fontFamily: 'Nunito',
      layout: 'Basic',
      setThemeColor: (value) => set(() => ({ themeColor: value })),
      setFontFamily: (value) => set(() => ({ fontFamily: value })),
      setLayout: (value) => set(() => ({ layout: value })),
    }))
  }
  return (
    <StoreContext.Provider value={storeRef.current}>
      {children}
    </StoreContext.Provider>
  )
}

const ResumeBuilder = () => {
  return (
    <div style={{ minHeight: 'calc(100vh - 45px)', overflow: 'auto'}}>

    <StoreProvider>
      <ResumeBuilderComp />
    </StoreProvider>
    </div>
  );
};

export default ResumeBuilder;

export const useResumeBuilderStore = (selector) => {
  const store = useContext(StoreContext)
  if (!store) {
    throw new Error('Missing StoreProvider')
  }
  return useStore(store, selector)
}