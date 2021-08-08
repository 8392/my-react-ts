function List({listClick, setCity}) {
    // console.log('a', a, b)
    

    const handleClick = () => {
        // console.log('handleClick')
        listClick('chuanc')
        setCity('重庆')
    }

    return (
        <div>
           {/* List */}
           <button onClick={handleClick}>点击</button>
        </div>
    )
}

export default List