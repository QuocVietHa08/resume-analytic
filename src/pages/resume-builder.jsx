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
      setThemeColor: (value) => set(() => ({ themeColor: value })),
      setFontFamily: (value) => set(() => ({ fontFamily: value })),
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
    <StoreProvider>
      <ResumeBuilderComp />
    </StoreProvider>
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