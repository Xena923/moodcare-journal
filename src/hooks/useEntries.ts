import {useEffect,useState} from 'react';
import {mockEntries} from '../data/mock';
import type {Entry} from '../types';
const key='moodcare-entries-v1';
export function useEntries(){const [entries,setEntries]=useState<Entry[]>(()=>{try{const saved=localStorage.getItem(key);return saved?JSON.parse(saved) as Entry[]:mockEntries}catch{return mockEntries}});useEffect(()=>{localStorage.setItem(key,JSON.stringify(entries))},[entries]);return {entries,addEntry:(entry:Entry)=>setEntries(items=>[entry,...items]),updateEntry:(id:string,patch:Partial<Entry>)=>setEntries(items=>items.map(e=>e.id===id?{...e,...patch}:e))}}
