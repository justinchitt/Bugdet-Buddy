function DeleteButton({id, handleDeleteItem}) {
    function HandleDelete(){
        fetch(`/budgets/${id}`, {
            method: "DELETE"
        })
        .then(resp => resp.json())
        .then(deleted => handleDeleteItem(deleted))
    }

    return(
        <button onClick={HandleDelete}>Delete</button>
    )
}

export default DeleteButton