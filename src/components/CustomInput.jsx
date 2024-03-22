export default function CustomInput({id, type, label, onChange}) {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input style={{padding:'12px',marginTop:'6px'}} type={type} id={id} onChange={onChange}/>
        </>
    )
}