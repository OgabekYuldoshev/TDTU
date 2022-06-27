
import InputMask from 'react-input-mask'

const Input = ({ invalid = false, label, mask, ...props }) => (
    <div className='w-full block'>
        {!!label && <label className='font-medium'>{label}</label>}
        <InputMask mask={mask} {...props}>
            {(inputProps) => <input {...inputProps} className={`${invalid ? "border-red-500" : "border-primary_green"} duration-300 bg-transparent border rounded px-2 py-1  focus:outline-none block w-full`} />}
        </InputMask>
    </div>

)

export default Input