export default function SearchBar({ setCountry, setName, country }) {
  return (
    <div className="w-[400px] h-[50px] absolute top-2 left-[35%] flex justify-between">
      <input
        className="w-[70%] "
        type="text"
        onChange={(e) => {
          setCountry(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setName(country);
        }}
        className="w-[20%]  bg-red-900 hover:bg-red-600"
      >
        <i class="fa-sharp fa-solid fa-people-simple"></i>
      </button>
    </div>
  );
}
