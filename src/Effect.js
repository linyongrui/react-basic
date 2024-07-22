import { useState, useEffect } from "react"

function EffectSon() {
    useEffect(
        () => {
            const timer = setInterval(() => {
                console.log('effect son')
            }, 1000);
            return ()=>{
                clearInterval(timer)
            }
        }, []
    )
    return (<div>EffectSon component</div>)

}

function useAaaa () {
    const [show, setShow] = useState(true);
    function updateShow () {
        setShow(!show)
    }
    return {
        show,updateShow
    }
}

function Effect() {
    // const URL = 'http://localhost:3001/api/students'
    // const [list, setList] = useState([]);
    // useEffect(() => {
    //     async function getList() {
    //         const resp = await fetch(URL)
    //         const jsonResp = await resp.json();
    //         console.log(jsonResp)
    //         setList(jsonResp);
    //     }
    //     getList();
    // }, []);

    // const [count,setCount] = useState(0);
    // useEffect(
    //     () => {
    //         console.log('Effect...')
    //     }
    //     , [count]
    // )

    // const [show, setShow] = useState(true);
    // function updateShow () {
    //     setShow(!show)
    // }

    const {show, updateShow} = useAaaa();

    return (
        <div>
            {/* <div>call API result:</div>
            <ul>
                {list.map(item => <li key={item.id}>{item.name}</li>)}
            </ul> */}

            {/* <div>effect component,{count}</div>
            <button onClick={()=>setCount(count+1)}>add</button> */}

            {show && <EffectSon />}
            <button onClick={updateShow}>clear</button>
        </div>

    )
}

export default Effect;