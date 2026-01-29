import React from 'react'

interface Props {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>,
    handleadd: (e:React.FormEvent) => void;
}

const InputField:React.FC<Props> = ({ todo, setTodo, handleadd} ) =>  {
  return (
    <form className='input_field' onSubmit={handleadd}>
        <input type="text" 
        placeholder='Enter a task...' 
        className='input_bar'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
         />
         <button className='add' type='submit'>add</button>
    </form>
  )
}

export default InputField
