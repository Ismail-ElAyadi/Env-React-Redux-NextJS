import React from 'react'
import Connected from '../../Component/Connected'
import { useRouter } from 'next/router'


export default function Profil() {
    const router = useRouter()
    const { pid } = router.query
    return (
            <Connected userName={pid}/>
    )
}