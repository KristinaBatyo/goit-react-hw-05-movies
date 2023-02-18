

export const SearchMovies = ({ onSubmit, value, onChange }) => {
    return (
        <>
        <form onSubmit={onSubmit}>
        <input 
        type="text"
        value={value == null ? '' : value}
        onChange={onChange}
        />
        </form>

        </>
    )
}