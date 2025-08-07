'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import AddNewSession from './AddNewSession'
import axios from 'axios'
import HistoryTable from './HistoryTable'

const HistoryList = () => {
    const [historyList,setHistoryList] = useState([])
    useEffect(()=>{
      fetchHistory();
    },[])

    const fetchHistory = async ()=>{
      const result = await axios.get('/api/session-chat?sessionid=all')
      console.log(result.data);
      setHistoryList(result.data);
    }
  return (
    <div className='mt-10'>
      <h2 className='font-bold text-2xl text-white mb-6'>Recent Consultations</h2>
      {historyList.length == 0 ? (
        <div className='flex items-center justify-center flex-col border-dashed rounded-2xl border-2 border-slate-600 p-7 bg-slate-800/50'>
          <Image src="/logo.svg" alt='empty'
            width={150}
            height={150}/>
          <h2 className='font-bold text-xl mt-2 text-white'>No Recent Consultations</h2>
          <p className='text-gray-300'>It looks like you haven't consulted with any doctors yet</p>
         <AddNewSession/>
        </div>
      ) : (
        <div className='bg-slate-800/50 rounded-xl p-6 border border-slate-600'>
          <HistoryTable historyList={historyList}/>
        </div>
      )}
    </div>
  )
}

export default HistoryList
