import React, { useState, useEffect } from "react"
// ////////////////////////////////// ////////////////////////////////// ///////////////////////////////
const Guest = (props) => {
  const [counter, setCounter] = useState(0)
  const [isLogin, setIsLogin] = useState(false)
  // const [text, setText] = useState("input")
  const onInc = () => {
    setCounter(counter + 1)
    // setCounter(prevCounter=>prevCounter + 1)  bu kod ham yuqoridagi b bir xil ishldi. lekin bu kodni 2 marta yozib qoysak 2taga qoshib yuboradi.
  }
  const onDec = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }
  const onRestart = () => {
    setCounter(0)
  }
  const onLogin = () => {
    setIsLogin({ isLogin: !isLogin })
    // setIsLogin(prevState=>!prevState)   bu prevstate bilan berilgani.
  }
  //useEffect hook imiz class componentdagi component didmount, component did update va component wil unmount hodisalirini ornini bosuvchidir
  //ya'ni saytga kirganda, chiqqanda, nimadir ochirganda, nimanidir update qilganda, ishlatadigan hookimizdir.
  //useEffectda deps- ya'ni qaramlik xususiyati ham bor bu degani yuqoridagi 3ta hodisamiz birdaniga emas faqat biz hohlagan paytda ishlashini xoxlaganimizda kerak boladi.
  // bining uchun useEffectni oxiriga bosh massiv qoyib qoyamiz, massiv ichiga birorga ozgaruvchi bersak osha ozgaruvchini ishlatganimizdagina useEffect ning mount did update qismi ishlaydi.
  //bizda will unmount ni ozi ishlashi uchun biz useEffectni ichida return berishimiz kerak boladi va return ichida callback function chaqirishimiz kerak boladi.
  // uni ishlatishda esa, ochirmoqchi bolan functionlarimizni osha return calbackdan keyin ishlatsak boladi.
  //qoida! react hooklarini faqat function ichida ishlatishimiz kerak, undan tashqarida ishlata olmaymiz.

  useEffect(() => {
    console.log("effect")
    // document.title = `counter: ${counter}`
    return () => console.log("deleted")
  }, [])
  return (
    <div className='w-50 mx-auto'>
      <div className='border p-3 mt-5'>
        <h1>name: {props.fname}</h1>
        <h1>surname: {props.lname}</h1>
        <div className='mt-3'>
          <button onClick={onInc} type='button' className='btn btn-success'>
            add
          </button>
          <button onClick={onDec} type='button' className='btn btn-danger mx-2'>
            remove
          </button>
          <button onClick={onRestart} type='button' className='btn btn-info'>
            restart
          </button>
          <div>
            <span>{counter}</span>
          </div>
        </div>
        <form action=''>
          {/* <span>{text}</span> */}
          <input className='form-control' type='text' />
        </form>
      </div>
      <div>
        <div className='mt-4 d-flex justify-content-center '>
          {isLogin ? <span>Login</span> : null}
        </div>
        <div className='mt-4 d-flex justify-content-center '>
          <button onClick={onLogin} className='btn btn-outline-primary'>
            Login
          </button>
        </div>
      </div>
    </div>
  )
}

// ////////////////////////////////// ////////////////////////////////// ////////////////////////////////
const FunctionComp = () => {
  return (
    <div>
      <Guest fname='Jamshid' lname='Makhmudov' />
    </div>
  )
}
export default FunctionComp
