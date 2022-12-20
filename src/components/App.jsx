import DropdownMenu from "./DropdownMenu/DropdownMenu";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        backgroundColor:'#d8bfd8',
      }}
    >
      <DropdownMenu/>
    </div>
  );
};
