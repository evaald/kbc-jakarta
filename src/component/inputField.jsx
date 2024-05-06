

const InputField = (props) => {
    return(
        <>
        <div class="pb-4">
        <label for="helper-text" class="block mb-2 text-sm font-bold text-gray-900 ">{props.label}</label>
        <input type={props.typeInput} id="helper-text" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder={props.placeholder} required/>
        </div>
        </>
    )
}

export default InputField;