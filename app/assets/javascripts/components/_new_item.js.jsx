const NewFruit = (props) => {
  let formFields = {}
 
  return(
    <form onSubmit={ (e) => {
      props.handleFormSubmit(formFields.name.value, formFields.description.value); e.target.removeEventListener();}
      }>
     <input ref={input => formFields.name = input} placeholder='Enter the name'/>
     <input ref={input => formFields.description = input} placeholder='Enter description' />
     <button>Submit</button>
    </form>
  )
}